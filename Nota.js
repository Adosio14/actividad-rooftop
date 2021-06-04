class Nota{
    constructor (data={}){
        this.categoria = data.categoria || ''
        this.duracion = data.duracion || undefined
        this.titulo = data.titulo || ''
    }
    setTituloNota(n){
        if(typeof n== ''){
            this.titulo = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setCategoriaNota(n){
        if(typeof n== ''){
            this.categoria = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setDuracionNota(n){
        if(typeof n=='number'){
            this.duracion = n
        }else{
            throw new Error('El parametro debe ser Number!')
        }
    }
    getTituloNota(){
        return (this.titulo)
    }
    getCategoriaNota(){
        return (this.categoriaNota)
    }
    getDuracionNota(){
        return (this.duracion)
    }
}
module.exports = Nota;