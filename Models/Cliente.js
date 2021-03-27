// Importar o mongoose
const mongoose = require("mongoose");

const Cliente = new mongoose.Schema(
	{
		nome: {
			type: String,
			require: true,
		},
		sobrenome: {
			type: String,
			require: true,
		},
		cpf: {
			type: String,
			require: true,
		},
	},
	{
        timestamps: true
    }
);

mongoose.model("cliente", Cliente)