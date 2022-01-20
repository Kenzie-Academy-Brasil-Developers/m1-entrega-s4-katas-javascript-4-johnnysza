const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults (output, titulo){
    const displayResultados = document.getElementById("displayResultados");

    displayResultados.innerHTML = "";

    const tituloKata = document.createElement("h2");
    tituloKata.innerHTML = titulo;

    const paragrafoResultado = document.createElement("p");
    paragrafoResultado.textContent = JSON.stringify(output);
    // if (Array.isArray(output)){
        // paragrafoResultado.innerHTML = output
    //     console.log("Isso é um array")
    // } else {
    //     paragrafoResultado.innerHTML = output
    //     console.log("Isso é um numero")
    // }
    
    displayResultados.appendChild(tituloKata);
    displayResultados.appendChild(paragrafoResultado);
}

function kata1() {
    let gotArray = gotCitiesCSV.split(',');
    showResults(gotArray, "Kata 1");
}

const botaoKata1 = document.getElementById("kata1");
botaoKata1.addEventListener("click", kata1);


function kata2() {
    let btArr = bestThing.split(" ");
    showResults(btArr, "Kata 2");
}

const botaoKata2 = document.getElementById("kata2");
botaoKata2.addEventListener("click", kata2);

function kata3() {
    let gotArray = gotCitiesCSV.replaceAll(',',';');
    showResults(gotArray, "Kata 3");
}

const botaoKata3 = document.getElementById("kata3");
botaoKata3.addEventListener("click", kata3);

function kata4() {
    let lotrArray = lotrCitiesArray.join(',');
    showResults(lotrArray, "Kata 4");
}

const botaoKata4 = document.getElementById("kata4");
botaoKata4.addEventListener("click", kata4);

function kata5() {
    let lotrArr = lotrCitiesArray.slice(0,5);
    showResults(lotrArr, "Kata 5");
}

const botaoKata5 = document.getElementById("kata5");
botaoKata5.addEventListener("click", kata5);

function kata6() {
    const lotrArr = lotrCitiesArray.slice(3,8);
    showResults(lotrArr, "Kata 6");
}

const botaoKata6 = document.getElementById("kata6");
botaoKata6.addEventListener("click", kata6);

function kata7() {
    const lotrArr = lotrCitiesArray.slice(2,5);
    showResults(lotrArr, "Kata 7");
}

const botaoKata7 = document.getElementById("kata7");
botaoKata7.addEventListener("click", kata7);

function kata8() {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rohan"),1); 
    showResults(lotrCitiesArray, "Kata 8");
}

const botaoKata8 = document.getElementById("kata8");
botaoKata8.addEventListener("click", kata8)

function kata9() {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Rhun"),2);
    showResults(lotrCitiesArray, "Kata 9");
}

const botaoKata9 = document.getElementById("kata9");
botaoKata9.addEventListener("click", kata9);

function kata10() {
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Gondor")+1,0,"Rohan");
    showResults(lotrCitiesArray, "Kata 10");
}

const botaoKata10 = document.getElementById("kata10");
botaoKata10.addEventListener("click", kata10);

function kata11(){
    lotrCitiesArray.splice(lotrCitiesArray.indexOf("Dead Marshes"),1,"Deadset Marshes");
    showResults(lotrCitiesArray, "Kata 11");
}

const botaoKata11 = document.getElementById("kata11");
botaoKata11.addEventListener("click", kata11);

function kata12(){
    const output = bestThing.split("").slice(0,14).join("");
    showResults(output, "Kata 12");
}

const botaoKata12 = document.getElementById("kata12");
botaoKata12.addEventListener("click", kata12);

function kata13(){
    const output = bestThing.split("").slice(69,82).join("");
    showResults(output, "Kata 13");
}

const botaoKata13 = document.getElementById("kata13");
botaoKata13.addEventListener("click", kata13);

function kata14(){
    const output = bestThing.split("").slice(22,38).join("");
    showResults(output, "Kata 14");
}

const botaoKata14 = document.getElementById("kata14");
botaoKata14.addEventListener("click", kata14);

function kata15(){
    const output = bestThing.substring(69,82);
    showResults(output, "Kata 15");
}

const botaoKata15 = document.getElementById("kata15");
botaoKata15.addEventListener("click", kata15);

function kata16(){
    const output = bestThing.substring(22,38);
    showResults(output, "Kata 16");
}

const botaoKata16 = document.getElementById("kata16");
botaoKata16.addEventListener("click", kata16);

let pop = ''
function kata17(){
    pop = lotrCitiesArray.pop()
    showResults(lotrCitiesArray, "Kata 17");
}

const botaoKata17 = document.getElementById("kata17");
botaoKata17.addEventListener("click", kata17);

function kata18(){
    const lotrPush = lotrCitiesArray.push(pop);
    showResults(lotrCitiesArray, "Kata 18");
}

const botaoKata18 = document.getElementById("kata18");
botaoKata18.addEventListener("click", kata18);

let shift = ''
function kata19(){
    shift = lotrCitiesArray.shift()
    showResults(lotrCitiesArray, "Kata 19");
}

const botaoKata19 = document.getElementById("kata19");
botaoKata19.addEventListener("click", kata19);

function kata20(){
    lotrCitiesArray.unshift(shift);
    showResults(lotrCitiesArray, "Kata 20");
}

const botaoKata20 = document.getElementById("kata20");
botaoKata20.addEventListener("click", kata20);

