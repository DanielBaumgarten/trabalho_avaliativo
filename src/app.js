const express = require('express');
const pedidoService = require ('./service/pedidoService')

const app = express()

app.use(express.json())

app.get('/api', (req,res)=> {
    res.send('API funcionando')
})

app.get('/api/pedidos/:id', async (req, res) => {
    try {
        const pedido = await pedidoService.buscarPorId(req.params.id);
        res.json(pedido);
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).json({
            erro: err.msg || "Erro interno ao servidor"
        });
    }
});

app.post('/api/pedidos', async (req,res) => {
    try {
        const pedido = await pedidoService.inserir(req.body);
        res.status(201).json(pedido);
    } catch (err) {
        console.log(err); // ajuda a ver o erro no terminal

        res.status(err.id || 500).json({
            erro: err.msg || "Erro interno do servidor"
        });    
    }
});


app.put('/api/pedidos/:id', async (req, res) => {
    try {
        const pedido = await pedidoService.atualizar(req.params.id, req.body);
        res.json(pedido);
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).json({
            erro: err.msg || "Erro interno do servidor"
        });
    }
});

app.delete('/api/pedidos/:id', async (req, res) => {
    try {
        await pedidoService.deletar(req.params.id);
        res.status(204).send();
    } catch (err) {
        console.log(err);
        res.status(err.status || 500).json({
            erro: err.msg || "Erro interno do servidor"
        });
    }
});

module.exports = app;


