# Teste Prático - CRUD de Itens com React | NX Multiserviços
Desenvolver uma aplicação simulando um CRUD de itens. A aplicação deve conter uma página principal com uma lista dos itens cadastrados e uma rota /dashboard com funcionalidades de visualização, criação, edição e exclusão de itens. Utilize o yarn como gerenciador de pacotes. Autenticação não é necessária para este projeto.
.
Stack obrigatória: React, Typescript, React-Bootstrap
Design/Layout
- Total liberdade de layout
- Obrigatório usar componentes do react-bootstrap
- Código organizado, com separação clara entre componentes, serviços e tipos
Para Entrega
- Repositório público no GitHub

Objetivo da avaliação:
- Domínio de React com TypeScript
- Uso do React-Bootstrap
- Organização do código e componentes
- Capacidade de simular uma estrutura de CRUD com lógica de estado local e global
- Uso correto de useState, useEffect etc.
- Boa prática de arquitetura e separação de responsabilidades

----
TODO:

puxar dados com axios.

tabela de listagem dos itens
página de criação
pagina de edição (pode ser a mesma da criação)
modal de confirmação e exclusão.
toast de sucesso e erro.
estados globais - redux, zustand ou recoil

----
- Read 
- Create
- Update
- Delete

- Service
  - tratamento de erros
  - chamadas para requisições.

- Utils
  - chamada com axios

- Routes
  - list
  - createOrUpdate

- Components
  - modal
  - toast
  - card
  - button