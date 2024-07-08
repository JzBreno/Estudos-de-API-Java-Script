
function buscarRegioes(){
    
fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`) // requeimento ao ibge regiao
.then(res => res.json())
.then(res => {
    
    res.map(regiao => { // map percorre todo o array sem precisar especificar o tamanho do array
        //regiao assume a identidade de cada indice do array, podendo acessar os itens do array com regiao.{indice_nome}
        regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`; //inserindo no HTML essa funcao passando o valor de regiao.{indice_nome}
    })
})
} buscarRegioes()//chamando a func para funcionar no nosso codigo


function buscarEstados(){
    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`) // requeimento ao ibge regiao
    .then(res => res.json())
    .then(res => {
        estados.innerHTML = ""
        res.map(estado => { // map percorre todo o array sem precisar especificar o tamanho do array
            //regiao assume a identidade de cada indice do array, podendo acessar os itens do array com regiao.{indice_nome}
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`; //inserindo no HTML essa funcao passando o valor de regiao.{indice_nome}
        })
    })
    }

    function buscarMunicipios(){
    
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/microrregioes`
        ) // requeimento ao ibge regiao
        .then(res => res.json())
        .then(res => {
            municipios.innerHTML = ""
            res.map(municipio => { // map percorre todo o array sem precisar especificar o tamanho do array
                //regiao assume a identidade de cada indice do array, podendo acessar os itens do array com regiao.{indice_nome}
                municipios.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`;
            })
        })
    }