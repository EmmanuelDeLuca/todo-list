# MyTodo 📝

## Descrição

O **MyTodo** é um aplicativo de lista de tarefas simples e dinâmico, desenvolvido com **React**, **TypeScript** e **SCSS**. O objetivo deste projeto foi criar uma lista de tarefas onde é possível adicionar, marcar como concluída e remover tarefas, com um contador que exibe o número de tarefas no total, as pendentes e as concluídas. Toda a lógica funciona dinamicamente, permitindo que as atualizações sejam refletidas em tempo real. Além disso, os itens da lista de tarefas são salvos no **localStorage** do navegador, garantindo que as tarefas persistam mesmo após o fechamento do aplicativo ou atualização da página.

## Funcionalidades

- **Adicionar tarefas**: O usuário pode adicionar novas tarefas à lista.
- **Marcar como concluída**: Cada tarefa pode ser marcada como concluída, alterando seu estilo e mudando a contagem de tarefas pendentes.
- **Remover tarefas**: O usuário pode remover tarefas da lista, e as contagens de tarefas no total e pendentes são atualizadas automaticamente.
- **Contagem dinâmica**: O número total de tarefas, o número de tarefas pendentes e o número de tarefas concluídas são exibidos e atualizados dinamicamente conforme as ações são realizadas.

## Tecnologias Utilizadas

- **React**: Framework JavaScript para construção da interface de usuário.
- **TypeScript**: Superset do JavaScript que traz tipagem estática para o código, proporcionando maior segurança e legibilidade.
- **SCSS**: Pré-processador CSS que permite o uso de variáveis, aninhamento e outras funcionalidades para um estilo mais organizado e escalável.
- **localStorage**: Usado para salvar os itens da lista de tarefas, garantindo persistência dos dados no navegador.

## Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/mytodo.git

2. **Instale as dependências:**
Navegue até o diretório do projeto e execute o seguinte comando para instalar as dependências:
   ```bash
   yarn install 


3. **Rodando o aplicativo:**
Após instalar as dependências, rode o seguinte comando para iniciar o servidor de desenvolvimento:
   ```bash
   yarn start 

4. **Acesse o projeto:**

   ```bash
   http://localhost:3000
