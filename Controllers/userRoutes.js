
//DEPENDENCES
const express = require('express');
const router = express.Router();
const painelHomepage = require('../models/painelHomepage');
const sequelize = require('sequelize');


//HOMEPAGE ROUTE
router.get('/homepage', (req, res) =>{
    res.render('homepage')
})


//PARTIALS CUSTOMIZATION
router.get('/partial', (req, res) =>{
    res.render('./partials/secando')
})


// Endpoint para registrar cliques
router.get("/painelAdm", (req, res) => {
    painelHomepage.findOne({
        where: {
            page_name: 'homePage'
        }
    })
    .then((data) =>{
        res.render('painelAdm', {
            painelData: data
        }) 
    })
    .catch((error) =>{
        console.log(error)
    })
});



router.post('/painelAdm/getTime', async (req, res) =>{
    try{
        const { totalTimeSpent } = req.body;

        //Localiza um registro existente com base na page_name (HomePage no exemplo).
        //Se não existir, cria um novo com os valores padrão especificados em defaults.
        const [page, created] = await painelHomepage.findOrCreate({
            where: { page_name: 'HomePage' },
            defaults: {
                screen_time: 0 // Valor inicial padrão
            }
        });

        // Incrementar o tempo de tela
        await page.increment('screen_time', {
            by: totalTimeSpent // Incrementa pelo tempo enviado
        });
    }
    catch{

    }
})



// Endpoint para registrar cliques
router.post("/painelAdm/clicksRegister", async (req, res) => {
    try {
        const { buttonType } = req.body; //Recebe o tipo do botão

        //Verifica se o botão é válido com 1 das validações:
        const validButtons = ['lift', 'secando', 'treino'];
        if (!validButtons.includes(buttonType)) {
            return res.status(400).send('Botão inválido');
        }

        //Busca ou cria o registro da página
        //page: O registro encontrado (ou recém-criado).
        //created: Um booleano (true ou false) que indica se o registro foi criado durante essa execução.
        const [page, created] = await painelHomepage.findOrCreate({
            where: { page_name: 'HomePage' },
            defaults: {
                clicks_lift: 0,
                clicks_secando: 0,
                clicks_treino: 0,
                screen_time: 0
            }
        });

        //Incrementa o campo correspondente ao botão clicado
        const fieldToIncrement = `clicks_${buttonType}`; // e.g., clicks_lift
        await page.increment(fieldToIncrement, { 
            by: 1 
        });

        res.status(200).send({ message: `Clique no botão ${buttonType} registrado com sucesso!` });
    } catch (error) {
        console.error('Erro ao registrar clique:', error);
        res.status(500).send({ error: 'Erro ao registrar clique' });
    }
});



//CARREGA VOLTARPRODUTOS    
router.get('/carregaPartial/:partial', async (req, res) =>{
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

