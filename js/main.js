//const subtrair = document.querySelector("#subtrair")
//const somar = document.querySelector("#somar")

const controle = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatisticas]")
console.log(estatistica)
const pecas = {
    "bracos":{
        "forca" : 29,
        "poder" : 35,
        "energia" : -21,
        "velocidade" : -5
    },

    "blindagem":{
        "forca" : 41,
        "poder" : 20,
        "energia" : 0,
        "velocidade" : -20
    },

    "nucleos":{
        "forca" : 0,
        "poder" : 7,
        "energia" : 0,
        "velocidade" : -62
    },

    "pernas":{
        "forca" : 41,
        "poder" : 6,
        "energia" : 41,
        "velocidade" : 10
    },

    "foguetes":{
        "forca" : 11,
        "poder" : 87,
        "energia" : 63,
        "velocidade" : 10
    },
}

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
       
    })
   
})


function manipulaDados(operacao, controle){
    const peca = controle.querySelector(".controle-contador")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {

    estatistica.forEach((elemento) =>{
    elemento.textContent = parseInt(elemento.textContent) + 
    pecas[peca] [elemento.dataset.estatisticas]
    })
}
