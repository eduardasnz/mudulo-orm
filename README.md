# Fullstack ORM Template

Um template simples para aplicações Fullstack utilizando **Express**, **Prisma** e **TypeScript**.

## 📦 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [POSTGRESQL]

## 📂 Estrutura do Projeto

```
📁 fullstack-orm-template
├── 📁 node_modules
├── 📁 prisma
│    ├── 📁 migrations
│    │     └── schema.prisma
│    └── seed.ts
├── 📁 src
│    ├── 📁 controllers
│    │     ├── questions-controller.ts
│    │     └── users-controller.ts
│    ├── 📁 routes
│    │     ├── index.ts
│    │     ├── questions-routes.ts
│    │     ├── users-routes.ts
│    │     └── prisma.ts
│    └── server.ts
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── routes-insomnia.json
└── tsconfig.json
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
- Node.js instalado (versão 18 ou superior)
- Banco de dados compatível com Prisma configurado

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/fullstack-orm-template.git
cd fullstack-orm-template
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure o Prisma
1. Crie um arquivo `.env` na raiz do projeto e adicione a variável de conexão ao banco de dados:

```
DATABASE_URL="sua-string-de-conexao"
```

2. Execute a migração do banco de dados:
```bash
npx prisma migrate dev
```

### 4. Execute o seed (opcional)
```bash
npm run prisma:seed
```

### 5. Inicie o servidor em modo de desenvolvimento
```bash
npm run dev
```

O servidor estará rodando em: `http://localhost:3000`

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor em modo de desenvolvimento (com hot reload)
- `npm run prisma:seed`: Executa o script de seed para popular o banco de dados

## 📘 Notas
- Certifique-se de ajustar as configurações do banco de dados no arquivo `.env`
- Utilize `tsx` para rodar scripts TypeScript sem a necessidade de compilar manualmente

## 📄 Licença

Este projeto foi criado para fins educativos. **Rocketseat**.

---

Feito com 💜. 🚀
