const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var produtoSchema = new mongoose.Schema({
    codigo:{
        type:String,
        required:true,
        unique:true,        
    },
    nome:{
        type:String,
        required:true,        
    },
    preco:{
        type:String,
        required:true,        
    },
    imagem:{
        type:String,
        required:true,
    },
});

//Export the model
module.exports = mongoose.model('produto', produtoSchema);