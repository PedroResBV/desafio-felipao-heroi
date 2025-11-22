
class heroi{
	constructor(nome, idade, tipo){
    	this.nomeHeroi = nome
        this.idadeHeroi= idade
        this.tipoHeroi = tipo
    }
    
    atacar(){
        
        let ataque 
        switch(this.tipoHeroi){
            
            case "mago":
                ataque = "magia"
                break
            case "guerreiro":
                ataque =  "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
            default:
                break
    	}
        console.log(`O ${this.tipoHeroi} atacou usando ${ataque}`)
        
    } 
    
    
} 



let ninjaPedro = new heroi("Pedro", "29 anos", "ninja")

let magaJessica = new heroi("Jessica", "27 anos", "mago")



ninjaPedro.atacar()
magaJessica.atacar()

