

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


let productsSession = document.getElementById('product-presentation-home');
let buttonProductsView = document.getElementById('products-btt-view');
scrollButton(buttonProductsView, productsSession);



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
        const response1 = await fetch('/carregaLift/liftDetox');
        const response2 = await fetch('/carregaPartial/voltarProdutos');

        if(response1.ok && response2.ok){
            const html1 = await response1.text();
            const html2 = await response2.text();

            liftContainer.innerHTML = html1 + html2;  
            secandoContainer.innerHTML = '';
            treinoContainer.innerHTML = '';
    
            // Força o navegador a recalcular o layout
            liftContainer.offsetHeight;

            setTimeout(() =>{
                liftContainer.scrollIntoView({
                    behavior: "smooth"
                });
            }, 1000);               

            carregarScriptInteracao();
            voltarProdutos()
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
});
//CARREGANDO SCRIPT ÚNICO DA PARTIAL LIFT:
async function carregarScriptInteracao() {
    if (!document.querySelector('script[src="/scripts/scriptPartials.js"]')) {
        const script = document.createElement('script');
        script.src = '/scripts/scriptPartials.js';
        script.onload = () => {
            inicializarBotoesLift();  // Chama a função assim que o script é carregado
        };
        document.body.appendChild(script);
    } else {
        // Caso já esteja carregado, apenas chama a função de inicialização
        inicializarBotoesLift();
    }
}

function voltarProdutos(){
//FUNÇÕES DE VOLTAR AOS PRODUTOS
    //Lift:
    let bttLiftVoltar = document.getElementById('btt-lift-voltar');
    let liftProductVoltar = document.getElementById('container-lift-home');
    scrollButton(bttLiftVoltar, liftProductVoltar);

    //Secando:
    let bttSecandoVoltar = document.getElementById('btt-secando-voltar');
    let secandoProductVoltar = document.getElementById('container-secandoCasa-home')
    scrollButton(bttSecandoVoltar, secandoProductVoltar);

    //Treino:
    let bttTreinoVoltar = document.getElementById('btt-treino-voltar');
    let treinoProductVoltar = document.getElementById('container-treino-product-home')
    scrollButton(bttTreinoVoltar, treinoProductVoltar);
}



//CARREGANDO SECANDO
var bttSecando = document.getElementById('button-secando-home');
var secandoContainer = document.getElementById('carregaSecando-Partial');

bttSecando.addEventListener('click', async () =>{
    try{
        const response1 = await fetch('/carregaSecando/secando');
        const response2 = await fetch('/carregaPartial/voltarProdutos');

        if(response1.ok && response2.ok){
            const html1 = await response1.text();
            const html2 = await response2.text();

            secandoContainer.innerHTML = html1 + html2;
            liftContainer.innerHTML = '';  
            treinoContainer.innerHTML = '';
        
            setTimeout(() =>{
                secandoContainer.scrollIntoView({
                    behavior: "smooth"
                });
            }, 1000);    

            voltarProdutos()
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
        const response1 = await fetch('/carregaTreino/treino');
        const response2 = await fetch('/carregaPartial/voltarProdutos');

        if(response1.ok && response2.ok){
            const html1 = await response1.text();
            const html2 = await response2.text();

            treinoContainer.innerHTML = html1 + html2;
            liftContainer.innerHTML = '';
            secandoContainer.innerHTML = ''  
        
            setTimeout(() =>{
                treinoContainer.scrollIntoView({
                    behavior: "smooth"
                });
            }, 1000);     
            
            voltarProdutos()
        }else{
            console.error("Erro ao carregar o partial:", response.status);
        }
    }catch(error){
        console.error("Erro de requisição:", error);
    }
});



//var bttLift = document.getElementById('button-lift-home');

var clickCount = 0
bttLift.addEventListener('click', () =>{

    clickCount++
    axios.post(`http://localhost:5500/painelAdm/${clickCount}`)
        .then((response) =>{
            console.log(`dados enviados`)
        })
        .catch((error) =>{
            console.log(`Erro ao enviar dados de clickCount ${error}`)
        })
})
