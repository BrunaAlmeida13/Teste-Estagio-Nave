function exercise08(){
    const bt08 = document.querySelector('button#bt08')
    let res08 = document.querySelector('div#res08')
    let idade, nome

    const pessoa = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]
    
    res08.innerHTML = 'Pessoas com idade menor que 30 anos:'
    for(let elemento in pessoa){
        idade = pessoa[elemento].age
        let cond = idade < 30 ? true : false   
            if(cond == true){
                nome = pessoa[elemento].first_name 
                res08.innerHTML += `<p>${nome} tem ${idade} anos.</p>`
            } 
    }
}
