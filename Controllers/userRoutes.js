
//DEPENDENCES
const express = require('express');
const router = express.Router();
const painelHomepage = require('../models/painelHomepage');
const sequelize = require('sequelize');
const cadastroAdm = require('../models/cadastroAdm');
const bcrypt = require('bcryptjs');
const authMiddleware = require('../middleware/authenticate');


//HOMEPAGE ROUTE
router.get('/homepage', (req, res) =>{
    res.render('homepage')
})


//PARTIALS CUSTOMIZATION
router.get('/partial', (req, res) =>{
    res.render('partials/treino')
})



//PÁGINA CADASTRO
router.get('/registro', (req, res) =>{
    res.render('registro')
})


//PÁGINA DE LOGIN
router.get('/loginAdm', (req, res) =>{
    res.render('login')
})



//ROTA DE EFETUAR CADASTRO
router.post('/cadastro', async (req, res) =>{
    try{
        const name = req.body.nome;
        const password = req.body.senha;

        if(!name || !password){
            return res.redirect('/registro?error=Campos nome/senha inválidos')
        }
    
        const userExist = await cadastroAdm.findOne({ where: { nome: name } })
        if(userExist){
            return res.redirect('/registro?error=Nome de usuário já existente')
        }

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        await cadastroAdm.create({
            nome: name,
            senha: hashedPassword
        })

        console.log('Registro efetuado com sucesso');
        res.redirect('/loginAdm')
    }
    catch(error){
        console.log('Erro no processamento dos dados' + error)
        res.status(400).send('Erro no processamento dos dados' + error)
    }
})



//ROTA DE EFETUAR LOGIN
router.post("/login", (req, res) => {
    const name = req.body.nome;
    const password = req.body.senha;

    cadastroAdm.findOne({ 
        where: { 
            nome: name 
        } 
    })
    .then((dadosLogin) =>{
        if(dadosLogin != undefined){
            var correct = bcrypt.compareSync(password, dadosLogin.senha)
            if(correct){
                req.session.user = {
                    id: dadosLogin.id,
                    nome: dadosLogin.nome
                }
                res.redirect('/painelAdm')
                console.log('Autenticação + sessão Ok')
            }else{
                return res.redirect('/loginAdm?error=Senha de ADM incorretos') 
            }
        }else{
            console.log('Dados de ADM incorretos')
            return res.redirect('/loginAdm?error=Dados de ADM incorretos') 
        }
    })

})



// Endpoint de painel de administrador
router.get("/painelAdm", authMiddleware, (req, res) => {
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

        // Incrementar o tempo de tela
        await painelHomepage.update({
            screen_time: totalTimeSpent
        }, {
            where: {
                page_name: 'HomePage'
            }
        })
        .then((data) =>{
            console.log('timeSpent enviado')
        })

        res.status(200).send('Tempo incrementado com sucesso!');
    }
    catch (error){
        console.error('Erro ao atualizar tempo de tela:', error);
        res.status(500).send('Erro no servidor');    
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

