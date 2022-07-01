const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const Produto = require("./models/produto");


app.use(express.json());
app.use(cors());

app.get("/produtos", async (req, res) => {

  let produtos = await Produto.find();

  res.status(200).send(produtos);
});

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/produtos', async (req, res) => {
  
    try {
        let produto = req.body;
        
        let produtoBanco = await Produto.create(produto);
      
        res.status(201).json(produtoBanco);        
    } catch (error) {
        res.status(400).json("Código do produto já existe");
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const mongoose = require('mongoose');

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb+srv://admin:admin123@cluster0.mb1zz.mongodb.net/dbMercadoLivre?retryWrites=true&w=majority', 
(err) => {
    if (!err) {
        console.log('Oba conseguimos conectar node no banco.')
    } else {
        console.log('Ixi deu erro: ' + err)
    }
});
