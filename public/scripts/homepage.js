

//FUNÇÕES DE AÇÕES DE CLICK
let iniciarBtt = document.getElementById('btt-conteudo-1-home');

function scrollButton(btt, content){
    btt.addEventListener('click', () =>{
        if(btt){
            content.scrollIntoView({
                behavior: "smooth"
            })
        }
    });
};

let sectionMission = document.getElementsByClassName('section-mission-home');
scrollButton(iniciarBtt, sectionMission[0]);


let productsSession = document.getElementById('sessao-prodAbaixo-home');
let buttonProductsView = document.getElementById('products-btt-view');
scrollButton(buttonProductsView, productsSession)



//ANIMAÇÃO NOS PRODUTOS
function mouseEnter(img, transformed){
    img.addEventListener('mouseenter', () => {
        img.classList.add(transformed);
    });
};

function mouseLeave(img, classe){
    img.addEventListener('mouseleave', () =>{
        setTimeout(() =>{
            img.classList.remove(classe)
        }, 5000);
    });
};

var imgLift = document.getElementById('img-lift-home');
mouseEnter(imgLift, 'transformed-lift-home');
//mouseLeave(imgLift, 'transformed-lift');

var imgSecandoCasa = document.getElementById('img-secandoCasa-home');
mouseEnter(imgSecandoCasa, 'transformed-secandoCasa-home');
//mouseLeave(imgSecandoCasa, 'transformed-secandoCasa')


var imgTreino = document.getElementById('img-treino-home');
mouseEnter(imgTreino, 'transformed-treino-home');
//mouseLeave(imgProdutoDigital, 'transformed-produtoDigital')




//CARREGANDO LIFT
var bttLift = document.getElementById('button-lift-home');
var liftContainer = document.getElementById('carregaLift-Partial');

bttLift.addEventListener('click', async () =>{
    try{
        const response = await fetch('/carregaLift/liftDetox');
        if(response.ok){
            const html = await response.text();
            liftContainer.innerHTML = html;  
            secandoContainer.innerHTML = '';
            treinoContainer.innerHTML = '';
        
            requestAnimationFrame(() =>{
                liftContainer.scrollIntoView({
                    behavior: "smooth"
                });
            });

            carregarScriptInteracao();
        }else{
            console.error("Erro ao carregar o partial:", response.status);
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
});
//CARREGANDO SCRIPT ÚNICO DA PARTIAL LIFT:
function carregarScriptInteracao() {
    const script = document.createElement('script');
    script.src = '../../scripts/liftDetox.js'; // Caminho do script específico para o partial
    script.onload = () => console.log("Script de interação carregado.");
    document.body.appendChild(script);
};



//CARREGANDO SECANDO
var bttSecando = document.getElementById('button-secando-home');
var secandoContainer = document.getElementById('carregaSecando-Partial');

bttSecando.addEventListener('click', async () =>{
    try{
        const response = await fetch('/carregaSecando/secando');
        if(response.ok){
            const html = await response.text();
            secandoContainer.innerHTML = html;
            liftContainer.innerHTML = '';  
            treinoContainer.innerHTML = '';
        
            requestAnimationFrame(() =>{
                secandoContainer.scrollIntoView({
                    behavior: "smooth"
                });
            });    
        }else{
            console.error("Erro ao carregar o partial:", response.status);
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
})




//CARREGANDO TREINO
var bttTreino = document.getElementById('button-treino-home');
var treinoContainer = document.getElementById('carregaTreino-Partial');

bttTreino.addEventListener('click', async () =>{
    try{
        const response = await fetch('/carregaTreino/treino');
        if(response.ok){
            const html = await response.text();
            treinoContainer.innerHTML = html;
            liftContainer.innerHTML = '';
            secandoContainer.innerHTML = ''  
        
            requestAnimationFrame(() =>{
                treinoContainer.scrollIntoView({
                    behavior: "smooth"
                });
            });        
        }else{
            console.error("Erro ao carregar o partial:", response.status);
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
});
