/* main.js — Portafolio */

const projects = [
  {
    title: "Sistema de Gestión de Inventario",
    description: "Aplicación web para control de stock en tiempo real con reportes exportables y autenticación por roles.",
    url: "#"
  },
  {
    title: "Macaw",
    description: "Pagina web para la gestion de tutorias en linea, con sistema de reservas, perfiles de tutores y registro segun universidad a la que pertenece el usuario.",
    url: "#"
  }
];

function renderProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  grid.innerHTML = projects.map(({ title, description, url }) =>
    `<article class="project-card">
      <h3>${title}</h3>
      <p>${description}</p>
      <a href="${url}" class="project-link">Ver proyecto →</a>
    </article>`
  ).join("");
}

function setupForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const rules = {
    nombre:  v => v.length < 2  ? "Por favor ingresa tu nombre." : "",
    email:   v => !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "Ingresa un correo válido." : "",
    mensaje: v => v.length < 10 ? "El mensaje debe tener al menos 10 caracteres." : ""
  };

  form.addEventListener("submit", e => {
    e.preventDefault();
    const valid = Object.keys(rules).every(id => {
      const msg = rules[id](document.getElementById(id).value.trim());
      document.getElementById(`error-${id}`).textContent = msg;
      return msg === "";
    });
    if (!valid) return;
    const feedback = document.getElementById("form-feedback");
    feedback.textContent = "✓ Mensaje recibido. Te contactaré pronto.";
    form.reset();
    setTimeout(() => { feedback.textContent = ""; }, 5000);
  });

  Object.keys(rules).forEach(id => {
    document.getElementById(id)?.addEventListener("input", () => {
      document.getElementById(`error-${id}`).textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  setupForm();
});