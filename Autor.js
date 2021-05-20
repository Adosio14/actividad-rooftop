class Autor {
    constructor (data={}){
        this.nombreAutor = data.nombreAutor || ''
        this.apellidoAutor = data.apellidoAutor || ''
        this.campoAutor = data.campoAutor || ''
        this.localidadAutor = data.localidadAutor || ''
    }
    setNombre(n){
        if(typeof n== 'string'){
            this.nombreAutor = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setApellido(n){
        if(typeof n== 'string'){
            this.apellidoAutor = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    setCampoAutor(n){
        if(typeof n== 'string'){
            this.campoAutor = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    setLocalidadAutor(n){
        if(typeof n== 'string'){
            this.localidadAutor = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    getNombreAutor(){
        return (this.nombreAutor+''+this.apellidoAutor)
    }
    getCampoAutor(){
        return (this.campoAutor)
    }
    getLocalidadAutor(){
        return (this.campoAutor)
    }
}
module.exports = Autor;
