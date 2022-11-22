//guardamos la acción del boton formulario
const btn = document.querySelector("[data-form-btn]");
//console.log(btn);

const createTask = (evento) => {
  evento.preventDefault(); //evita que se recargue la pagina borrando la información
  const input = document.querySelector("[data-form-input]");
  const value = input.value; //guardamos la información del input
  const list = document.querySelector("[data-list]"); //guardamos el ul que contendra los mensajes
  const task = document.createElement("li"); //creamos un li
  task.classList.add("card"); //agregamos una clase al task
  input.value = ""; //vaciamos el input
  //backticks
  const content = `
    <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">${value}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
    `; //creamos el div y le pasamos el value para que lo guarde dentro
  task.innerHTML = content; //agregamos al task el div con la info ingresada en el input

  list.appendChild(task); //agregamos a la lista el task

  //console.log(content);
};

//listener => escucha el click del boton
btn.addEventListener("click", createTask);
