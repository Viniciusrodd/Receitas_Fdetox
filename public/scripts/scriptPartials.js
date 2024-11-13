

/*
let comprarAgora1Btt = document.getElementById('btt-compraragora-1-lift')
let comprarAgora2Btt = document.getElementById('btt-compraragora-2-lift')

function scrollButton(btt, content){
    btt.addEventListener('click', () =>{
        if(btt){
            content.scrollIntoView({
                behavior: "smooth"
            })
        }
    })
}

var cardsCompras = document.getElementById('container-cards-compras-lift')
scrollButton(comprarAgora1Btt,cardsCompras)
scrollButton(comprarAgora2Btt, cardsCompras)
*/

function inicializarBotoesLift() {
    const comprarAgora1Btt = document.getElementById('btt-compraragora-1-lift');
    const comprarAgora2Btt = document.getElementById('btt-compraragora-2-lift');
    const cardsCompras = document.getElementById('container-cards-compras-lift');

    function scrollButton(btt, content) {
        if (btt && !btt.classList.contains('listener-added')) {  // Verifica se o listener já foi adicionado
            btt.addEventListener('click', () => {
                content.scrollIntoView({
                    behavior: "smooth"
                });
            });
            btt.classList.add('listener-added');  // Marca o botão como tendo o listener adicionado
        }
    }

    scrollButton(comprarAgora1Btt, cardsCompras);
    scrollButton(comprarAgora2Btt, cardsCompras);
}
