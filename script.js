let numbers =document.getElementById("result")
console.log(numbers)

function display(value){
 numbers.value +=value;
}



 
 function clearscr(){
    numbers.value=""; 
}
function solve(){
    let x=numbers.value;
    let ans=eval(x)
    numbers.value=ans;
}



