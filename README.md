# Project Challenge Liqi

Desafio 2

## Objetivos

- Primeira parte: Criar uma função Lambda acionada através da API Gateway, em um POST na rota createUser. A função Lambda deve retornar à API Gateway o mesmo body da requisição.
- Segunda parte: Criar um serviço assíncrono com SQS, Lambda e EventBridge. A função Lambda será acionada pelo SQS. Após acionada, a função enviará os mesmos dados para o EventBridge.

## Dependências

NodeJS: Versão 20.12.1

aws-cli: Versão 2.15.40

sam-cli: Versão 1.115

## Como Instalar

- Certifique-se que você tem o node instalado na sua máquina
- Certifique-se que você tem a cli da AWS instalada global na sua máquina
- Certifique-se que você tem a cli da SAM instalada global na sua máquina
- Tenha uma conta AWS e um usuário com permissões para executar os serviços SAM, Lambda, SQS, EventBRidge, CloudFormation, S3, IAM
- Clone o repositório

## Como Utilizar sync application

- Entre na sua conta da AWS pelo terminal com `aws configure`
- Para fazer deploy da primeira parte, entre na pasta **desafio-2-lambda** e utilize o comando `sam build`, e depois o comando `sam deploy`
- Para utilizar, utilize uma API plataform como Postman e envie uma requisição para a URL disponibilizada pela API Gateway. O resultado retornado será o mesmo body JSON enviado na requisição

## Como Utilizar async application

- Entre na sua conta da AWS pelo terminal com `aws configure`
- Para fazer deploy da segunda parte, entre na pasta **desafio-2-async** e utilize o comando `sam build`, e depois o comando `sam deploy`
- Para utilizar, comece criando uma *mensagem* na plataforma SQS do console AWS com um conteudo JSON. Através do serviço CloudWatch podemos ver a mensagem se perpetuando pela Lambda (através dos logs incluídos propositalmente no código) até o EventBridge.

## Notas

A cli SAM permite você testar localmente, para tal, é nescessário uma plataforma de conteiners, como o Docker. Uma vez o Docker Desktop (ou outra distribuição de conteiners) instalada, execute o comando `sam build` e `sam local invoke -e events/event.json` para executar a aplicação localmente com um payload inical determinado no arquivo **event.json**