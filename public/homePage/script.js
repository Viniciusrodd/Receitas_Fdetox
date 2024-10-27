//FUNÇÕES DE AÇÕES HEADER
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


let sectionMission = document.getElementsByClassName('section-mission')
scrollButton(iniciarBtt, sectionMission[0])

var cardsCompras = document.getElementById('container-cards-compras')
scrollButton(comprarAgora1Btt,cardsCompras)
scrollButton(comprarAgora2Btt, cardsCompras)




//CARREGANDO LIFT-DETOX:
var bttLift = document.getElementById('button-lift');
var liftContainer = document.getElementById('liftDetox-container');
var secandoContainer = document.getElementById('container-secando');

bttLift.addEventListener('click', () => {
    secandoContainer.style.display = 'none';
    liftContainer.style.display = 'block';

    requestAnimationFrame(() =>{
        liftContainer.classList.add('liftdetox');
            liftContainer.scrollIntoView({
                behavior: "smooth"
            })
    })
})



//CARREGANDO SECANDO EM CASA
var bttSecando = document.getElementById('button-secando');
var secandoContainer = document.getElementById('container-secando');

bttSecando.addEventListener('click', () =>{
    liftContainer.style.display = 'none'   
    secandoContainer.style.display = 'block';

    requestAnimationFrame(() =>{
        secandoContainer.classList.add('secando');
            secandoContainer.scrollIntoView({
                behavior: "smooth"
            })
    })
})    


//ANIMAÇÃO NOS PRODUTOS
function mouseEnter(img, transformed){
    img.addEventListener('mouseenter', () => {
        img.classList.add(transformed);
    });
}

function mouseLeave(img, classe){
    img.addEventListener('mouseleave', () =>{
        setTimeout(() =>{
            img.classList.remove(classe)
        }, 5000)
    })
}


var imgLift = document.getElementById('img-lift');
mouseEnter(imgLift, 'transformed-lift');
//mouseLeave(imgLift, 'transformed-lift');

var imgSecandoCasa = document.getElementById('img-secandoCasa');
mouseEnter(imgSecandoCasa, 'transformed-secandoCasa')
//mouseLeave(imgSecandoCasa, 'transformed-secandoCasa')


var imgProdutoDigital = document.getElementById('img-produtoDigital');
mouseEnter(imgProdutoDigital, 'transformed-produtoDigital')
//mouseLeave(imgProdutoDigital, 'transformed-produtoDigital')