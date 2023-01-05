import { addTask } from "./components/addTask.js";
import { readTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");//guardamos la acción del boton formulario

btn.addEventListener("click", addTask);

readTasks();