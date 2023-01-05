import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates } from "../services/date.js";

export const displayTasks = () => {
  const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes

  const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
  const dates = uniqueDates(tasksList);


  dates.forEach((date) => {
    const dateMoment = moment(date, "DD/MM/YYYY");
    list.appendChild(dateElement(date));

    tasksList.forEach((task) => { //esto obtebdrá cada task almacenado en local storage y lo imprime en pantalla
      const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
      const diff = dateMoment.diff(taskDate);
      
      if (diff == 0) {
        list.appendChild(createTask(task));
      }
    });
  });
};
