const deleteIco = () => {
    const i = document.createElement("i"); //creamos un elemento i
    i.classList.add("fas","fa-trash-alt", "trashIcon" ,"icon"); //agregamos las clase al elemento i
    i.addEventListener("click", dumpTask);
    return i; //devolvemos el valor de i
  };
  
  const dumpTask = (event) =>{
    const parent = event.target.parentElement;
    parent.remove();
  }

  export default deleteIco;