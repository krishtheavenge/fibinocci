function fibinossi(){
    var num1 = 0;  
    var num2 = 1;
    var numtotal;
    while(numtotal == 13){
        numtotal = num1+num2;
        document.getElementById("display").innerHTML=numtotal;
        console.log(numtotal);
        num1=num2;
        num2=numtotal;
    } 
}