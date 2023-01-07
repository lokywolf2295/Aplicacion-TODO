import { displayTasks } from "./displayTasks.js";

const deleteIco = (id) => {
    const i = document.createElement("i"); //creamos un elemento i
    i.classList.add("fas","fa-trash-alt", "trashIcon" ,"icon"); //agregamos las clase al elemento i
    i.addEventListener("click", () => dumpTask(id));
    return i; //devolvemos el valor de i
  };
  
  const dumpTask = (id) =>{
    const list = document.querySelector("[data-list]"); //seleccionamos la lista
    const tasks = JSON.parse(localStorage.getItem("tasks")); //obtenemos la información del localstorage
    const index = tasks.findIndex((item) => item.id == id); //obtenemos la posición
    tasks[index]['complete'] = !tasks[index]['complete']; //cambiamos su valor
    tasks.splice(index,1); //eliminamos un elemento de la lista
    list.innerHTML = ""; //vaciamos la lista
    localStorage.setItem("tasks", JSON.stringify(tasks)); //pasamos las nuevas tareas al localstorage
    displayTasks(); //llamado, para mostrar las nuevas tareas modificadas
  }

  export default deleteIco;