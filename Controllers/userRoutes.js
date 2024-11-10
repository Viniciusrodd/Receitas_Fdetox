
//DEPENDENCES
const express = require('express');
const router = express.Router();


//HOMEPAGE ROUTE
router.get('/homepage', (req, res) =>{
    res.render('homepage')
})


//PARTIALS CUSTOMIZATION
router.get('/partial', (req, res) =>{
    res.render('./partials/voltarProdutos')
})


// Endpoint para registrar cliques
router.get("/painelAdm", (req, res) => {
    res.render('painelAdm', {
        clickCount: clickCount
    })    
});



// Endpoint para registrar cliques
router.post("/painelAdm/:data", (req, res) => {
    let count = req.params.data
    console.log(`Clique registrado! ${count}`);

     // Atualiza o valor de clickCount
     clickCount = parseInt(count);  // Converte para inteiro, se necessário

     // Renderiza novamente a página com a nova contagem de cliques
     res.render('painelAdm', { 
        clickCount: clickCount 
    });
});



//CARREGA LIFT
router.get('/carregaLift/:partial', async (req, res) =>{
    const { partial } = req.params;

    try{
        // Renderiza o partial usando o nome passado pela rota
        res.render(`partials/${partial}`, {}, (error, html) => {
            if (error) {
                return res.status(500).send("Erro ao carregar o partial.");
            }
            res.send(html); // Envia o HTML renderizado para o cliente
        });
    }catch (error){
        console.error("Erro ao carregar o partial:", error);
        res.status(404).send("Partial não encontrado.");
    }

});



//CARREGA SECANDO
router.get('/carregaSecando/:partial', async (req, res) =>{
    const { partial } = req.params;

    try{
        // Renderiza o partial usando o nome passado pela rota
        res.render(`partials/${partial}`, {}, (error, html) => {
            if (error) {
                return res.status(500).send("Erro ao carregar o partial.");
            }
            res.send(html); // Envia o HTML renderizado para o cliente
        });
    }catch (error){
        console.error("Erro ao carregar o partial:", error);
        res.status(404).send("Partial não encontrado.");
    }

});


//CARREGA TREINO
router.get('/carregaTreino/:partial', async (req, res) =>{
    const { partial } = req.params;

    try{
        // Renderiza o partial usando o nome passado pela rota
        res.render(`partials/${partial}`, {}, (error, html) => {
            if (error) {
                return res.status(500).send("Erro ao carregar o partial.");
            }
            res.send(html); // Envia o HTML renderizado para o cliente
        });
    }catch (error){
        console.error("Erro ao carregar o partial:", error);
        res.status(404).send("Partial não encontrado.");
    }

});



module.exports = router

