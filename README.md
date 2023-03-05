


</p>
<h1 align="center">
    Jusbrasil - Desafio Software Engineer - Backend
</h1>


Solução do desafio da Jusbrasil de criação de uma API que executa uma coleta dados de um processo em todos os graus dos Tribunais de Justiça de Alagoas (TJAL) e do Ceará (TJCE) utilizando o **web crawler**, principal robô usado pelos buscadores para encontrar e indexar páginas de um site.

Abaixo temos algumas especificações do projeto:


## Estrutura de pastas

O projeto foi organizado com uma estrutura padrão usada em projetos NodeJS ultimamente, como na imagem a seguir:

![estrutura de pastas do projeto](https://i.ibb.co/Q8g078t/Captura-de-Tela-2023-03-04-a-s-22-15-39.png)

- **app.ts** -> realiza a configuração do express junto ao cors e utiliza as rotas de routes.ts
- **routes.ts** -> configura as rotas da aplicação, retornando um resultado de sucesso ou erro de acordo com a rota e suas especificações
- **server.ts** -> apenas ouve a porta 3000 ao executar o projeto
- **crawler.ts** -> executa as funções do puppeteer para realizar a busca de um processo

## 🧪 Testes

Pensando na qualidade e funcionamento do projeto, foram realizados alguns testes no projeto. Para isso, foi utilizado o **Jest**, principal ferramenta de testes JavaScript. O Jest ainda conta com um relatório de cobertura dos arquivos (coverage), assim podemos verificar se todas as pastas do projeto foram testadas.

### Estrutura de pasta dos testes
![estrutura de pastas dos testes](https://i.ibb.co/QNKYfX7/Captura-de-Tela-2023-03-04-a-s-22-31-10.png)

### Testes executados e com 100% de cobertura
![### Testes executados e com cobertura](https://i.ibb.co/jZLVspF/Captura-de-Tela-2023-03-04-a-s-22-31-30.png)

Para executar os testes, execute no terminal:

```bash
$ yarn test

## OU ##

$ npm test

```

## 🚀 Passos para executar o projeto

```bash

# Instale todas as dependências
$ yarn 
## OU ## 
$ npm install

# Rode o projeto (porta 3000 precisa estar aberta)
$ yarn dev
## OU ## 
$ npm run dev

```



## 🛠 Principais dependências utilizadas

Essas foram as principais dependências utilizadas na construção do projeto:

#### **package.json** 

-   **[express - Framework para o desenvolvimento de aplicações JavaScript com o Node.js ](https://expressjs.com/)**
-   **[puppeteer - Biblioteca que fornece uma API de alto nível para controlar o Chrome ou o Chromium através do Protocolo DevTools](https://pptr.dev/)**
-   **[jest - Framework de testes para JavaScript](https://jestjs.io/pt-BR/)**
-   **[ts-jest - Ferramenta para utilizar o TypeScript junto ao jest](https://www.npmjs.com/package/ts-jest)** 



## 🦸 Autor

Gabriel Magalhães Pereira

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/gabriel-pereira-556a03208/)](https://www.linkedin.com/in/gabriel-pereira-556a03208//) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:gabiteclas@gmail.com)](mailto:gabiteclas@gmail.com)
