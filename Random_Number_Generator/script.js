// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const myColor = document.getElementById("myColor");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");


const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;



    if(randomNum1 >= 4) {
        myLabel1.style.color = "red";
    }
    else{
        myLabel1.style.color = "green";
    }

    if(randomNum2 >= 4) {
        myLabel2.style.color = "red";
    }
    else{
        myLabel2.style.color = "green";
    }

    if(randomNum3 >= 4) {
        myLabel3.style.color = "red";
    }
    else{
        myLabel3.style.color = "green";
    }


    //if all number is less than to
    if(randomNum1 <= 3 && randomNum2 <= 3 && randomNum3 <= 3) {
        myColor.innerHTML = '<span style="color:green;">ALL GREEN</span>';
        
    }
    else if(randomNum1 >= 4 && randomNum2 >= 4 && randomNum3 >= 4){
        myColor.innerHTML = '<span style="color:red;">ALL RED</span>';
    }
    else{
        if(randomNum1 >= 4 && randomNum2 >= 4 && randomNum3 <= 3){
            myColor.innerHTML = '<span style="color:red;">2 RED</span> AND <span style="color:green;">1 GREEN</span>';

        }
        else if(randomNum1 >= 4 && randomNum2 <= 3 && randomNum3 >= 4){
            myColor.innerHTML = '<span style="color:red;">2 RED</span> AND <span style="color:green;">1 GREEN</span>';
        
        }
        else if(randomNum1 <= 3 && randomNum2 >= 4 && randomNum3 >= 4){
            myColor.innerHTML = '<span style="color:red;">1 RED</span> AND <span style="color:green;">1 GREEN</span>';
            
        }
        else if(randomNum1 <= 3 && randomNum2 <= 3 && randomNum3 >= 4){
            myColor.innerHTML = '<span style="color:green;">2 GREEN</span> AND <span style="color:red;">1 RED</span>';
            
        }
        else if(randomNum1 >= 4 && randomNum2 <= 3 && randomNum3 <= 3){
            myColor.innerHTML = '<span style="color:green;">2 GREEN</span> AND <span style="color:red;">1 RED</span>';
            
        }
        else if(randomNum1 <= 3 && randomNum2 >= 4 && randomNum3 <= 3){
            myColor.innerHTML = '<span style="color:green;">2 GREEN</span> AND <span style="color:red;">1 RED</span>';
            
        }
        else{
            myColor.innerHTML = '<span style="color:blue;">NO RED or GREEN</span>';
            
        }


}
}

