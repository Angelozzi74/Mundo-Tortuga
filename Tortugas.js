//Crear una funcion inicial
window.onload = function()
{
    //1. SELECCIONAR ELEMENTO DE CONTROL (IMAGEN LEONARDO)
    let imgleonardo = document.querySelector("#leonardo");
    //2. crear un evento que realizara la imagen al recibir click
    imgleonardo.addEventListener("click",frasedeleonardo);

    //1.SELECCIONR ELEMENTO DE CONTROL IMAGEN DONATELLO
    let imgdonatello = document.querySelector("#donatello");
    //2. crear un evento que realizara la imagen al recibir click
    imgdonatello.addEventListener("click",textodedonatello);
    let imgmiguel = document.querySelector("#miguel");
    imgmiguel.addEventListener("click",dichodemiguel);
    let imgrafael = document.querySelector("#rafael");
    imgrafael.addEventListener("click",dijorafael);

}
function dijorafael(){
    let nombremiguel = document.querySelector("#rafaelName");
    if(nombremiguel.innerHTML == "Rafael"){
        nombremiguel.innerHTML = "PALERMOOOOOOOOGOOOOOOLLLLL!!!";
    }
    else{
        nombremiguel.innerHTML = "Rafael";
    }
}
function dichodemiguel(){
    let nombremiguel = document.querySelector("#miguelName");
    if(nombremiguel.innerHTML == "Miguel"){
        nombremiguel.innerHTML = "BBBBBOOOOOCCAAAA!!!";
    }
    else{
        nombremiguel.innerHTML = "Miguel";
    }
}
function textodedonatello(){
    //SELECCIONAR EL TEXTO QUE VOY A MODIFICAR
    let nombredonatello = document.querySelector("#donatelloName");
    //logica para mostrar/ocultar
    if(nombredonatello.innerHTML == "Donatello")
        {
        //realizar acciones estas
        nombredonatello.innerHTML = "SOY DE BOCA";}
    else{
        nombredonatello.innerHTML = "Donatello";
    }
}
//3.frase de Leonardo crear funcion
function frasedeleonardo(){
    //SELECCIONAR EL TEXTO QUE VOY A MODIFICaR
    let nombreleonardo = document.querySelector("#leonardoName");

    //LOGICA PARA MOSTRAR/OCULTAR

    if(nombreleonardo.innerHTML == "Leonardo")
        {
        //REALIZAR ESTAS ACCIONES
        nombreleonardo.innerHTML = "VAMOS BOCA CARAJO.!!!";
    }
    else{
        nombreleonardo.innerHTML = "Leonardo";
    }
    
    
}