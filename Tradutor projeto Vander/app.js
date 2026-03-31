
let inputTexto = document.querySelector(".texto");

let idioma= document.querySelector(".idioma");

let traducao = document.querySelector(".traducao");

async function traduzir(){


let url = "https://api.mymemory.translated.net/get?q=Bom%20dia!&langpair=pt|en";

let resposta = await fetch(url);

let traducao = await resposta.json();

console.log(traducao.responseData.translatedText);


}