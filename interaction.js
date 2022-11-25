let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, ideal para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]

let lista = document.getElementById("itens_section");

for(var i=0; i < ITENS_LOJA.length; i++)
{
    let item = document.createElement("div");

    let imagem = document.createElement("img");
    let nome = document.createElement("h2");
    let preco = document.createElement("p");
    let descricao = document.createElement("p");

    imagem.src = ITENS_LOJA[i].url_img;
    nome.innerText = ITENS_LOJA[i].nome;
    preco.innerHTML = `<b>Preço:</b> R$ ${ITENS_LOJA[i].preco}`;
    preco.style.textAlign = "center";
    descricao.innerHTML = `<b>Descrição:</b><br> ${ITENS_LOJA[i].descricao}`;
    
    let info = [imagem, nome, preco, descricao];

    for(var j=0; j < info.length; j++)
    {
        item.appendChild(info[j]);
    }

    lista.appendChild(item);
}