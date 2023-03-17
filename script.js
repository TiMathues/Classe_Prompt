class Carro{
    constructor (modelo, anoFabricacao, cor, motor){
        this.modelo = prompt("Digite o seu Modelo:");
        this.anoFabricacao = prompt("Digite o seu ano de fabricação:");
        this.cor = prompt("Digite a sua cor:");
        this.motor = prompt("Digite o tipo do seu motor:");
    }

    imprimirTudo(){

       return "MODELO:" + this.modelo + "<br>COR:" + this.cor + "<br>ANO DE FABRICAÇÃO:" + this.anoFabricacao + "<br>MOTOR:" + this.motor

    }

    
}

let carro1 = new Carro("Creta", 2023, "Preto", 2.0);
document.getElementById("resultado").innerHTML = carro1.imprimirTudo();