const practiceConfigs = {
  "practice-1": {
    practiceName: "Practica 1 - Mi pagina de dinosaurios",
    requiredIds: ["studentName", "dinoName", "dinoFood", "dinoSentence"],
    validationMessage: "Completa tu nombre, el dinosaurio, qué comía y una oración antes de descargar el PDF.",
    sections: (form) => [
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
    ],
  },
  "practice-2": {
    practiceName: "Practica 2 - Mi pagina del sistema solar",
    requiredIds: ["studentName", "spaceTopic", "planetCount", "spaceSentence"],
    validationMessage: "Completa tu nombre, el tema elegido, la cantidad de planetas y una oración antes de descargar el PDF.",
    sections: (form) => [
      {
        title: "Datos del alumno",
        lines: [
          `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
          `Grupo o grado: ${getFieldValue(form, "groupName") || "No especificado"}`,
        ],
      },
      {
        title: "Parte 1: Investigo el sistema solar",
        lines: [
          `Tema elegido: ${getFieldValue(form, "spaceTopic")}`,
          `Cantidad de planetas: ${getFieldValue(form, "planetCount")}`,
          `Planeta o cuerpo celeste favorito: ${getFieldValue(form, "favoriteBody") || "Sin respuesta"}`,
          `Caracteristicas del tema: ${getFieldValue(form, "spaceFeatures") || "Sin respuesta"}`,
          `Oracion: ${getFieldValue(form, "spaceSentence")}`,
        ],
      },
      {
        title: "Parte 2: Planeo mi pagina",
        lines: [
          `Titulo de la pagina: ${getFieldValue(form, "pageTitle") || "Sin respuesta"}`,
          `Imagen principal: ${getFieldValue(form, "mainImage") || "Sin respuesta"}`,
          `Secciones de la pagina: ${getFieldValue(form, "pageSections") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 3: Diseno espacial",
        lines: [
          `Descripcion del diseno: ${getFieldValue(form, "spaceDesign") || "Sin respuesta"}`,
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
    ],
  },
  "practice-3": {
    practiceName: "Practica 3 - Historia de la informatica",
    requiredIds: ["studentName", "historyTopic", "oldDevice", "historySentence"],
    validationMessage: "Completa tu nombre, el tema elegido, el invento o aparato investigado y una oración antes de descargar el PDF.",
    sections: (form) => [
      {
        title: "Datos del alumno",
        lines: [
          `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
          `Grupo o grado: ${getFieldValue(form, "groupName") || "No especificado"}`,
        ],
      },
      {
        title: "Parte 1: Investigo la historia de la informatica",
        lines: [
          `Tema elegido: ${getFieldValue(form, "historyTopic")}`,
          `Aparato o invento investigado: ${getFieldValue(form, "oldDevice")}`,
          `Como ha cambiado la tecnologia: ${getFieldValue(form, "historyChange") || "Sin respuesta"}`,
          `Dato interesante: ${getFieldValue(form, "favoriteFact") || "Sin respuesta"}`,
          `Oracion: ${getFieldValue(form, "historySentence")}`,
        ],
      },
      {
        title: "Parte 2: Planeo mi pagina",
        lines: [
          `Titulo de la pagina: ${getFieldValue(form, "historyTitle") || "Sin respuesta"}`,
          `Partes de la pagina: ${getFieldValue(form, "historySections") || "Sin respuesta"}`,
          `Imagenes y audios de la biblioteca: ${getFieldValue(form, "libraryResources") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 3: Diseno y recursos",
        lines: [
          `Descripcion del diseno: ${getFieldValue(form, "historyDesign") || "Sin respuesta"}`,
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
    ],
  },
  "practice-4": {
    practiceName: "Practica 4 - Generaciones de la computadora",
    requiredIds: ["studentName", "practiceTitle", "generationCount", "practiceSentence"],
    validationMessage: "Completa tu nombre, el titulo de tu pagina, cuantas generaciones investigarás y una oración antes de descargar el PDF.",
    sections: (form) => [
      {
        title: "Datos del alumno",
        lines: [
          `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
          `Grupo o grado: ${getFieldValue(form, "groupName") || "No especificado"}`,
        ],
      },
      {
        title: "Parte 1: Investigo las generaciones de la computadora",
        lines: [
          `Titulo de la pagina: ${getFieldValue(form, "practiceTitle")}`,
          `Cantidad de generaciones: ${getFieldValue(form, "generationCount")}`,
          `Generacion favorita: ${getFieldValue(form, "favoriteGeneration") || "Sin respuesta"}`,
          `Dato interesante: ${getFieldValue(form, "interestingFact") || "Sin respuesta"}`,
          `Oracion: ${getFieldValue(form, "practiceSentence")}`,
        ],
      },
      {
        title: "Parte 2: Planeo mi sitio web",
        lines: [
          `Secciones del sitio: ${getFieldValue(form, "siteSections") || "Sin respuesta"}`,
          `Videos del editor que agregara: ${getFieldValue(form, "editorVideos") || "Sin respuesta"}`,
          `Como organizara la informacion: ${getFieldValue(form, "contentOrder") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 3: Diseno y construccion",
        lines: [
          `Descripcion del diseno: ${getFieldValue(form, "siteDesign") || "Sin respuesta"}`,
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
    ],
  },
  "practice-5": {
    practiceName: "Practica 5 - La inflacion y los precios",
    requiredIds: ["studentName", "inflationConcept", "priceComparison", "inflationSentence"],
    validationMessage: "Completa tu nombre, la explicacion de inflacion, la comparacion de precios y una oracion antes de descargar el PDF.",
    sections: (form) => [
      {
        title: "Datos del alumno",
        lines: [
          `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
          `Grupo o grado: ${getFieldValue(form, "groupName") || "No especificado"}`,
        ],
      },
      {
        title: "Parte 1: Entiendo la inflacion",
        lines: [
          `Que es la inflacion: ${getFieldValue(form, "inflationConcept")}`,
          `Comparacion de precios: ${getFieldValue(form, "priceComparison")}`,
          `Como afecta a las personas: ${getFieldValue(form, "howItAffects") || "Sin respuesta"}`,
          `Oracion: ${getFieldValue(form, "inflationSentence")}`,
        ],
      },
      {
        title: "Parte 2: Reflexiono sobre el dinero",
        lines: [
          `El ahorro en la alcancia: ${getFieldValue(form, "piggyBank") || "Sin respuesta"}`,
          `El 'superpoder' del billete: ${getFieldValue(form, "moneyPower") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 3: Empatia y decisiones",
        lines: [
          `Decisiones en el supermercado: ${getFieldValue(form, "supermarketDecisions") || "Sin respuesta"}`,
          `Diversion sin dinero: ${getFieldValue(form, "funWithoutMoney") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 4: Soluciones creativas",
        lines: [
          `Mi regla para los precios: ${getFieldValue(form, "creativeRule") || "Sin respuesta"}`,
          `Cuidar lo que tenemos: ${getFieldValue(form, "careReason") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 5: Trabajo en el sistema",
        lines: [
          `Actividades completadas: ${getCheckedValues(form, "progress").join(", ") || "Ninguna marcada"}`,
        ],
      },
      {
        title: "Parte 6: Reflexiono",
        lines: [
          `Te gusto tu pagina y por que: ${getFieldValue(form, "likedPage") || "Sin respuesta"}`,
          `Lo mas facil: ${getFieldValue(form, "easyPart") || "Sin respuesta"}`,
          `Lo mas dificil: ${getFieldValue(form, "hardPart") || "Sin respuesta"}`,
          `Lo que aprendiste: ${getFieldValue(form, "learnedPart") || "Sin respuesta"}`,
        ],
      },
    ],
  },
  "exam-axolotl": {
    practiceName: "Examen Practico - Mi pagina sobre los ajolotes",
    requiredIds: ["studentName", "axolotlFact1", "axolotlFact2", "axolotlFact3", "axolotlFact4", "pageTitle"],
    validationMessage: "Completa tu nombre, los 4 datos del video y el titulo de tu pagina antes de descargar el PDF.",
    sections: (form) => [
      {
        title: "Datos del alumno",
        lines: [
          `Nombre: ${getFieldValue(form, "studentName") || "No especificado"}`,
          `Grupo: ${getFieldValue(form, "groupName") || "No especificado"}`,
          `Fecha: ${getFieldValue(form, "examDate") || "No especificada"}`,
          "Valor: 10 puntos",
        ],
      },
      {
        title: "Parte 1: Datos sobre los ajolotes",
        lines: [
          `Dato 1: ${getFieldValue(form, "axolotlFact1")}`,
          `Dato 2: ${getFieldValue(form, "axolotlFact2")}`,
          `Dato 3: ${getFieldValue(form, "axolotlFact3")}`,
          `Dato 4: ${getFieldValue(form, "axolotlFact4")}`,
        ],
      },
      {
        title: "Parte 2: Planeo mi pagina",
        lines: [
          `Titulo de la pagina: ${getFieldValue(form, "pageTitle")}`,
          `Organizacion de bloques: ${getFieldValue(form, "pageOrder") || "Sin respuesta"}`,
          `Colores adecuados: ${getFieldValue(form, "pageColors") || "Sin respuesta"}`,
        ],
      },
      {
        title: "Parte 3: Trabajo en el sistema",
        lines: [
          `Actividades completadas: ${getCheckedValues(form, "progress").join(", ") || "Ninguna marcada"}`,
        ],
      },
      {
        title: "Evaluacion",
        lines: [
          "Escribio 4 datos del video: 4 puntos",
          "La pagina esta ordenada: 2 puntos",
          "Uso bloques correctamente: 2 puntos",
          "Uso colores y diseno adecuado: 1 punto",
          "Escribio su nombre: 1 punto",
          "Total: 10 puntos",
        ],
      },
    ],
  },
};

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

function generatePdf(form, config) {
  const jspdfApi = window.jspdf;

  if (!jspdfApi || !jspdfApi.jsPDF) {
    throw new Error("La libreria de PDF no esta disponible en este momento.");
  }

  const { jsPDF } = jspdfApi;
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  const studentName = getFieldValue(form, "studentName");
  const fileStudentName = normalizeFileName(studentName || "Alumno");
  const filePracticeName = normalizeFileName(config.practiceName);

  pdf.setFillColor(255, 122, 24);
  pdf.rect(0, 0, 210, 26, "F");
  pdf.setTextColor(255, 255, 255);
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("Practicario de Desarrollo Web", 14, 16);

  pdf.setTextColor(24, 49, 83);
  pdf.setFontSize(14);
  pdf.text(config.practiceName, 14, 36);

  pdf.setFont("helvetica", "normal");
  pdf.setFontSize(11);
  let y = 46;
  y = addWrappedText(pdf, `Alumno: ${studentName || "No especificado"}`, 14, y);
  y = addWrappedText(pdf, `Fecha de descarga: ${new Date().toLocaleString("es-MX")}`, 14, y + 1);

  config.sections(form).forEach((section) => {
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

function validateRequiredFields(form, config) {
  const missing = config.requiredIds.filter((id) => !getFieldValue(form, id));

  if (missing.length > 0) {
    setMessage(config.validationMessage, true);
    return false;
  }

  return true;
}

function resetForm(form) {
  form.reset();
  setMessage("Las respuestas fueron limpiadas.");
}

async function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "absolute";
  helper.style.left = "-9999px";
  document.body.appendChild(helper);
  helper.select();
  document.execCommand("copy");
  document.body.removeChild(helper);
}

document.addEventListener("DOMContentLoaded", () => {
  const pageKey = document.body.dataset.page;
  const config = practiceConfigs[pageKey];
  const form = document.querySelector("#practiceForm");
  const clearBtn = document.querySelector("#clearBtn");
  const copyButtons = document.querySelectorAll("[data-copy-target]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.dataset.copyTarget;
      const source = document.querySelector(`#${targetId}`);

      if (!source) {
        return;
      }

      try {
        await copyText(source.textContent.trim());
        const originalText = button.textContent;
        button.textContent = "Texto copiado";
        window.setTimeout(() => {
          button.textContent = originalText;
        }, 1800);
      } catch (error) {
        setMessage("No fue posible copiar el texto.", true);
      }
    });
  });

  if (!form || !config) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateRequiredFields(form, config)) {
      return;
    }

    try {
      setMessage("Generando PDF...");
      generatePdf(form, config);
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
