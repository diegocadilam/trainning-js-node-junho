function configurarFormulario(){
    let formCadastrar = document.querySelector("#formCadastrar");

    formCadastrar.addEventListener('submit', function(e){
        e.preventDefault();

        let codigoValor = document.querySelector("#txtCodigo").value;
        let nomeValor = document.querySelector("#txtNome").value;
        let precoBolinha = document.querySelector("#txtPreco").value;        
        let imagem = document.querySelector("#imagem");
        //console.log(codigo, nome, preco, imagem);

        let produto = {
            codigo: codigoValor,
            nome: nomeValor,
            preco: precoBolinha,
            imagem: imagem.src,
        }

        cadastrarProduto(produto);
    })
}

function cadastrarProduto(produto){        

    let produtoValido = validarProduto(produto);
    let nossoAlerta = document.querySelector("#nossoAlerta");

    nossoAlerta.classList.remove('invisivel');
    nossoAlerta.classList.remove('alert-success');
    nossoAlerta.classList.remove('alert-danger');

    if(produtoValido){
        let produtos = obterProdutos();
        produtos.push(produto);
    
        localStorage.setItem("produtos", JSON.stringify(produtos));
        carregarProdutos();

        nossoAlerta.classList.add('alert-success');
        nossoAlerta.innerHTML = "Parabéns tudo certo";
        // Sucesso
    } else {
        // Fracasso        
        nossoAlerta.classList.add('alert-danger');
        nossoAlerta.innerHTML = "Preencha corretamente todas as informações";
    }
}

function validarProduto(produto){
    let ehValido = true;

    if(produto.codigo.trim() == ""){
        ehValido = false;
    }
    if(produto.nome.trim() == ""){
        ehValido = false;
    }
    if(produto.preco.trim() == ""){
        ehValido = false;
    }
    if(produto.imagem.trim() == ""){
        ehValido = false;
    }

    return ehValido;
}

function carregarProdutos(){
    let tblProdutos = document.querySelector("#tblProdutos tbody");
    let linha = document.createElement("tr");
    

    let produtos = obterProdutos();
    tblProdutos.innerHTML = '';
    produtos.forEach(produto => {
        // Preciso exibir isso na tela (E agora josé?)        
        tblProdutos.innerHTML += construirRegistro(produto);

        //tblProdutos.appendChild(linha);
    });


    configurarSelecao();
}

function configurarSelecao(){
    let botoes = document.querySelectorAll(".btn-selecionar");

    console.log('botoes', botoes);

    botoes.forEach(botao => {
        botao.addEventListener('click', function(){
            this.classList.toggle("bi-toggle-off");
            this.classList.toggle("bi-toggle-on");
            
            let linha = this.parentElement.parentElement;
            linha.classList.toggle('linha-selecionada');
        });
    });    
}

function construirRegistro(produto){
    return `<tr class="linha">
        <td scope="row">${produto.codigo}</td>
        <td>${produto.nome}</td>
        <td>${produto.preco}</td>
        <td><img id="" class="minuatura" src="${produto.imagem}" alt=""></td>
        <td><i class="btn-selecionar bi bi-toggle-off"></i></td>
    </tr>`;
}

function obterProdutos(){
    let produtos = JSON.parse(localStorage.getItem("produtos"));

    if(produtos === null){
        produtos = [];
    }

    return produtos;
}

function carregarImagem(elemento){
    console.log('imagem', elemento);

    let arquivoInfo = elemento.files[0];
    console.log("arquivo", arquivoInfo);

    let arquivo = new FileReader();

    arquivo.onloadend = function(){
        console.log('carregou', arquivo.result);

        let imagem = document.querySelector("#imagem");
        imagem.src = arquivo.result;
    }

    arquivo.readAsDataURL(arquivoInfo);
}