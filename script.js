const practiceName = "Practica 1 - Mi pagina de dinosaurios";

function normalizeFileName(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getCheckedValues(form, name) {
  return Array.from(form.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function getFieldValue(form, id) {
  const field = form.querySelector(`#${id}`);
  return field ? field.value.trim() : "";
}

function buildPdfSections(form) {
  return [
    {
      title: "Datos del alumno",
      lines: [
        `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
        `Grupo o grado: ${getFieldValue(form, "groupName") || "No especificado"}`,
      ],
    },
    {
      title: "Parte 1: Investigo mi dinosaurio",
      lines: [
        `Nombre del dinosaurio: ${getFieldValue(form, "dinoName")}`,
        `Que comia: ${getFieldValue(form, "dinoFood")}`,
        `Como era: ${getFieldValue(form, "dinoLook") || "Sin respuesta"}`,
        `Donde vivia: ${getFieldValue(form, "dinoHabitat") || "Sin respuesta"}`,
        `Oracion: ${getFieldValue(form, "dinoSentence")}`,
      ],
    },
    {
      title: "Parte 2: Pienso antes de crear",
      lines: [
        `Que pondras primero en tu pagina: ${getFieldValue(form, "firstElement") || "Sin respuesta"}`,
        `Donde ira la imagen: ${getFieldValue(form, "imagePlace") || "Sin respuesta"}`,
        `Cuantos textos escribiras: ${getFieldValue(form, "textCount") || "Sin respuesta"}`,
      ],
    },
    {
      title: "Parte 3: Diseno mi pagina",
      lines: [
        `Descripcion del diseno: ${getFieldValue(form, "pageSketch") || "Sin respuesta"}`,
      ],
    },
    {
      title: "Parte 4: Trabajo en el sistema",
      lines: [
        `Actividades completadas: ${getCheckedValues(form, "progress").join(", ") || "Ninguna marcada"}`,
      ],
    },
    {
      title: "Parte 5: Reflexiono",
      lines: [
        `Te gusto tu pagina y por que: ${getFieldValue(form, "likedPage") || "Sin respuesta"}`,
        `Lo mas facil: ${getFieldValue(form, "easyPart") || "Sin respuesta"}`,
        `Lo mas dificil: ${getFieldValue(form, "hardPart") || "Sin respuesta"}`,
        `Lo que aprendiste: ${getFieldValue(form, "learnedPart") || "Sin respuesta"}`,
      ],
    },
  ];
}

function addWrappedText(pdf, text, x, y, options = {}) {
  const maxWidth = options.maxWidth || 170;
  const lineHeight = options.lineHeight || 7;
  const pageHeight = pdf.internal.pageSize.getHeight();
  const lines = pdf.splitTextToSize(text, maxWidth);

  lines.forEach((line) => {
    if (y > pageHeight - 18) {
      pdf.addPage();
      y = 20;
    }
    pdf.text(line, x, y);
    y += lineHeight;
  });

  return y;
}

function generatePdf(form) {
  const jspdfApi = window.jspdf;

  if (!jspdfApi || !jspdfApi.jsPDF) {
    throw new Error("La libreria de PDF no esta disponible en este momento.");
  }

  const { jsPDF } = jspdfApi;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const studentName = getFieldValue(form, "studentName");
  const fileStudentName = normalizeFileName(studentName || "Alumno");
  const filePracticeName = normalizeFileName(practiceName);

  pdf.setFillColor(255, 122, 24);
  pdf.rect(0, 0, 210, 26, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("Practicario de Desarrollo Web", 14, 16);

  pdf.setTextColor(24, 49, 83);
  pdf.setFontSize(14);
  pdf.text(practiceName, 14, 36);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);
  let y = 46;
  y = addWrappedText(pdf, `Alumno: ${studentName || "No especificado"}`, 14, y);
  y = addWrappedText(pdf, `Fecha de descarga: ${new Date().toLocaleString("es-MX")}`, 14, y + 1);

  buildPdfSections(form).forEach((section) => {
    if (y > 260) {
      pdf.addPage();
      y = 20;
    }

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text(section.title, 14, y + 4);
    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);

    section.lines.forEach((line) => {
      y = addWrappedText(pdf, line, 16, y, { maxWidth: 178, lineHeight: 6 });
      y += 2;
    });

    y += 3;
  });

  pdf.save(`${fileStudentName}_${filePracticeName}.pdf`);
}

function setMessage(message, isError = false) {
  const messageNode = document.querySelector("#formMessage");
  if (!messageNode) {
    return;
  }

  messageNode.textContent = message;
  messageNode.classList.toggle("is-error", isError);
}

function validateRequiredFields(form) {
  const requiredIds = ["studentName", "dinoName", "dinoFood", "dinoSentence"];
  const missing = requiredIds.filter((id) => !getFieldValue(form, id));

  if (missing.length > 0) {
    setMessage("Completa tu nombre, el dinosaurio, qué comía y una oración antes de descargar el PDF.", true);
    return false;
  }

  return true;
}

function resetForm(form) {
  form.reset();
  setMessage("Las respuestas fueron limpiadas.");
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#practiceForm");
  const clearBtn = document.querySelector("#clearBtn");

  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequiredFields(form)) {
      return;
    }

    try {
      setMessage("Generando PDF...");
      generatePdf(form);
      setMessage("Tu PDF se descargo correctamente.");
    } catch (error) {
      setMessage(error.message || "No fue posible generar el PDF.", true);
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      resetForm(form);
    });
  }
});
