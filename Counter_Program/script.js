// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

decreaseBtn .onclick = function() {
    count--;
    countLabel.textContent = count;
    if(count === 0) {
        countLabel.style.color = "black";
        }
        if(count < 0){
            countLabel.style.color = "red";  
        }
}

resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    countLabel.style.color = "black";
}

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
    if(count === 0) {
    countLabel.style.color = "black";
    }
    if(count > 0){
        countLabel.style.color = "green";  
    }

}