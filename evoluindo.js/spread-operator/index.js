//spread operator 
function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: 'Programador',
        status: 1,
        codigo: '03081459176'
    };

    return novosDados;
}

console.log(cadastroPessoa({nome:  'Nara', sobrenome: 'Martins', anoInicio: 2024}));

//rest operator
function cadastrar(usuarios, novosUsuarios){
    let totalUsarios = [
        ...usuarios,
        ...novosUsuarios
    ];

    return console.log(totalUsarios);

    let usuarios = ["Matheus", "Carlos"];
    let novosUsuarios = ["Lucas", "Anne"];


}
