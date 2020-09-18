var boxEle = document.body.querySelector(".box");

var numberOne = prompt("Enter a number: ");
var numberTwo = prompt("Enter a second number: ");

sum = parseInt(numberOne) + parseInt(numberTwo);

boxEle.innerHTML=sum;

//boxEle.innerHTML=userInput;