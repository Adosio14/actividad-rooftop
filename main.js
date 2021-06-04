let Autor = require('./Autor')
let Nota = require('./Nota')

let autor = new Autor
autor.setNombre('Alejandro')
autor.setApellido('Villafañe')
autor.setCampo('Historia')
autor.setLocalidad('Argentina')
autor.setId(0)

let nota = new Nota(autor) 
nota.setTexto("El patrón del mal")
nota.setDuracion(45)
nota.setTitulo('El narcotráficante mas grande que alguna vez pisó Rooftop')
nota.setCategoria('Historia/Crimen')
nota.getTitulo

console.log(nota)
//console.log(autor)