# Sistema Escolar

Projeto acadêmico desenvolvido para a disciplina de Frontend 2 da Pós-Graduação em Desenvolvimento Full Stack - IF Sudeste MG.

Aplicação web para gerenciamento escolar com cadastro de alunos e livros, construída com React e json-server como API REST.

## Tecnologias

- React 19
- React Router DOM 7
- JSON Server (API REST fake)
- React Icons
- gh-pages (deploy)

## Estrutura do Projeto

```
├── public/                  # Arquivos estáticos
├── server/                  # Backend independente (json-server para deploy)
│   ├── db.json              # Base de dados
│   └── package.json         # Dependências do backend
├── src/
│   ├── components/          # Componentes reutilizáveis (Header, Footer, etc.)
│   │   └── dash/            # Componentes do Dashboard (Card, Sidebar, etc.)
│   ├── context/             # Context API (ThemeContext - dark/light mode)
│   ├── pages/               # Páginas da aplicação
│   └── App.js               # Rotas e layout principal
├── db.json                  # Base de dados (desenvolvimento local)
├── .env                     # Variáveis de ambiente (desenvolvimento)
├── .env.production          # Variáveis de ambiente (produção)
└── package.json
```

## Páginas

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Página inicial |
| `/Alunos` | Alunos | Lista de alunos (dados da API) |
| `/Biblioteca` | Biblioteca | Lista de livros (dados da API) |
| `/Dashboard` | Dashboard | Painel com estatísticas |
| `/cadastarAlunos` | Cadastrar Alunos | Formulário de cadastro de alunos |
| `/cadastrarLivros` | Cadastrar Livros | Formulário de cadastro de livros |

## Execução Local (Desenvolvimento)

### Pré-requisitos

- Node.js v24.10.0 (veja `.nvmrc`)
- npm

### Instalação

```bash
npm install
```

### Executar frontend e backend simultaneamente

```bash
npm run dev
```

Isso inicia:
- **Frontend** em `http://localhost:3000`
- **Backend (json-server)** em `http://localhost:5001`

### Executar separadamente

```bash
# Apenas o frontend
npm start

# Apenas o backend
npm run backend
```

### Testes

```bash
npm test
```

### Scripts disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `npm run dev` | `concurrently "npm start" "npm run backend"` | Inicia frontend + backend |
| `npm start` | `react-scripts start` | Inicia apenas o frontend |
| `npm run backend` | `json-server --watch db.json --port 5001` | Inicia apenas o backend |
| `npm test` | `react-scripts test` | Executa os testes |
| `npm run build` | `react-scripts build` | Gera o build de produção |
| `npm run deploy` | `gh-pages -d build` | Publica no GitHub Pages |

## Deploy em Produção

A aplicação usa dois serviços separados:

- **Frontend:** GitHub Pages
- **Backend:** Render (free tier)

### 1. Deploy do Backend no Render

1. Acesse [render.com](https://render.com) e faça login com GitHub
2. Clique em **"New +"** > **"Web Service"**
3. Conecte o repositório GitHub
4. Configure:
   - **Name:** `sistema-escolar-api`
   - **Root Directory:** `server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** `Free`
5. Clique em **"Create Web Service"**
6. Aguarde o deploy (2-3 minutos)
7. Copie a URL gerada (ex: `https://sistema-escolar-api.onrender.com`)

### 2. Configurar a URL do Backend

Edite o arquivo `.env.production` na raiz do projeto com a URL do Render:

```
REACT_APP_API_URL=https://sistema-escolar-api.onrender.com
```

### 3. Deploy do Frontend no GitHub Pages

```bash
npm run deploy
```

Esse comando executa o build e publica na branch `gh-pages`.

### 4. Acessar a aplicação

- **Frontend:** https://jrmessias.github.io/posdevfullstack-frontend2-projeto1
- **Backend:** URL do Render (configurada no passo 2)

### Observações sobre o Render (Free Tier)

- O serviço adormece após 15 minutos de inatividade
- A primeira requisição após adormecer pode demorar 30-50 segundos (cold start)
- Dados escritos via API (POST/PUT/DELETE) são perdidos após cada redeploy (sistema de arquivos efêmero)

## Variáveis de Ambiente

| Variável | Arquivo | Valor |
|----------|---------|-------|
| `REACT_APP_API_URL` | `.env` | `http://localhost:5001` (desenvolvimento) |
| `REACT_APP_API_URL` | `.env.production` | URL do Render (produção) |

O CRA (Create React App) carrega automaticamente o `.env` em desenvolvimento (`npm start`) e o `.env.production` no build (`npm run build`).
