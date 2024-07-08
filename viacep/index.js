cep.onkeyup = () => {
    if(cep.value.length == 8){
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`) //onde se requere a promessa a api no endereco desejado
        .then(resposta => resposta.json())//then e o metodo que resolve a promessa, se positiva ou nao e necessita de outro then
        .then(resposta2 => { //then que trata a promessa do primeiro then e ja tras o obj js
            console.log(resposta2)
            rua.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            uf.value = resposta2.uf;

        })
        .finally(() => { //se usa no final
            alert("Procedimento Concluido");
        })
    }
}

// bairro
// : 
// "Pajuçara"
// cep
// : 
// "61933-350"
// complemento
// : 
// ""
// ddd
// : 
// "85"
// gia
// : 
// ""
// ibge
// : 
// "2307650"
// localidade
// : 
// "Maracanaú"
// logradouro
// : 
// "Rua 3"
// siafi
// : 
// "1585"
// uf
// : 
// "CE"
// unidade
// : 
// ""
