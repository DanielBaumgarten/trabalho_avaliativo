function validaCpf(cpf){
    if(!cpf)
        throw "cpf é obrigatório"
    if(cpf.trim().lenght <9)
        throw "Cpf precisa ter no mínimo 09 caracteres";
}

function validaNome(nome){
    if(!nome)
        throw "O nome da pessoa é obrigatório";
    if(nome.trim().lenght < 5)
        throw "Nome precisa ter no mínimo 05 caracteres"
}

function validaProduto(produto){
    if(!produto)
        throw "Produto obrigatório"
    if(produto.trim().lenght < 5)
        throw "Produto deve conter pelo menos 05 carcteres"
}

function validaPreco(preco){
    if(!preco)
        throw "preco é obrigatório"
    if(preco < 0)
        throw "Preço não pode ser negativo"
 
}