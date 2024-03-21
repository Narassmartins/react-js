document.write("</br>Escolha o pedido: </br>");
document.write("</br> 0 - Sorvete / 1 - Suco </br>");
document.write("</br>2 - Coca Cola / 3 - Agua gelada </br></br></br>");



function pedir(){

    x = prompt("O que deseja pedir? ");

    switch(x){
        case "0":
            alert("Você pediu um sorvete");
            break;
        case "1":
            alert("Você pediu um suco");
            break;
        case "2":
            alert("Você pediu uma Coca cola");
            break;
        case "3":
            alert("Você pediu uma agua gelada");
            break; 
        default:
            alert("Não temos essa opção!") 
            break;      
    }

}