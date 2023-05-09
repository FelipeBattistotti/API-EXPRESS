const express = require('express')
const detalsController = require('../controllers/detalsController')
const router = express.Router()
const teniscontroller = require('../controllers/tenisController')
const homeController = require('../controllers/homeController')
const adminController = require('../controllers/adminController');
const loginController = require('../controllers/loginController')
const pagamentoController = require('../controllers/pagamentoController')
const roupasController = require('../controllers/roupasControler')
const { body } = require('express-validator')
const perfilController = require('../controllers/perfilController')


router.get('/',  homeController.home)
router.get('/tenis', teniscontroller.tenis)
router.get('/detals/:id', detalsController.getProduct)
router.get('/search', homeController.search)
router.get('/admin', adminController.renderizarAdminPage)
router.post('/product', 
    body('nameProduct').notEmpty().withMessage('Marca precisa ser preenchido!'),
    body('valueProduct').notEmpty().withMessage('Valor precisa ser preenchido!'),
    body('sizeProduct').notEmpty().withMessage('Tamanho precisa ser preenchido!'),
    body('descriptionProduct').notEmpty().withMessage('Descrição precisa ser preenchido!'),
    body('colorProduct').notEmpty().withMessage('Cor precisa ser preenchido!'),
    adminController.addProduct)
router.delete('admin/delet/:product', adminController.deletProduct)
router.put('/admim/edit/:product', adminController.editProduct)
router.get('/login', loginController.renderizarTelaLogin) 
router.get('/pagamento', pagamentoController.pagamentoPage)
router.get('/roupas', roupasController.roupasPage)
router.post('/logar', loginController.logarUsuario)
router.get('/perfil', perfilController.renderizarTelaPerfil)
router.post('/editar/perfil', perfilController.editarPerfil)
router.post('/criarconta',
body('nome').isEmpty().withMessage('Nome precisa ser preenchido!'),
body('sobrenome').isEmpty().withMessage('Sobrenome precisa ser preenchido!'), 
body('email').isEmpty().withMessage('Email precisa ser preenchido!'),
body('rua').isEmpty().withMessage('Rua precisa ser preenchido!'),
body('numero').isEmpty().withMessage('Número precisa ser preenchido!'),
body('cep').isEmpty().withMessage('CEP precisa ser preenchido!'),
body('senhaNova').isEmpty().withMessage('Senha precisa ser preenchido!'),
body('confirmarSenha').isEmpty().withMessage('Confirmar senha precisa ser preenchido!'),
loginController.cadastrarUsuario)
router.get('/sair', loginController.deslogarUsuario)

module.exports = router



