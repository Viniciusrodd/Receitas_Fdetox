


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

var cardsCompras = document.getElementById('container-cards-compras')
scrollButton(comprarAgora1Btt,cardsCompras)
scrollButton(comprarAgora2Btt, cardsCompras)