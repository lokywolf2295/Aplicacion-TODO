import { addTask } from "./components/addTask.js";

const btn = document.querySelector("[data-form-btn]");//guardamos la acción del boton formulario

btn.addEventListener("click", addTask);