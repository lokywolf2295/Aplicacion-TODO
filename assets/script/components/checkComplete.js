const checkComplete = () => {
    const i = document.createElement("i"); //creamos un elemento i
    i.classList.add("far", "fa-check-square", "icon"); //agregamos las clase al elemento i
    i.addEventListener("click", completeTask);
    return i; //devolvemos el valor de i
  };
  
  const completeTask = (event) =>{
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  }

  export default checkComplete;