# InfnetFood

## Definição de Escopo e Objetivo

O sistema tem como objetivo principal simular um aplicativo de pedidos de comida, permitindo ao usuário navegar por categorias, visualizar produtos, adicionar itens ao carrinho e realizar pedidos de forma simples e organizada.

Além disso, o projeto busca demonstrar a estruturação de um aplicativo mobile utilizando React Native, contemplando navegação entre telas, gerenciamento de estado e integração com serviços externos.

Para atender a esses objetivos, foram implementadas as seguintes funcionalidades:

* Autenticação simples de usuário (dados mockados)
* Listagem de categorias e produtos
* Visualização de detalhes dos produtos
* Carrinho de compras com controle de quantidade e cálculo de total
* Finalização de pedidos (checkout)
* Consulta de endereço via API de CEP (ViaCEP)
* Mapa simulado com seleção de restaurantes
* Tela de detalhes do restaurante com informações e cardápio
* Histórico de pedidos
* Tela de perfil do usuário
* Configuração de tema (claro/escuro)
* Notificações locais simuladas

## Tecnologias Utilizadas

* React Native
* Expo
* React Navigation
* Zustand (gerenciamento de estado)
* Expo Notifications
* Fetch API

## Estrutura do Projeto

* `screens/` → telas principais da aplicação
* `components/` → componentes reutilizáveis
* `navigation/` → configuração de rotas e navegação
* `stores/` → gerenciamento de estado global
* `services/` → integração com APIs externas
* `data/` → dados mockados

## Execução do Projeto

Para executar o projeto localmente:

```bash
npm install
npm start
```

Após iniciar, utilize o aplicativo Expo Go no dispositivo móvel e escaneie o QR Code exibido no terminal.

## API Utilizada

* ViaCEP: consulta de endereço a partir do CEP informado pelo usuário no checkout.

## Prints da Aplicação

<img width="274" height="588" alt="Captura de Tela 2026-04-06 às 22 08 50" src="https://github.com/user-attachments/assets/50420f1c-a23c-44da-a25a-80f1304cd585" />
<img width="310" height="608" alt="Captura de Tela 2026-04-06 às 22 09 21" src="https://github.com/user-attachments/assets/17fd4cb0-c104-40c8-a7a2-0b62fd07ebdd" />
<img width="293" height="609" alt="Captura de Tela 2026-04-06 às 22 09 52" src="https://github.com/user-attachments/assets/6fac8c07-6965-44a9-a138-cb0c0f8de08f" />
<img width="295" height="590" alt="Captura de Tela 2026-04-06 às 22 10 07" src="https://github.com/user-attachments/assets/53113be0-58b4-4bfc-82c7-1a37e34f223c" />
<img width="285" height="577" alt="Captura de Tela 2026-04-06 às 22 10 20" src="https://github.com/user-attachments/assets/22c2986c-1992-4987-9a87-b694b1f6a251" />
<img width="298" height="602" alt="Captura de Tela 2026-04-06 às 22 11 05" src="https://github.com/user-attachments/assets/3b747068-6171-4261-b144-27d1f42cd7ec" />

## Observações

O projeto utiliza dados mockados para simulação das funcionalidades principais. O mapa foi implementado de forma simulada com imagem e marcadores interativos, atendendo aos requisitos propostos.

## Autor

João Pedro
