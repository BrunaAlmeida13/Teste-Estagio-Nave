function exercise10(){
    const bt10 = document.querySelector('button#bt10')
    let res10 = document.querySelector('div#res10')
    let i
    let joker = []
    let parasite = []
    let avengers = []
    let her = []

    let movies = [
        { id: 1, name: 'Joker' },
        { id: 2, name: 'Parasite' },
        { id: 3, name: 'Avengers' },
        { id: 4, name: 'Her' }
    ]

    let actors = [
        { id: 1, name: 'Cho Yeo-jeong', movie_ids: [2] },
        { id: 2, name: 'Robert Downey Jr.', movie_ids: [3] },
        { id: 3, name: 'Joaquin Phoenix', movie_ids: [1, 4] },
        { id: 4, name: 'Scarlett Johansson', movie_ids: [3] }
    ]
     
    for(i = 0; i < actors.length; i++){
            if (actors[0].movie_ids == actors[i].movie_ids){
    
                parasite = [actors[i].name, actors[0].movie_ids[0]]
    
            } else if (actors[1].movie_ids == actors[i].movie_ids){
    
                avengers = [actors[i].name]
    
            } else if (actors[2].movie_ids == actors[i].movie_ids){
    
                joker = [actors[i].name, actors[2].movie_ids[0]]
    
            } else if (actors[3].movie_ids == actors[i].movie_ids){
    
                avengers.push(actors[i].name, actors[3].movie_ids[0])
            }
    
    }
    
    her = [actors[2].name, actors[2].movie_ids[1]]
    
    movies[0].actors = joker
    movies[1].actors = parasite
    movies[2].actors = avengers
    movies[3].actors = her
    
    movies[0].actors.splice(1, 1)
    movies[1].actors.splice(1, 1)
    movies[2].actors.splice(2, 1)
    movies[3].actors.splice(1, 1)
    

    res10.innerHTML = ''
    res10.innerHTML += 'Filmes:<br>'
    res10.innerHTML += '['
    for(i in movies){
        res10.innerHTML += `<br> { Id: ${movies[i].id}<br> name: ${movies[i].name} <br> actors: [${movies[i].actors}] } <br>`
        console.log(movies[i])
    }
    res10.innerHTML += ']'
}