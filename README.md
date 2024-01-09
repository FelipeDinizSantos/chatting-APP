# CHATTING APP 
Chatting APP é um projeto pessoal construido para praticar meus conhecimentos em ReactJS e NodeJS, bem como aprofundar meus estudos em conexões **WebSockets**! 

Tem como objetivo possibilitar a troca de mensagens entre dois usuários com base em IDs gerados randomicamente em um ambiente funcional. A interface e funcionalidades se assemelham, em uma comparação rustica, ao Whatsapp ou a qualquer outra aplicação de chat online. 

## O Que são WebSockets? 

WebSockets são uma tecnologia de comunicação bidirecional em tempo real entre um navegador (cliente) e um servidor. Eles permitem que dados sejam transmitidos de forma eficiente e contínua, tanto do cliente para o servidor quanto do servidor para o cliente, sem a necessidade de solicitações repetidas. 

Ao contrário do modelo tradicional de comunicação HTTP, no qual o cliente faz uma solicitação e o servidor responde, os WebSockets estabelecem uma conexão persistente entre o cliente e o servidor. Isso permite que informações sejam enviadas instantaneamente em ambas as direções, sem a sobrecarga de recriar a conexão a cada solicitação.

## WebSockets Neste Projeto

Os WebSockets são aplicados tanto na aplicação frontend quando no servidor, o qual irá administrar os clientes online, o recebimento e envio de mensagens. Assim sendo necessario a configuração e conexão continua entre ambos. Explore mais sobre o servidor utilizado na aplicação aqui: [Chatting-SERVER](https://github.com/FelipeDinizSantos/chatting-SERVER)!

## Instalação 
Antes de clonar este repositório, prepare o servidor, o colocando no ar, siga os passos descritos no README de  [Chatting-SERVER](https://github.com/FelipeDinizSantos/chatting-SERVER) 

Com servidor pronto, clone este repositório e navegue até a pasta:
```bash
./src/config/Globals
```

E altere este atributo: 

```bash
static WS_URL = process.env.WS_URL ? process.env.WS_URL : 'https://chatting-app-hhls.onrender.com';
```

para: 

```bash
static WS_URL = process.env.WS_URL ? process.env.WS_URL : 'ws://localhost:3010'; // Ou a porta que subiu seu servidor
```

## Estado Atual do Projeto 
