
$(function()
{

let jogador = "";
let vencedor = "";
let terminou = "0";

function verifica(a, b, c){
    var linhaA = document.getElementById(a).style.backgroundImage;
    var linhaB = document.getElementById(b).style.backgroundImage;
    var linhaC = document.getElementById(c).style.backgroundImage;
    if( (linhaA == linhaB) && (linhaB == linhaC) && (linhaA != "none" && linhaA != "")){
        if(linhaA.replace(/"/g, "") == "url(images/apple.png)"){
            vencedor = "Apple venceu!";
        }
        else
        {
            vencedor = "Windows venceu!";
        }
        return true;
    }
    else{
        return false;
    }
}

function verificarJogo(){
    if( verifica("A1","A2","A3") || verifica("B1","B2","B3") || verifica("C1","C2","C3") ||
        verifica("A1","B1","C1") || verifica("A2","B2","C2") || verifica("A3", "B3","C3") ||
        verifica("A1","B2","C3") || verifica("A3","B2","C1")
        ){
        document.getElementById('player').innerHTML=(vencedor);
        terminou = "1";
     }
}

//Evento Escolha Jogador Apple

document.getElementById('apple').addEventListener('click', function (){
        jogador = "url(images/apple.png)";
        document.getElementById('player').innerHTML="APPLE";   
}
);

//Evento Escolha Jogador Windows
document.getElementById('windows').addEventListener('click', function ()
	{
        jogador = "url(images/windows.png)";
        document.getElementById('player').innerHTML="WINDOWS";
    }
);

//Evento de cada DIV coluna


 document.getElementById('A1').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('A1').style.backgroundImage = jogador;
    document.getElementById('A1').style.backgroundSize = "100%";
    document.getElementById('A1').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('A2').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('A2').style.backgroundImage = jogador;
    document.getElementById('A2').style.backgroundSize = "100%";
    document.getElementById('A2').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('A3').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('A3').style.backgroundImage = jogador;
    document.getElementById('A3').style.backgroundSize = "100%";
    document.getElementById('A3').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('B1').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('B1').style.backgroundImage = jogador;
    document.getElementById('B1').style.backgroundSize = "100%";
    document.getElementById('B1').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('B2').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('B2').style.backgroundImage = jogador;
    document.getElementById('B2').style.backgroundSize = "100%";
    document.getElementById('B2').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('B3').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('B3').style.backgroundImage = jogador;
    document.getElementById('B3').style.backgroundSize = "100%";
    document.getElementById('B3').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('C1').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('C1').style.backgroundImage = jogador;
    document.getElementById('C1').style.backgroundSize = "100%";
    document.getElementById('C1').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('C2').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('C2').style.backgroundImage = jogador;
    document.getElementById('C2').style.backgroundSize = "100%";
    document.getElementById('C2').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});

document.getElementById('C3').addEventListener('click', function () 
{
    if(terminou != "1"){
    document.getElementById('C3').style.backgroundImage = jogador;
    document.getElementById('C3').style.backgroundSize = "100%";
    document.getElementById('C3').style.backgroundRepeat = "no-repeat";
    verificarJogo();
    }
});



});//FIM javascript

