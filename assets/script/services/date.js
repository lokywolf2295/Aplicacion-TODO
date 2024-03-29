export const uniqueDates = (tasks) => {
    const  unique = [];

    tasks.forEach((task) => {
        if(!unique.includes(task.dateFormat)){
            unique.push(task.dateFormat);
        }
    });
    return unique;
};

export const orderDates = (dates) => { //ordena cada fecha de la mas antigua a la mas moderna / furura
    return dates.sort((a, b) => {
      const firstDate = moment(a, "DD/MM/YYYY");
      const secondDate = moment(b, "DD/MM/YYYY");
      return firstDate - secondDate;
    });
  };

  export const orderTimes = (dates) => { //ordena los horarios
    return dates.sort((a, b) => {
      const firstTime = moment(a, "LT");
      const secondTime = moment(b, "LT");
      return  firstTime - secondTime;
    });
  };