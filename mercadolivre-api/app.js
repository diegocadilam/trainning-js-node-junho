const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.get("/produtos", (req, res) => {

    let produtos = [{"codigo":"10","nome":"ggg hhhh 22","preco":"40","imagem":"jhghjgjh"}]
    res.json(produtos);
})

app.listen(port, ()=>{
    console.log(`Servidor operando na porta ${port}`)
})
// app.listen(port, function(){
    
// })