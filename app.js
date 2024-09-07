/* ------------------------------------------ */
/* Função que devolve o resultado da pesquisa */
/* ------------------------------------------ */
function pesquisar(){
    /* Criando as variávies que serão utilizadas no código */
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let resultados = "";
    let titulo = "";
    let stream = ""; 
    let tipo = "";
    let genero = ""; 
    let sinopse = ""; 
    let tags = "";

    /* Verificando se o usuário digitou algum argumento para pesquisa*/
    if (!campoPesquisa){
        section.innerHTML = "<p>Nenhuma informação foi encontrada. Digite alguma informação sobre o evento desejado!</p>"
        return;
    }
    /* Convertendo o conteúdo para minúsculo para facilitar a busca pelo argumento informado pelo usuário*/ 
    campoPesquisa = campoPesquisa.toLowerCase();

    /* Loop para carregar os objetos na variável que será exibida pelo código html*/
    for (let dado of dados){
        titulo = dado.titulo.toLowerCase();
        stream = dado.stream.toLowerCase();
        tipo = dado.tipo.toLowerCase();
        genero = dado.genero.toLowerCase();
        sinopse = dado.sinopse.toLowerCase();
        tags = dado.tags.toLowerCase();
        
        if (titulo.includes(campoPesquisa) || stream.includes(campoPesquisa) || tipo.includes(campoPesquisa) || genero.includes(campoPesquisa) || sinopse.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <p class="item-resultado-p"> Esse evento (${dado.tipo.toLowerCase()}) pode ser encontrado na plataforma ${dado.stream}</p>  
                <h2> 
                    <a href="#" target="_blank">${dado.titulo}</a> 
                </h2>
                <p class="descricao-meta">${dado.sinopse}</p>
                             
                <a href=${dado.link} target="_blank"> Mais informações</a>
            </div>
            `;
        } 
    }
        /* Verifica se a pesquisa retornou ou não dados*/
        if (!resultados){
            resultados = "<p>Nada foi encontrado</p>"    
   
}
    /* Envia informações para o código html*/
    section.innerHTML = resultados;
}

