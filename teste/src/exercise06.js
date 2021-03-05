function exercise06(){
    let bt06 = document.querySelector('button#bt06')
    let res06 = document.querySelector('div#res06')

    const pessoa = [
        {id: 1, first_name: 'Juca', last_name: 'Da Silva', age: 42},
        {id: 2, first_name: 'Daniel', last_name: 'Gonçalves',  age: 21},
        {id: 3, first_name: 'Matheus', last_name: 'Garcia', age: 28},
        {id: 4, first_name: 'Gabriel', last_name: 'Dorneles',  age: 21}
    ]
    
    const somaIdades = pessoa.reduce((valorT, elem) => valorT + elem.age, 0)
    
    res06.innerHTML =  `Soma das idades: ${somaIdades}`
}