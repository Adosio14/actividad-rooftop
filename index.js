let Autor = require('./Autor')
let Nota = require('./Nota')
var autor = new Autor({
    nombreAutor: 'Jose Luis',
    apellidoAutor: 'Perez',
    campoAutor: 'Deportes',
    localidadAutor: 'Santo Tomé'
})
var nota = new Nota({
    categoriaNota: 'Futbol',
    duracionNota: 33,
    tituloNota: 'River tiene 11 jugadores menos'
})

console.log(nota)
console.log(autor)