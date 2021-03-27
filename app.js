// Importar os módulos baixados
const express = require("express");
const mongoose = require("mongoose");

// Instânciar o express
const app = express();

// Setup App
app.use(express.json());
app.use(express.json({ extends: true }));

// importar as configurações do database
require("./Database/db");

// Importar o Modelo Cliente
require("./Models/Cliente");
const Cliente = mongoose.model("cliente");

// Rota Listar Todos
app.get("/api/", (req, res) => {
	Cliente.find({}).then((cliente) => {
		res.json(cliente);
	});
});

// Rota para Listar único cliente
app.get("/api/:id", (req, res) => {
	Cliente.findOne({ _id: req.params.id })
		.then((cliente) => {
			res.json(cliente);
		})
		.catch((err) => {
			res.json({
				error: true,
				mensagem: `Erro ao consultar o cliente selecionado: ${err}`,
			});
		});
});

// Rota Adicionar Cliente
app.post("/api/adicionar", (req, res) => {
	Cliente.create(req.body)
		.then(() => {
			res.json({
				error: false,
				mensagem: "Cliente Cadastrado com sucesso",
			});
		})
		.catch((err) => {
			res.json({
				error: true,
				mensagem: `Erro ao cadastrar o cliente: ${err}`,
			});
		});
});

// Rota Editar Cliente
app.put("/api/editar/:id", (req, res) => {
	Cliente.updateOne({ _id: req.params.id }, req.body)
		.then(() => {
			res.json({
				error: false,
				mensagem: "Cliente editado com sucesso",
			});
		})
		.catch((err) => {
			res.json({
				error: true,
				mensagem: `Erro ao editar o cliente selecionado: ${err}`,
			});
		});
});

// Rota Remover Cliente
app.delete("/api/remover/:id", (req, res) => {
	Cliente.deleteOne({ _id: req.params.id })
		.then(() => {
			res.json({
				error: false,
				mensagem: "Cliente removido com sucesso",
			});
		})
		.catch((err) => {
			res.json({
				error: true,
				mensagem: `Erro ao remover o cliente selecionado: ${err}`,
			});
		});
});

// Ouvir uma porta para ligar o servidor
app.listen(3000, () => {
	console.log("Conectado a porta 3000 ( http://localhost:3000 )");
});
