let count = 0;
let countEL = document.getElementById("count-el");

function myCounter(){
    count += 1;
    countEL.textContent = count;
}

let numEL = document.getElementById("num");

function result(){
    let entries = count + "-";
    numEL.textContent += entries;
    console.log(count);
    countEL.textContent = 0;
    count = 0;
}