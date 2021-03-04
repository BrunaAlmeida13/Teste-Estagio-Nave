
function exercise01(){
    let bt01 = document.querySelector('button#bt01')
    let string1 = document.querySelector('input#string1')
    let string2 = document.querySelector('input#string2')
    let res = document.querySelector('div#res') 

  let tam = string1.value.length
  let tam2 = string2.value.length

  res.innerHTML = ''
  if(string1.value == '' || string2.value == ''){
      res.innerHTML += 'Você precisa digitar as duas palavras!'
  } else{
      res.innerHTML += 'Resultado: <br>'
      if(tam > tam2) {
         res.innerHTML += `A Palavra de maior comprimento é: <strong>${string1.value}</strong>, com ${tam} caracteres.`
      } else if(tam2 > tam) {
        res.innerHTML += `A Palavra de maior comprimento é: <strong> ${string2.value}</strong>, com ${tam2} caracteres.`
      } else {
        res.innerHTML += `<strong>${string1.value}</strong> e <strong>${string2.value}</strong> são do mesmo tamanho.`
      }
    }
}