function addArticle(data) { //cria uma função para adicionar um artigo com os dados da API
    for (let i = 0; i < data.length; i++) { //cria um loop pra criar um artigo a cada vez que percorre um novo elemento da tabela
        let container = document.getElementById("container_articles") //identifica o id no html onde eu quero colocar a info
        let article = document.createElement("article") //cria uma baliza article
        let h2 = document.createElement("h2") //cria uma baliza h2
        let p = document.createElement("p") //cria uma baliza p
        article.appendChild(h2) //diz que h2 é filha de article (sistema boneca russa)
        article.appendChild(p) //diz que p é filha de article também
        container.appendChild(article) //diz que article é filha de container (lembrar que aqui falamos da variável, então evitar as aspas)
        h2.textContent = data[i].name //identifica o elemento setup da tabela no json e imprime no h2
        p.textContent = data[i].ability //identifica o elemento delivery da tabela no json e imprime no p
    }
}

fetch("https://pokeapi.co/api/v2/pokemon/ditto") //vai lá na url buscar a API
    .then(response => response.json()) //cria uma promessa de que quando conseguir pegar as informações, coloca num modelo json
    .then(data => addArticle(data.url)) //cria uma promessa de pegar os dados referentes a jokes na API e chama a função pra executar a leitura da tabela e adicionar dos artigos

function openMenu() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("navItems");
    if (menu.style.display === "none") {
        menu.style.display = "block";
    }
    else {
        menu.style.display = "none";
    }
}
burger.addEventListener("click", openMenu);