const crossedDueDate= (dueDate) => {
    let currentDate = new Date().getTime();
    const diffDays = Math.ceil((dueDate - currentDate) / (1000 * 3600 * 24)); 
    if(diffDays >=0){
        return true;
    }else{
        return false;
    }   
}

module.exports = { crossedDueDate };