const validador = require('./validadores');

let pedidos = [];
let contador = 1;

async function inserir(dados) {

    validador.validarPedido(dados);

    const pedido = {
        codigo: contador++,
        dataHora: new Date(),
        clienteCpf: dados.clienteCpf,
        clienteNome: dados.clienteNome,
        produtoNome: dados.produtoNome,
        produtoPreco: dados.produtoPreco,
        situacao: 'aberto'
    };

    pedidos.push(pedido);

    return pedido;
}

async function listar(situacao) {

    if (!situacao) {
        return pedidos;
    }

    validador.validarSituacao(situacao);

    return pedidos.filter(p => p.situacao === situacao);
}

async function buscarPorId(codigo) {

    codigo = Number(codigo);

    if (isNaN(codigo)) {
        throw {
            status: 400,
            msg: 'Código inválido'
        };
    }

    const pedido = pedidos.find(p => p.codigo === codigo);

    if (!pedido) {
        throw {
            status: 404,
            msg: 'Pedido não encontrado'
        };
    }

    return pedido;
}

async function atualizarSituacao(codigo, situacao) {

    const pedido = await buscarPorId(codigo);

    validador.validarSituacao(situacao);

    pedido.situacao = situacao;

    return pedido;
}

async function deletar(codigo) {

    codigo = Number(codigo);

    const index = pedidos.findIndex(p => p.codigo === codigo);

    if (index === -1) {
        throw {
            status: 404,
            msg: 'Pedido não encontrado'
        };
    }

    pedidos.splice(index, 1);
}

module.exports = {
    inserir,
    listar,
    buscarPorId,
    atualizarSituacao,
    deletar
};