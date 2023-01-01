import checkComplete from "./components/checkComplete.js";
import deleteIco from "./components/deleteIco.js";

(() => {
  //guardamos la acción del boton formulario
  const btn = document.querySelector("[data-form-btn]");

  const addTask = (event) => {
    const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes
    const task = createTask(event); //llamo a la fincion de crear task
    list.appendChild(task); //agregamos a la lista el task
  }

  const createTask = (evento) => {
    evento.preventDefault(); //evita que se recargue la pagina borrando la información
    const input = document.querySelector("[data-form-input]");
    const calendar = document.querySelector("[data-form-date]");
    const value = input.value; //guardamos la información del input
    const date = calendar.value; //guardamos la información de la fecha
    const dateFormat = moment(date).format("DD/MM/YYYY");
    const task = document.createElement("li"); //creamos un li
    task.classList.add("card"); //agregamos una clase al task
    input.value = ""; //vaciamos el input
    
    //backticks
    const taskContent = document.createElement("div"); //creo un elemento div
    taskContent.appendChild(checkComplete()); //agregamos al div check

    const titleTask = document.createElement("span"); //creo un elemento span
    titleTask.classList.add("task"); //agregamos la clase task al titleTask
    titleTask.innerText = value; //agregamos al titleTask el valor del inpút
    taskContent.appendChild(titleTask); //agregamos al contenido el titleTask
    
    const dateElement = document.createElement("span"); //creo el elemento span para la fecha
  dateElement.innerHTML = dateFormat; //le agrego al span la fecha obtenida

    task.appendChild(taskContent); //agregamos al task el div con la info ingresada en el input
    task.appendChild(dateElement); //agrego al task la fecha
    task.appendChild(deleteIco());
    return task; //agregamos a la lista el task
  };

  btn.addEventListener("click", addTask);
})();
