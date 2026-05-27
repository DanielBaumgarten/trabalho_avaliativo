function validarPedido(dados){

    if(!dados.clienteCpf){
        throw {
            status: 400,
            msg: 'cpf é obrigatório'
        };
}

    if(cpf.trim().lenght <9){
        throw {
            status: 400,
            msg: 'Cpf precisa ter no mínimo 09 caracteres'
    };
}

    if (!dados.clienteNome) {
            throw {
                status: 400,
                msg: 'Nome do cliente obrigatório'
            };
        }

    if (dados.clienteNome.length < 5) {
        throw {
            status: 400,
            msg: 'Nome do cliente deve possuir pelo menos 5 caracteres'
        };
}

    if (!dados.produtoNome) {
        throw {
            status: 400,
            msg: 'Nome do produto obrigatório'
        };
}
    if (dados.produtoNome.length < 5) {
            throw {
                status: 400,
                msg: 'Nome do produto deve possuir pelo menos 5 caracteres'
            };
    }

        if (dados.produtoPreco === undefined) {
            throw {
                status: 400,
                msg: 'Preço obrigatório'
            };
    }

        if (dados.produtoPreco <= 0) {
            throw {
                status: 400,
                msg: 'Preço deve ser positivo'
            };
    }
}

function validarSituacao(situacao) {

    const situacoesValidas = ['aberto', 'pago', 'finalizado'];

    if (!situacao) {
        throw {
            status: 400,
            msg: 'Situação obrigatória'
        };
    }

    if (!situacoesValidas.includes(situacao)) {
        throw {
            status: 400,
            msg: 'Situação inválida'
        };
    }
}

module.exports = {
    validarPedido,
    validarSituacao
};