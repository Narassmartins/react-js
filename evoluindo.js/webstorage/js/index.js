// LocalStorage - Salva os dados, mesmo que feche o navegador

localStorage.setItem("n", "Alex")

localStorage.getItem("n");
'Nara'

/*Simplificando - localStorage.nome = "Nara"
localStorage.nome
"Nara"*/

localStorage.removeItem("n");

//Salvado dados, se o "nome" estiver vazio o prompt vai pedir para ele digitar. Caso contrario já vai aparecer o nome na tela. 

var nome = " ";

if( typeof localStorage.nome == 'undefined'){
    localStorage.nome = prompt("Digite seu nome: ");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;
