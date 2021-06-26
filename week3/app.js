const xhr = new XMLHttpRequest()

var pokemon = []

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon', true )
xhr.send()

xhr.onreadystatechange = function(){
if(xhr.readyState === 4 && xhr.status === 200){
    let pokes = JSON.parse(xhr.responseText)
    
 for (let i = 0; i < pokes.results.length; i++ ){
     pokemon.push( { name : pokes.results[i].name} )
     
    
    }

    pokemon.forEach(e => {
        let pokes = document.createElement('h3')
        pokes.textContent = e.name
        document.body.appendChild(pokes)
    })

    for ( var i = 0; i < pokemon.length; i++){
         console.log(pokemon[i])

        }
     }
    
}