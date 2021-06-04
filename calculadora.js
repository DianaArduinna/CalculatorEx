var a;
var b;
var operando;



function init(){
    var resultado =document.getElementById("resultado");
    var uno =document.getElementById("uno");
    var dos =document.getElementById("dos");
    var tres =document.getElementById("tres");
    var cuatro =document.getElementById("cuatro");
    var cinco =document.getElementById("cinco");
    var seis =document.getElementById("seis");
    var siete =document.getElementById("siete");
    var ocho =document.getElementById("ocho");
    var nueve =document.getElementById("nueve");
    var cero =document.getElementById("cero");
    var suma =document.getElementById("suma");
    var resta =document.getElementById("resta");
    var reset =document.getElementById("reset");
    var igual =document.getElementById("igual");
    var multiplicacion =document.getElementById("multiplicacion");
    var division=document.getElementById("division");
     
    //eventos
    uno.onclick = function(e){
        resultado.textContent=resultado.textContent+ "1"
    }
    dos.onclick = function(e){
        resultado.textContent=resultado.textContent+ "2"
    }
    tres.onclick = function(e){
        resultado.textContent=resultado.textContent+ "3"
    }
    cuatro.onclick = function(e){
        resultado.textContent=resultado.textContent+ "4"
    }
    cinco.onclick = function(e){
        resultado.textContent=resultado.textContent+ "5"
    }
    seis.onclick = function(e){
        resultado.textContent=resultado.textContent+ "6"
    }
    siete.onclick = function(e){
        resultado.textContent=resultado.textContent+ "7"
    }
    ocho.onclick = function(e){
        resultado.textContent=resultado.textContent+ "8"
    }
    nueve.onclick = function(e){
        resultado.textContent=resultado.textContent+ "9"
    }
    cero.onclick = function(e){
        resultado.textContent=resultado.textContent+ "0"
    }
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        a=resultado.textContent;
        operacion="+";
        limpiar();

    }
    resta.onclick = function(e){
        a=resultado.textContent;
        operacion="-";
        limpiar();

    }
    multiplicacion.onclick = function(e){
        a=resultado.textContent;
        operacion="*";
        limpiar();

    }
    division.onclick = function(e){
        a=resultado.textContent;
        operacion="/";
        limpiar();

    }
    igual.onclick= function(e){
        b=resultado.textContent;
        resolver();
    }
    function limpiar(){
        resultado.textContent="";
    }
    function resetear(){
        resultado.textContent= "";
        a=0;
        b=0;
        operacion="";
    } 
     function resolver(){
         var res =0;
         switch(operacion){
             case"+":
             res=parseFloat(a)+parseFloat(b);
             break;
        
            case"-":
            res=parseFloat(a)-parseFloat(b);
            break;
        
            case"*":
            res=parseFloat(a)*parseFloat(b);
            break;
       
            case"/":
            res=parseFloat(a)/parseFloat(b);
            break;
        }
        resetear();
        resultado.textContent=res;

    } 



}
