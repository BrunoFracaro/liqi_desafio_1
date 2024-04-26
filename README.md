# Project Challenge Liqi

Opção Escolhida: 2

## Objetivos

- Criar API REST
- Consumir API de cotação de moedas "https://www.exchangerate-api.com/"
- Realizar cambio de valores
- Criar endpoint para receber especificação de quantidade, moeda de origem, moeda de destino
- Calcular e retornar o valor convertido

## Dependências

NodeJS: Versão 20.12.1

Express: Versão 4.19.2

Jest: Versão 29.7.0

Supertest: Versão 7.0.0

## Como Instalar

- Certifique-se que você tem o node instalado na sua máquina
- Clone o repositório
- Instale as dependências com `npm install`

## Como Utilizar

- Inicie a aplicação com `npm run dev`
- Os requests devem ser enviados para a rota **localhost:4000/convert**
- O request deve ter um body no seguinte formato JSON

`
{
  "value": 1000,
  "from": "BRL",
  "to": "USD"
}
`

## Notas

Foram utilizadas as bibliotecas Jest e Supertest para desenvolvimento da aplicação com testes unitários. Fiz a opção por utilizar a sintaxe ES6 visto que essa é a recomendada para novas aplicações NodeJs, e a biblioteca Jest recentemente incluiu suporte para a sintaxe. Para tal, o script de teste no `package.json` deve incluir a flag `--experimental-vm-modules`. Também devemos incluir a key value `"type": "module"` no `package.json`.

Para teste da aplicação com os 8 testes elaborados, execute o comando `npm run test` no terminal.