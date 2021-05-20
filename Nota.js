class Nota{
    constructor (data={}){
        this.categoriaNota = data.categoriaNota || ''
        this.duracionNota = data.duracionNota || 0
        this.tituloNota = data.tituloNota || ''
    }
    setTituloNota(n){
        if(typeof n== ''){
            this.tituloNota = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setCategoriaNota(n){
        if(typeof n== ''){
            this.categoriaNota = n
        }else{
            throw new Error('El parametro debe ser String!')
        }
    }
    setDuracionNota(n){
        if(typeof n=='number'){
            this.duracionNota = n
        }else{
            throw new Error('El parametro debe ser Number!')
        }
    }
    getTituloNota(){
        return (this.tituloNota)
    }
    getCategoriaNota(){
        return (this.categoriaNota)
    }
    getDuracionNota(){
        return (this.duracionNota)
    }
}
module.exports = Nota;