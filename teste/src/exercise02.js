 function exercise02(){
    let bt02 = document.querySelector('button#bt01')
    let res02 = document.querySelector('div#res02') 
    let stringModificar = 'teste 1 de 2 string 3'
    let stringMod

    res02.innerHTML = ''
    
    stringModificar = stringModificar.replace('1', '$')
    stringModificar = stringModificar.replace('2', '$')
    stringMod = stringModificar.replace('3', '$')
    
    res02.innerHTML += 'Resultado: <br>'
    res02.innerHTML += `${stringMod}`
}