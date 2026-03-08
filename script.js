let count = 0;

const display = document.getElementById("count");

document.getElementById("increase").onclick = function(){
count++;
display.textContent = count;
}

document.getElementById("decrease").onclick = function(){
    if(count <= 0){
        count = 0
    }else{
        count--;
    }

display.textContent = count;
}

document.getElementById("reset").onclick = function(){
count = 0;
display.textContent = count;
}