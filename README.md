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
- Inicie um arquivo de armazenamento de variáveis com nome `.env`. Inclua a sua chave da API do serviço "exchangerate-api" da seguinte forma.

`EXCHANGE_API_KEY=$SUA_CHAVE$`

- Você pode obter uma chave gratuita pelo site "https://www.exchangerate-api.com/"

## Como Utilizar

- Inicie a aplicação com `npm run dev`
- Pra realizar uma conversão, os requests devem ser enviados pelo método **POST** para a rota **localhost:4000/convert**
- O request deve ter um body no seguinte formato JSON

`
{
  "value": $VALOR$,
  "from": $MOEDA_ORIGEM$,
  "to": $MOEDA_DESTINO$
}
`

- Exemplo:

`
{
  "value": 1000,
  "from": "BRL",
  "to": "USD"
}
`

- A seguinte lista de moedas está disponível para conversão:

[
        "USD",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "FOK",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KID",
        "KMF",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLE",
        "SLL",
        "SOS",
        "SRD",
        "SSP",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "UYU",
        "UZS",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
        "ZWL"
    ]

## Notas

Foram utilizadas as bibliotecas Jest e Supertest para desenvolvimento da aplicação com testes unitários. Fiz a opção por utilizar a sintaxe ES6 visto que essa é a recomendada para novas aplicações NodeJs, e a biblioteca Jest recentemente incluiu suporte para a sintaxe. Para tal, o script de teste no `package.json` deve incluir a flag `--experimental-vm-modules`. Também devemos incluir a key value `"type": "module"` no `package.json`.

Para teste da aplicação com os 8 testes elaborados, execute o comando `npm run test` no terminal.