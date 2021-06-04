const Autor = require('./Autor')

class Nota{
    constructor (autor, data={}){
        if(autor instanceof Autor){
            this.autor = autor
        }else{
            throw new Error('Se requiere un autor!')
        }
        this.categoria = data.categoria || ''
        this.duracion = data.duracion || undefined
        this.titulo = data.titulo || ''
        this.texto = data.texto || ''
    }
    setAutor(autor){
        if(autor instanceof Autor){
            this.autor = autor
        }else{
            throw new Error('Se requiere un autor!')
        }
    }
    setTitulo(n){
        if(typeof n=='string'){
            this.titulo = n
        }
    }
    setCategoria(n){
        if(typeof n== 'string'){
            this.categoria = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setDuracion(n){
        if(typeof n== 'number'){
            this.duracion = n
        }else{
            throw new Error('El parametro debe ser Number!')
        }
    }
    setTexto(n){
        if(typeof n== 'string' ){
            this.texto = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    getTitulo(){
        return (this.titulo)
    }
    getCategoria(){
        return (this.categoriaNota)
    }
    getDuracion(){
        return (this.duracion)
    }
    getTexto(){
        return (this.texto)
    }
}
module.exports = Nota;