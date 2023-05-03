function add(){
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   document.getElementById('calRes').innerHTML=number1+number2; 
   if(number1=="" && number2==""){
    document.getElementById('calRes').innerHTML="please Enter Number"; 
   }
}
function sub(){
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   document.getElementById('calRes').innerHTML=number1-number2; 
   if(number1=="" && number2==""){
    document.getElementById('calRes').innerHTML="please Enter Number"; 
   }
}
function mul(){
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   document.getElementById('calRes').innerHTML=number1*number2; 
   if(number1=="" && number2==""){
    document.getElementById('calRes').innerHTML="please Enter Number"; 
   }
}
function div(){
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   document.getElementById('calRes').innerHTML=number1/number2; 
   if(number1=="" && number2==""){
    document.getElementById('calRes').innerHTML="please Enter Number"; 
   }
}
function per(){
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
   document.getElementById('calRes').innerHTML=number1%number2; 
   if(number1=="" && number2==""){
    document.getElementById('calRes').innerHTML="please Enter Number"; 
   }
}
function AC(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
}
function clear(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
}