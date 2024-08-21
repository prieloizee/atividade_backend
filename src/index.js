//importa o modulo Express
const express = require('express') 

//Define uma classe para organizar a logica de aplicação
class AppController{

    constructor(){
        //Cria uma nova instancia so Express dentro da classe
        this.express = express();
        //Chama o metodo middleares para configurar os middlears
        this.middlewares();
        //Chama o metodo routes para definir as rotas api
        this.routes();

    }
    middlewares(){
        //Permirtir qua a aplicação receba dados em formato JSON nas requisições
        this.express.use(express.json());
    }

    //Define as rotas da API
    routes(){
        this.express.get('/health/',(req, res)=>{res.send({  nome:"Priscila", idade:"16", cpf:"41533965838" });
        });//Essa rota é usada para mostrar as informaçoes
    }
}

// Exportando a instacia de express configurada, para que seja acessado em outros arquivos
module.exports = new AppController().express;