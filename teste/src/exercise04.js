//Aqui em Brasília as ruas são quadras, e eu não moro em quadra, mas em condomínio, por isso não botei 'número'.
const cep = 71090485
function exercise04(){
    let res04 = document.querySelector('div#res04')
    let bt04 = document.querySelector('button#bt04')
    const options = {
        mode: 'cors',
        cache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
    .then(response => {response.json()
        .then(data => {res04.innerHTML = `Endereço: ${data.logradouro}<br>`,
                    res04.innerHTML += `Bairro: ${data.bairro}<br>`,
                    res04.innerHTML += `Cidade/Estado: ${data.localidade}/${data.uf}`
        })
    }) 
    .catch(exercise04 => console.log('Erro: ' + exercise04.message))
}
