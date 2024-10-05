

let sobreBtt = document.getElementById('sobre')
let beneficiosBtt = document.getElementById('beneficios')
let resultadosBtt = document.getElementById('resultados')
let entregaBtt = document.getElementById('entrega')
let iniciarBtt = document.getElementById('btt-conteudo-1')
let comprarAgora1Btt = document.getElementById('btt-compraragora-1')
let comprarAgora2Btt = document.getElementById('btt-compraragora-2')



function scrollButton(btt, content){
    btt.addEventListener('click', () =>{
        if(btt){
            content.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
}



let sobreConteudo = document.getElementById('container-argumentos')
scrollButton(sobreBtt, sobreConteudo)


let beneficiosConteudo = document.getElementById('container-produto')
scrollButton(beneficiosBtt, beneficiosConteudo)


let resultadosConteudo = document.getElementById('div-resultados')
scrollButton(resultadosBtt, resultadosConteudo)


let entregaConteudo = document.getElementById('container-footer-6')
scrollButton(entregaBtt, entregaConteudo)


let iniciarConteudo = document.getElementById('sessao-conteudo-1')
scrollButton(iniciarBtt, iniciarConteudo)


var cardsCompras = document.getElementById('container-cards-compras')
scrollButton(comprarAgora1Btt,cardsCompras)
scrollButton(comprarAgora2Btt, cardsCompras)