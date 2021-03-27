// Importar o mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apigari', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado com sucesso ao mongoDB')
}).catch((err) => {
    console.log(`Erro ao se conectar ao MondoDB: ${err}`)
})