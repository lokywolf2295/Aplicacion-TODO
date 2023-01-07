import checkComplete from "./checkComplete.js";
import deleteIco from "./deleteIco.js";
import { displayTasks } from "./displayTasks.js";

export const addTask = (event) => {
    event.preventDefault(); //evita que se recargue la pagina borrando la información
    
    const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes
    const input = document.querySelector("[data-form-input]"); //guardamos el input
    const calendar = document.querySelector("[data-form-date]"); //guardamos el input de la fecha
    
    const value = input.value; //guardamos la información del input
    const date = calendar.value; //guardamos la información de la fecha
    const dateFormat = moment(date).format("DD/MM/YYYY");
    
    if(input == "" || date == ""){ //corroboramos que ambos inputs tengan información
      return
    }
    
    input.value = ""; //vaciamos el input
    calendar.value = ""; //vaciamos el calendario

    const complete = false; //se utilizará para verificar si el check está activado o no

    const taskObj = { //crea una variable que almacena una clave y su valor
      value, //texto
      dateFormat, //fecha
      complete, //para el check
      id: uuid.v4(),
    };

    list.innerHTML = ''; //por cada vez que se agreguen tareas nuevas se vacía la estructura

    //sessionStorage.setItem("tasks", JSON.stringify(taskObj)); 
    
    const taskList = JSON.parse(localStorage.getItem("tasks")) || []; //creamos un arreglo
    taskList.push(taskObj); //agregamos cada ingreso a el arreglo
    localStorage.setItem("tasks", JSON.stringify(taskList)); //pasamos la lista como parametro a almacenar
    
    displayTasks(); //llama a la función que agrupa las fechas
  };

  //Arrow function o funciones flechas / anonimas
  export const createTask = ({value,dateFormat, complete, id}) => {
    const task = document.createElement("li"); //creo un elemento li
        task.classList.add("card"); //agregamos una clase al task
    
    //backticks
    const taskContent = document.createElement("div"); //creo un elemento div
    
    const check = checkComplete(id);
  
    if(complete){
      check.classList.toggle("fas");
      check.classList.toggle("completeIcon");
      check.classList.toggle("far");
    }

    const titleTask = document.createElement("span"); //creo un elemento span
        titleTask.classList.add("task"); //agregamos la clase task al titleTask
        titleTask.innerText = value; //agregamos al titleTask el valor del inpút
        taskContent.appendChild(check); //agregamos al div check
        taskContent.appendChild(titleTask); //agregamos al contenido el titleTask

    const dateElement = document.createElement("span"); //creo el elemento span para la fecha
        dateElement.innerHTML = dateFormat; //le agrego al span la fecha obtenida
        task.appendChild(taskContent); //agrego al task el div con la info ingresada en el input
        task.appendChild(dateElement); //agrego al task la fecha
        task.appendChild(deleteIco()); //agrego al contenido el icono del basurero
    return task;
  };