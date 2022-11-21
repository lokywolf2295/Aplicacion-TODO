//guardamos la acción del boton formulario
const btn = document.querySelector('[data-form-btn]');
console.log(btn);



const createTask = (evento)=>{
    evento.preventDefault();//evita que se recargue la pagina borrando la información
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
}

//listener => escucha el click del boton
btn.addEventListener('click', createTask);


