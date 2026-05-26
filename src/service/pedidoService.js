let pedido = [];
let idAtual = 1;


async function listar() {
    return pedido;
} 

async function buscarPorId(id) {
    const pedido = pedido.find(p => p.id == id);

    if(!pedido) {
        throw {id: 404, msg: "pedido não encontrado"}
    }

    return pedido;
}

async function inserir(pedido) {
    if (!pedido.clienteNome || !pedido.prdutoNome || !pedido.produtoPreco) {
        throw {id: 400, msg: "Dados inválidos"};
    }


    pedido.id = idAtual++;
    pedido.push(pedido);

    return pedido;

}
 
async function atualizar(id, dados) {
    const pedido = await buscarPorId(id);

    pedido.clienteNome = dados.clienteNome ?? pedido.clienteNome;
    pedido.prdutoNome = dados.prdutoNome ?? pedido.prdutoNome;
    pedido.produtoPreco = dados.produtoPreco ?? pedido.produtoPreco;

    return pedido;
}

async function deletar(id) {
    const index = pedido.findIndex(p => p.id ==id);

    if (index === -1){
        throw{ id: 404, msg: "pedido não encontrado"}
    }

    pedido.splice(index, 1);
}

module.exports = {
    listar,
    buscarPorId,
    inserir,
    atualizar,
    deletar
};

