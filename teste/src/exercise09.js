function exercise09(){
    const bt09 = document.querySelector('button#bt09')
    let res09 = document.querySelector('div#res09')
    let i, j

    let pessoa = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]

    for(i = 0; i < pessoa.length; i++){
        for(j = i + 1; j < pessoa.length; j++){
            if(pessoa[j].age == pessoa[i].age){
                pessoa.sort((a,b) => {
                    return b.age - a.age
                }) 
            }
        }
    }

    for(let elemento in pessoa){
        res09.innerHTML += `ID: ${pessoa[elemento].id} Idade: ${pessoa[elemento].age}<br>`
    }    
}