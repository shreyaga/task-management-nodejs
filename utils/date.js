
const isValidDate= (value) => {
    if (!value.match(/^\d{2}-\d{2}-\d{4}$/)) return false;
  
    const date = new Date(value);
    if (!date.getTime()) return false;
    return date.toISOString().slice(0, 10) === value;
}

const crossedDueDate= (newDate, currentDate) => {
    newDate = new Date(newDate).getTime();
    currentDate = new Date(currentDate).getTime();
    const diffDays = Math.ceil((date1 - date2) / (1000 * 3600 * 24)); 
    if(diffDays >=0){
        return true;
    }else{
        return false;
    }   
}

module.exports = {isValidDate, crossedDueDate}