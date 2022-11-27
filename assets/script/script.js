(() => {
//guardamos la acción del boton formulario
const btn = document.querySelector("[data-form-btn]");

const createTask = (evento) => {
  evento.preventDefault(); //evita que se recargue la pagina borrando la información
  const input = document.querySelector("[data-form-input]");
  const value = input.value; //guardamos la información del input
  const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes
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
  const content = `
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `; //creamos el div y le pasamos el value para que lo guarde dentro
  task.appendChild(taskContent); //agregamos al task el div con la info ingresada en el input
  list.appendChild(task); //agregamos a la lista el task
};

btn.addEventListener("click", createTask);

const checkComplete = () => {
  const i = document.createElement("i"); 
  i.classList.add("far", "fa-check-square", "icon");
  i.addEventListener("click", completeTask);
  return i;
};

const completeTask = (event) =>{
  const element = event.target;
  element.classList.toggle("fas");
  element.classList.toggle("completeIcon");
  element.classList.toggle("far");
}
})();