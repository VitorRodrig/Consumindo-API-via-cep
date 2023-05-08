function consultAddress(){
    let cep = document.getElementById('cep').value

    if(cep.length !== 8){
        alert('CEP inválido')
        return
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            console.log(data)
            showAddress(data)
        })
    })    
}

function showAddress(dados){
    let resultado = document.querySelector('.resultado')
    if(dados.erro){
        resultado.innerHTML = 'Não foi possível localizar o cep fornecido'
    } else{
        resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                           <p>Bairro: ${dados.bairro}</p>
                           <p>Cidade: ${dados.localidade}- ${dados.uf}</p>`  
    }
     
}
