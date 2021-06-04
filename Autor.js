class Autor {
    constructor (data={}){
        this.id = data.id || null
        this.nombre= data.nombre || ''
        this.apellid = data.apellido || ''
        this.campo = data.campo || ''
        this.localidad = data.localidad || ''
    }
    setId(n){
        if(typeof n== number){
            this.id = n
        }else{
            throw new Error('El id debe ser un numero!')
        }
    }
    setNombre(n){
        if(typeof n== 'string'){
            this.nombre = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setApellido(n){
        if(typeof n== 'string'){
            this.apellido = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    setCampoAutor(n){
        if(typeof n== 'string'){
            this.campo = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    setLocalidadAutor(n){
        if(typeof n== 'string'){
            this.localidad = n
        } else {
            throw new Error('El parametro debe ser String!')
        }
    }
    getNombreAutor(){
        return (this.nombre+''+this.apellidoAutor)
    }
    getCampoAutor(){
        return (this.campo)
    }
    getLocalidadAutor(){
        return (this.campo)
    }
}
module.exports = Autor;
