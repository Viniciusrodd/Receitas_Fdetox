
/*
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
*/


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


var imgTreino = document.getElementById('img-treino');
mouseEnter(imgTreino, 'transformed-treino')
//mouseLeave(imgProdutoDigital, 'transformed-produtoDigital')




//CARREGANDO LIFT-DETOX:
/*
bttLift.addEventListener('click', () => {
    secandoContainer.style.display = 'none';
    liftContainer.style.display = 'block';
    treinoContainer.style.display = 'none';   

    requestAnimationFrame(() =>{
        liftContainer.classList.add('liftdetox');
            liftContainer.scrollIntoView({
                behavior: "smooth"
            })
    })
})
*/

var bttLift = document.getElementById('button-lift');
var liftContainer = document.getElementById('carregaLift-Partial')

bttLift.addEventListener('click', async () =>{
    try{
        const response = await fetch('/carregaLift/liftDetox');
        if(response.ok){
            const html = await response.text();
            liftContainer.innerHTML = html;  
        
            requestAnimationFrame(() =>{
                liftContainer.scrollIntoView({
                    behavior: "smooth"
                })
            })        
        }else{
            console.error("Erro ao carregar o partial:", response.status);
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
})


/*
//CARREGANDO SECANDO EM CASA
var bttSecando = document.getElementById('button-secando');
var secandoContainer = document.getElementById('container-secando');

bttSecando.addEventListener('click', () =>{
    liftContainer.style.display = 'none';   
    secandoContainer.style.display = 'block';
    treinoContainer.style.display = 'none';   

    requestAnimationFrame(() =>{
        secandoContainer.classList.add('secando');
            secandoContainer.scrollIntoView({
                behavior: "smooth"
            })
    })
})    



//CARREGANDO TREINO
var bttTreino = document.getElementById('button-treino');
var treinoContainer = document.getElementById('container-treino');

bttTreino.addEventListener('click', () =>{
    liftContainer.style.display = 'none';
    secandoContainer.style.display = 'none';
    treinoContainer.style.display = 'flex';

    requestAnimationFrame(() =>{
        treinoContainer.classList.add('treino');
            treinoContainer.scrollIntoView({
                behavior: "smooth"
            })
    })
})
*/
