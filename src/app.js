const express = require('express');
const pedidoService = require ('./service/pedidoService')

const app = express()

app.use(express.json())


// Inserir Pedido


app.post('/api/pedidos', async (req,res) => {
    try {
        const pedido = await pedidoService.inserir(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        console.log(err); // ajuda a ver o erro no terminal

        res.status(err.id || 500).json({
            erro: err.msg || 'Erro interno do servidor'
        });    
    }
});

// Listar Pedidos

app.get('/api/pedidos', async (req,res) => {
    try {
        const pedidos = await pedidoService.listar(req.query.situacao);
        res.json(pedidos);
    } catch (err) {
        res.status(err.status || 500).json({
            erro: err.msg || 'Erro interno do Servidor'
        })
    }
});

// Buscar por ID

app.put('/api/pedidos/:codigo', async (req, res) => {
    try {
        const pedido = await pedidoService.buscaPorId(req.params.codigo);
        res.json(pedido);
    } catch (err) {
        res.status(err.status || 500).json({
            erro: err.msg || 'Erro interno do servidor'
        })
    }
});


// Atualizar situação

app.put('/api/pedidos/:codigo', async (req,res) => {
    try {
        const pedido = await pedidoService.atualizarSituacao(
            req.params.codigo,
            req.body.situacao
        );
    res.json(pedido);
    } catch (err){
        res.status(err.status || 500).json({
            erro: err.msg || 'Erro interno do servidor'
        })
    }
});


// Deletar Pedido

app.delete('/api/pedidos/:codigo', async (req,res) => {
    try {
        await pedidoService.deletar(req.params.codigo);

        res.status(204).send();
    } catch (err) {
        res.status(err.status || 500).json({
        erro: err.msg || 'Erro interno do servidor'
        });
    }
});

module.exports = app;


