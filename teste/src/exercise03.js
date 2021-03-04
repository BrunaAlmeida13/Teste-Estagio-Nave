let frase = 'T35t3 d3 35t4g1o'
let fraseMod = null
let fraseMod1 = null
function exercise03(){
    let bt03 = document.querySelector('button#bt03')
    let res03 = document.querySelector('div#res03') 

    const substituto = {
        4: 'a',
        3: 'e',
        1: 'i',
        5: 's',
    }
        
    for(const propety in substituto){
        if(propety == 4){
            frase = frase.replace(frase[12], substituto[propety])
        }
    }
    for(const propety in substituto){
        if(propety == 3){
            frase = frase.replace(frase[1], substituto[propety])
            frase = frase.replace(frase[4], substituto[propety])
            frase = frase.replace(frase[7], substituto[propety])
            fraseMod = frase.replace(frase[9], substituto[propety])
        }
    }
    for(const propety in substituto){
        if(propety == 1){
            fraseMod = fraseMod.replace(fraseMod[14], substituto[propety])
        }
    }
    for(const propety in substituto){
        if(propety == 5){
            fraseMod = fraseMod.replace(fraseMod[2], substituto[propety])
            fraseMod1 = fraseMod.replace(fraseMod[10], substituto[propety])
        }
    }
    
    res03.innerHTML = `Substituindo...${fraseMod1}`
}