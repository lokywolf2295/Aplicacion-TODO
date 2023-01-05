import { createTask } from "./addTask.js";

export const readTasks = () => {
  const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];

  tasksList.forEach((task) => { //esto obtebdrá cada task almacenado en local storage y lo imprime en pantalla
    list.appendChild(createTask(task));
  });
};
