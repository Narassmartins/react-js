//função entrar 

function entrar(){

    var area = document.getElementById('area');
    var texto = prompt('Digite seu nome:');

    if(texto == '' || texto == null){
        alert('Digite seu nome novamente!');
        area.innerHTML = 'Bem vindo...';
    }
    
    else{
        area.innerHTML = 'Bem vindo ' + texto;
    }
} 

function entrar2(nome){
    var area = document.getElementById('area2');
    var texto = prompt('Digite seu sobrenome:');

    if(texto == '' || texto == null){
        alert('Digite novamente');
        area.innerHTML = 'Bem vindo ...'; 
    }
    
    else{
        area.innerHTML = nome + " " + texto;
    }

}

function entrar3(){
    var area = document.getElementById('idade');
    var texto = prompt('Digite sua idade:');

    if(texto == '' || texto == null){
        alert('Digite sua idade');  
    }
    else{
        area.innerHTML = 'idade ' + texto;
    }

}