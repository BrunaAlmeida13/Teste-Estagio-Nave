function exercise05(){
    let bt05 = document.querySelector('button#bt05')
    let res05 = document.querySelector('div#res05')

    let pessoa = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]
    
    for(elementos in pessoa){
        res05.innerHTML += `Olá, ${pessoa[elementos].first_name} ${pessoa[elementos].last_name}!<br>`
    }
}