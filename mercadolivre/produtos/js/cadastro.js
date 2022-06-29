function carregarProdutos(){
    console.log("Carregando os produtos");
}

function configurarFormulario(){
    let formCadastrar = document.querySelector("#formCadastrar");

    formCadastrar.addEventListener('submit', function(e){
        e.preventDefault();
        console.log(e);

        let codigo = document.querySelector("#txtCodigo").value;
        let nome = document.querySelector("#txtNome").value;
        let preco = document.querySelector("#txtPreco").value;
        let imagem = document.querySelector("#txtImagem").value;

        console.log(codigo, nome, preco, imagem);

        let produto = {
            codigo: codigo,
            nome: nome,
            preco: preco,
            imagem: imagem,
        }

        cadastrarProduto(produto);
    })
}

function cadastrarProduto(produto){
    console.log(produto);
    
    let produtos = obterProdutos();
    produtos.push(produto);

    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function obterProdutos(){
    let produtos = JSON.parse(localStorage.getItem("produtos"));
    
    console.log("produtos", produtos);

    if(produtos === null){
        produtos = [];
    }

    return produtos;
}