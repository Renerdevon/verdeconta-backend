Backend do VerdeConta, um aplicativo web para controlo de compras de supermercado, gestão de listas, histórico de gastos e análise por mercado.

Este projeto foi desenvolvido com foco em boas práticas, arquitetura limpa e cenários reais de uso, indo além de exemplos básicos ou tutoriais.

🚀 Funcionalidades
🔐 Autenticação & Segurança

Autenticação com JWT

Middleware de proteção de rotas

Passwords criptografadas com Bcrypt

👤 Utilizadores

Utilizador fixo para uso pessoal

Associação de todos os dados ao utilizador autenticado

🗂️ Categorias & Produtos

CRUD de categorias de produtos

CRUD de produtos associados a categorias

Produtos vinculados ao utilizador

🧾 Listas de Compras

Criação de listas por mercado:

Pingo Doce

Continente

Mercadona

Histórico de listas

Controle de estado da lista (aberta / futura finalização)

🛍️ Itens da Lista

Adição de produtos antes da compra

Quantidade configurável

Preço opcional (inserido após a compra)

Status do item:

PENDING

BOUGHT

💶 Cálculo Automático

Total da lista calculado automaticamente

Soma baseada apenas em itens comprados

Persistência do total no banco de dados

🧠 Arquitetura

O projeto segue uma arquitetura organizada por responsabilidade:

src/
 ├── controllers/
 ├── services/
 ├── routes/
 ├── middlewares/
 ├── prisma/
 └── app.ts


Controllers: recebem a requisição e devolvem a resposta

Services: concentram regras de negócio

Routes: definem endpoints

Middlewares: autenticação e validações

Prisma: ORM e modelagem do banco

🛠️ Tecnologias Utilizadas

Node.js

TypeScript

Express

Prisma ORM

PostgreSQL

Docker (ambiente local)

JWT

Bcrypt

Insomnia (testes de API)

Beekeeper Studio (gestão do banco)

PNPM (gerenciador de pacotes)

⚙️ Como executar o projeto localmente
🔧 Pré-requisitos

Node.js

PNPM

Docker

PostgreSQL

📥 Clonar o repositório
git clone https://github.com/SEU_USUARIO/verdeconta-backend.git
cd verdeconta-backend


📦 Instalar dependências
pnpm install

🔑 Configurar variáveis de ambiente

Crie um ficheiro .env baseado no .env.example:

JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
