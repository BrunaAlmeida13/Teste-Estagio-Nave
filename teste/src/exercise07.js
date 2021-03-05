function exercise07(){
    const bt07 = document.querySelector('button#bt07')
    let res07 = document.querySelector('div#res07')
    let cond

    const pessoa = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    loopFor:
    for(let elemento in pessoa){
        cond = pessoa[elemento].age < 25 ? true : false
        if(cond == false){
            continue loopFor
        } else {    
            if(cond == true){
                res07.innerHTML = `Primeira pessoa menor de 25 anos encontrada: ${pessoa[elemento].first_name}`
                break loopFor
            } 
        }
    }
    if(cond == false)
        res07.innerHTML += 'Nenhum resultado foi encontrado'
}