import checkComplete from "./checkComplete.js";
import deleteIco from "./deleteIco.js";

export const addTask = (event) => {
    const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes
    const task = createTask(event); //llamo a la fincion de crear task
    list.appendChild(task); //agregamos a la lista el task
  };

  //Arrow function o funciones flechas / anonimas
  const createTask = (event) => {
    event.preventDefault(); //evita que se recargue la pagina borrando la información
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //creamos un arreglo
    const input = document.querySelector("[data-form-input]"); //guardamos el input
    const calendar = document.querySelector("[data-form-date]"); //guardamos el input de la fecha
    const value = input.value; //guardamos la información del input
    const date = calendar.value; //guardamos la información de la fecha
    const dateFormat = moment(date).format("DD/MM/YYYY");

    const task = document.createElement("li"); //creo un elemento li
    task.classList.add("card"); //agregamos una clase al task
    input.value = ""; //vaciamos el input

    //backticks
    const taskContent = document.createElement("div"); //creo un elemento div
    taskContent.appendChild(checkComplete()); //agregamos al div check

    const taskObj = { //crea una variable que almacena una clave y su valor
      value, //texto
      dateFormat, //fecha
    };

    //sessionStorage.setItem("tasks", JSON.stringify(taskObj)); 

    taskList.push(taskObj); //agregamos cada ingreso a el arreglo

    localStorage.setItem("tasks", JSON.stringify(taskList)); //pasamos la lista como parametro a almacenar
    
    const titleTask = document.createElement("span"); //creo un elemento span
    titleTask.classList.add("task"); //agregamos la clase task al titleTask
    titleTask.innerText = value; //agregamos al titleTask el valor del inpút
    taskContent.appendChild(titleTask); //agregamos al contenido el titleTask

    const dateElement = document.createElement("span"); //creo el elemento span para la fecha
    dateElement.innerHTML = dateFormat; //le agrego al span la fecha obtenida

    task.appendChild(taskContent); //agrego al task el div con la info ingresada en el input
    task.appendChild(dateElement); //agrego al task la fecha
    task.appendChild(deleteIco()); //agrego al contenido el icono del basurero
    return task;
  };