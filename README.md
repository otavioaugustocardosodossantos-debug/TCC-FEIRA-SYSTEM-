# Feira System

<p align="center">
  <strong>Feira System — Sistema Web de Gestão para Feirantes</strong>
</p>

<p align="center">
  Sistema web desenvolvido para auxiliar feirantes, ambulantes, produtores locais e pequenos comerciantes no controle das principais atividades administrativas de uma banca ou pequeno comércio.
</p>

---

## 📌 Sobre o projeto

O **Feira System** é um sistema web de gestão voltado para o controle interno de pequenos comerciantes, especialmente feirantes.

A proposta é substituir controles manuais, como anotações em cadernos e cálculos feitos de forma manual, por uma solução digital centralizada para acompanhar:

- produtos;
- estoque;
- vendas;
- lucro;
- desperdícios;
- metas;
- indicadores;
- relatórios;
- dados do perfil do usuário.

> **Importante:** o Feira System **não é um e-commerce**. O sistema não realiza vendas online para consumidores e não possui módulo de cadastro de clientes. Seu objetivo é oferecer ferramentas administrativas para o próprio comerciante.

---

## 🎯 Objetivo

Desenvolver uma plataforma web que facilite a organização e o acompanhamento da gestão de uma banca ou pequeno comércio, permitindo que o usuário tenha uma visão mais clara de seus produtos, estoque, vendas, perdas, resultados financeiros e metas.

### Principais objetivos

- Centralizar informações da atividade comercial.
- Reduzir erros de cálculos e registros manuais.
- Facilitar o controle de estoque.
- Registrar e acompanhar vendas.
- Calcular receitas e lucros.
- Registrar desperdícios e estimar perdas financeiras.
- Acompanhar metas de receita e lucro.
- Disponibilizar relatórios e indicadores.
- Melhorar a acessibilidade e a experiência de utilização.

---

## ✨ Principais funcionalidades

### 🔐 Autenticação

O sistema possui recursos para gerenciamento de acesso:

- Cadastro de usuário.
- Login com e-mail e senha.
- Login com Google.
- Autenticação utilizando JWT.
- Recuperação de senha por e-mail.
- Redefinição de senha.
- Proteção de rotas autenticadas.
- Controle de tentativas de autenticação.
- Perfil do usuário.

### 📦 Produtos

Permite administrar os produtos comercializados:

- Cadastro de produtos.
- Consulta de produtos.
- Atualização de produtos.
- Exclusão lógica de produtos.
- Categoria.
- Tipo de venda.
- Preço de custo.
- Preço de venda.
- Quantidade disponível.
- Estoque mínimo.
- Identificação de produtos com estoque baixo.

Os tipos de venda suportados pelo banco são:

- Unidade.
- Kg.
- Maço.
- Caixa.

### 🧾 Vendas

O módulo de vendas permite:

- Registrar vendas.
- Adicionar múltiplos itens em uma venda.
- Calcular o total.
- Calcular o lucro.
- Registrar forma de pagamento.
- Atualizar o estoque automaticamente.
- Consultar vendas.
- Consultar uma venda específica.
- Cancelar uma venda.
- Reverter o estoque quando uma venda é cancelada.

Formas de pagamento suportadas:

- Dinheiro.
- Pix.
- Cartão de crédito.
- Cartão de débito.

### 📉 Desperdícios

O módulo permite registrar perdas de produtos:

- Registrar desperdício.
- Informar quantidade perdida.
- Informar motivo.
- Calcular o valor da perda com base no custo do produto.
- Consultar histórico de desperdícios.
- Excluir registros de desperdício.
- Exportar desperdícios em PDF.
- Exportar desperdícios em Word.

### 🎯 Metas

O sistema possui gerenciamento de metas por mês:

- Definir meta de receita.
- Definir meta de lucro.
- Consultar metas.
- Acompanhar progresso.
- Atualizar uma meta existente do mesmo usuário, ano e mês.

O banco utiliza uma restrição `UNIQUE (usuario_id, ano, mes)` para garantir uma meta por usuário em cada período.

### 📊 Dashboard e indicadores

O dashboard reúne informações importantes para acompanhamento do negócio, incluindo dados relacionados a:

- vendas;
- receita;
- lucro;
- desperdícios;
- estoque;
- produtos;
- metas;
- indicadores de desempenho.

O frontend utiliza gráficos para facilitar a visualização das informações.

### 📄 Relatórios

O sistema disponibiliza informações para análise de:

- resumo financeiro;
- dados do dia;
- gráficos;
- indicadores/KPIs;
- relatórios gerais.

O relatório geral pode ser convertido em PDF no frontend utilizando os dados fornecidos pela API.

### ♿ Central de Acessibilidade

O Feira System possui uma Central de Acessibilidade integrada à aplicação.

Recursos disponíveis:

- Controle do tamanho da fonte.
- Espaçamento entre linhas.
- Espaçamento entre letras.
- Espaçamento entre palavras.
- Modo escuro.
- Redução de animações.
- Destaque de foco.
- Modo de leitura.
- Posicionamento do botão da Central de Acessibilidade.
- Preferências persistidas no navegador.

Também foram aplicadas práticas relacionadas à acessibilidade, como:

- navegação por teclado;
- `focus-visible`;
- `aria-label`;
- `aria-describedby`;
- `aria-invalid`;
- `aria-required`;
- `aria-live`;
- `role="alert"`;
- `role="status"`;
- skip link;
- tabelas acessíveis;
- alternativas textuais para gráficos;
- foco controlado em modais.

---

# 🏗️ Arquitetura

O projeto é dividido em três partes principais:

```text
Feira System
│
├── frontend/
│   └── Interface e experiência do usuário
│
├── backend/
│   └── API, regras de negócio e autenticação
│
└── database/
    └── Estrutura e scripts do PostgreSQL
```

### Fluxo da aplicação

```text
Usuário
   │
   ▼
Frontend React + Vite
   │
   │ HTTP / JSON
   ▼
API REST
   │
   ▼
Node.js + Express
   │
   ├── Controllers
   ├── Services
   ├── Middleware
   └── Validações
   │
   ▼
PostgreSQL
```

---

# 🛠️ Tecnologias utilizadas

## Frontend

| Tecnologia | Utilização |
|---|---|
| React 18 | Construção da interface |
| Vite 5 | Desenvolvimento e build |
| React Router 6 | Navegação e proteção de rotas |
| Axios | Comunicação com a API |
| Chart.js | Gráficos |
| react-chartjs-2 | Integração dos gráficos com React |
| jsPDF | Geração de PDF no cliente |
| jspdf-autotable | Tabelas em PDF |
| lucide-react | Ícones da interface |
| CSS | Estilização e acessibilidade |

## Backend

| Tecnologia | Utilização |
|---|---|
| Node.js | Ambiente de execução |
| Express 5 | Servidor e API REST |
| PostgreSQL | Banco de dados |
| pg | Conexão com PostgreSQL |
| JWT | Autenticação por token |
| bcryptjs | Hash de senhas |
| Zod | Validação dos dados |
| CORS | Controle de origens |
| Nodemailer | Recuperação de senha por e-mail |
| Google Auth Library | Autenticação com Google |
| PDFKit | Geração de PDF |
| docx | Geração de documentos Word |
| express-rate-limit | Limitação de tentativas |
| Jest | Testes automatizados |
| Supertest | Testes HTTP da API |

## Ferramentas de desenvolvimento

- Visual Studio Code
- PostgreSQL
- pgAdmin 4
- Git
- GitHub
- Thunder Client ou ferramenta equivalente para testes da API

---

# 📁 Estrutura do projeto

```text
Feira System/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   ├── tests/
│   ├── utils/
│   ├── app.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── database/
│   ├── schema.sql
│   ├── migracao-google.sql
│   └── migracao-perfil-foto.sql
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── accessibility/
│   │   │   ├── auth/
│   │   │   ├── charts/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── styles/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🗄️ Banco de dados

O Feira System utiliza **PostgreSQL**.

O arquivo principal do banco está localizado em:

```text
database/schema.sql
```

### Principais tabelas

```text
usuarios
produtos
vendas
itens_venda
desperdicios
metas
password_reset_tokens
```

### Relacionamentos principais

```text
usuarios
   │
   ├── produtos
   │      │
   │      ├── itens_venda
   │      └── desperdicios
   │
   ├── vendas
   │      └── itens_venda
   │
   ├── desperdicios
   │
   ├── metas
   │
   └── password_reset_tokens
```

### Regras importantes do banco

- O e-mail do usuário é único.
- Produtos pertencem a um usuário.
- Vendas pertencem a um usuário.
- Itens de venda pertencem a uma venda e a um produto.
- Produtos possuem exclusão lógica por meio do campo `ativo`.
- Produtos já utilizados em vendas não devem ser apagados fisicamente.
- Desperdícios ficam associados ao produto e ao usuário.
- Metas são únicas por usuário, ano e mês.
- Quantidades podem utilizar valores fracionários, permitindo produtos vendidos por peso.

---

# 🔌 API

A API utiliza o prefixo:

```text
/api
```

Servidor padrão:

```text
http://localhost:3000
```

## Autenticação

```http
POST /api/auth/registro
POST /api/auth/login
POST /api/auth/google
POST /api/auth/esqueci-senha
POST /api/auth/redefinir-senha

GET  /api/auth/perfil
PUT  /api/auth/perfil
```

## Produtos

```http
GET    /api/produtos
GET    /api/produtos/:id
GET    /api/produtos/estoque-baixo
POST   /api/produtos
PUT    /api/produtos/:id
DELETE /api/produtos/:id
```

## Vendas

```http
GET   /api/vendas
GET   /api/vendas/:id
POST  /api/vendas
PATCH /api/vendas/:id/cancelar
```

## Desperdícios

```http
GET    /api/desperdicios
POST   /api/desperdicios
DELETE /api/desperdicios/:id

GET /api/desperdicios/exportar/pdf
GET /api/desperdicios/exportar/word
```

## Relatórios

```http
GET /api/relatorios/resumo
GET /api/relatorios/hoje
GET /api/relatorios/graficos
GET /api/relatorios/pdf
GET /api/relatorios/kpis
```

## Metas

```http
GET    /api/metas
GET    /api/metas/progresso
POST   /api/metas
DELETE /api/metas/:id
```

---

# 🔐 Segurança

O projeto possui mecanismos para proteger os dados e as rotas:

- JWT para autenticação.
- Senhas armazenadas utilizando hash com bcryptjs.
- Middleware de autenticação.
- Validação de dados com Zod.
- Controle de CORS.
- Limitação de tentativas de autenticação.
- Tokens de recuperação de senha armazenados em formato hash.
- Rotas administrativas protegidas.
- Separação entre controllers, services e acesso ao banco.

### Variáveis sensíveis

Informações como:

- senha do PostgreSQL;
- segredo JWT;
- credenciais SMTP;
- Client ID do Google;

devem permanecer no arquivo `.env` e **não devem ser publicadas no GitHub**.

O projeto fornece arquivos:

```text
backend/.env.example
frontend/.env.example
```

para orientar a configuração.

---

# 🚀 Como executar o projeto

## Requisitos

Antes de iniciar, instale:

- Node.js 20 ou superior;
- npm;
- PostgreSQL;
- Git;
- um editor como Visual Studio Code.

---

## 1. Banco de dados

Crie o banco:

```sql
CREATE DATABASE feira_system;
```

Depois execute o schema:

```text
database/schema.sql
```

Também podem ser aplicadas as migrações disponíveis na pasta `database/`, quando necessárias.

---

## 2. Configurar o backend

Entre na pasta:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env`:

```bash
cp .env.example .env
```

No Windows, caso o comando acima não seja utilizado, copie manualmente:

```text
.env.example → .env
```

Configure principalmente:

```env
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha
DB_NAME=feira_system

JWT_SECRET=uma_chave_secreta_longa

FRONTEND_URL=http://localhost:5173

APP_TIMEZONE=America/Sao_Paulo
```

Para utilizar recuperação de senha por e-mail, configure também as variáveis SMTP.

---

## 3. Iniciar o backend

Modo desenvolvimento:

```bash
npm run dev
```

Ou modo normal:

```bash
npm start
```

A API ficará disponível em:

```text
http://localhost:3000
```

A rota inicial pode ser utilizada para verificar se a API está funcionando:

```http
GET /
```

Resposta esperada:

```json
{
  "mensagem": "Feira System API rodando!",
  "versao": "2.0",
  "status": "online"
}
```

---

## 4. Configurar o frontend

Entre na pasta:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Crie o `.env` a partir do exemplo e configure:

```env
VITE_API_URL=http://localhost:3000/api
```

Caso utilize login com Google, configure também:

```env
VITE_GOOGLE_CLIENT_ID=seu-client-id.apps.googleusercontent.com
```

---

## 5. Iniciar o frontend

Execute:

```bash
npm run dev
```

O Vite disponibilizará o frontend, normalmente, em:

```text
http://localhost:5173
```

---

# 🧪 Testes

O backend possui testes automatizados utilizando:

- Jest;
- Supertest.

Para executar:

```bash
cd backend
npm test
```

Os testes existentes cobrem funcionalidades relacionadas a:

- autenticação;
- produtos;
- vendas;
- desperdícios.

---

# 📊 Build de produção

Para gerar a versão de produção do frontend:

```bash
cd frontend
npm run build
```

Para visualizar o build:

```bash
npm run preview
```

---

# ♿ Acessibilidade

A acessibilidade é uma parte importante do Feira System.

A interface foi estruturada buscando melhorar a utilização por diferentes perfis de usuários, incluindo pessoas que dependem de teclado, leitores de tela ou configurações visuais personalizadas.

Entre as práticas utilizadas estão:

- navegação por teclado;
- foco visível;
- labels associados aos campos;
- mensagens de erro acessíveis;
- atributos ARIA;
- skip link;
- modais com controle de foco;
- suporte a redução de animações;
- modo escuro;
- controle de tipografia;
- tabelas adaptadas;
- alternativas textuais para gráficos;
- áreas de status e alerta anunciadas por tecnologia assistiva;
- alvos de toque com tamanho adequado.

---

# 📱 Responsividade

A interface foi planejada para diferentes tamanhos de tela.

O projeto contempla adaptações para:

- smartphones;
- tablets;
- notebooks;
- desktops.

Entre os comportamentos implementados estão:

- menu lateral adaptável;
- formulários responsivos;
- tabelas adaptadas para telas menores;
- cards responsivos;
- reorganização dos elementos do dashboard.

---

# 📈 Regras de negócio importantes

### Estoque

O estoque é atualizado de acordo com operações realizadas no sistema.

Uma venda reduz a quantidade disponível do produto.

Quando uma venda é cancelada, o sistema realiza a reversão correspondente no estoque.

Desperdícios também representam perda de quantidade do produto.

### Lucro

O sistema trabalha com preço de custo e preço de venda.

O lucro dos itens é utilizado para calcular o lucro total das vendas e alimentar os indicadores e relatórios.

### Desperdício

O valor da perda é calculado utilizando o custo do produto e a quantidade registrada como desperdício.

### Metas

As metas são organizadas por:

```text
Usuário + Ano + Mês
```

A restrição:

```sql
UNIQUE (usuario_id, ano, mes)
```

permite atualizar uma meta existente utilizando `ON CONFLICT` no PostgreSQL.

---

# ⚠️ Limitações conhecidas

O projeto respeita os recursos disponibilizados pela API atual.

### Histórico detalhado de movimentações de estoque

A API não possui um endpoint específico para um histórico completo de entradas e saídas de estoque.

A tela de estoque trabalha principalmente com o saldo atual e indicadores relacionados ao estoque mínimo.

### Relatório geral em Word

A exportação em Word está disponível para **Desperdícios**.

O relatório geral possui geração de PDF no frontend a partir dos dados disponibilizados pela API.

### Perfil

A aplicação possui recursos de consulta e atualização de perfil conforme as rotas disponíveis no backend.

---

# 🔄 Comunicação Frontend ↔ Backend

O frontend utiliza uma camada de serviços para organizar as requisições.

```text
Página
  │
  ▼
Service
  │
  ▼
Axios
  │
  ▼
API REST
  │
  ▼
Controller
  │
  ▼
Service Backend
  │
  ▼
PostgreSQL
```

Essa separação facilita:

- manutenção;
- organização;
- reutilização;
- tratamento de erros;
- evolução da aplicação.

---

# 🧩 Organização do Backend

O backend utiliza uma arquitetura separada por responsabilidades:

```text
routes/
    ↓
controllers/
    ↓
services/
    ↓
database
```

### Routes

Define os endpoints disponíveis.

### Controllers

Recebem as requisições e retornam as respostas HTTP.

### Services

Concentram as regras de negócio.

### Middleware

Responsável por tarefas como:

- autenticação;
- validação;
- limitação de tentativas.

### Schemas

Define as regras de validação utilizando Zod.

### Utils

Concentra funcionalidades auxiliares, como:

- datas;
- envio de e-mail;
- exportação;
- logs;
- respostas.

---

# 🌱 Controle de versão

O projeto pode ser versionado utilizando Git.

Exemplo:

```bash
git init
git add .
git commit -m "feat: versão inicial do Feira System"
```

Para publicar em um repositório remoto:

```bash
git remote add origin URL_DO_REPOSITORIO
git branch -M main
git push -u origin main
```

> Nunca publique arquivos `.env` contendo senhas, tokens ou chaves privadas.

---

# 👥 Público-alvo

O Feira System foi pensado principalmente para:

- feirantes;
- vendedores de feira;
- produtores locais;
- ambulantes;
- pequenos comerciantes;
- pessoas que precisam organizar vendas e estoque de um pequeno negócio.

---

# 💡 Problema que o projeto busca solucionar

Pequenos comerciantes podem realizar parte de sua gestão utilizando métodos manuais, como cadernos, anotações e cálculos feitos individualmente.

Esse processo pode dificultar:

- acompanhamento do estoque;
- cálculo de lucro;
- identificação de perdas;
- acompanhamento das vendas;
- análise dos resultados;
- organização das informações.

O Feira System busca centralizar essas informações em uma única plataforma.

---

# 📌 Escopo

O sistema concentra-se na **gestão interna do comerciante**.

### Incluído

- Autenticação.
- Perfil.
- Produtos.
- Estoque.
- Vendas.
- Desperdícios.
- Metas.
- Dashboard.
- Indicadores.
- Relatórios.
- Acessibilidade.

### Não incluído

- E-commerce.
- Carrinho de compras para consumidores.
- Checkout público.
- Cadastro de clientes.
- Marketplace.
- Venda online para consumidores.

---

# 🗺️ Evolução do projeto

O Feira System pode continuar evoluindo com novas funcionalidades, desde que sejam compatíveis com a proposta de gestão interna.

Possíveis evoluções técnicas incluem:

- novos indicadores;
- melhorias de relatórios;
- histórico detalhado de estoque;
- melhorias de auditoria;
- novos recursos de acessibilidade;
- otimizações de desempenho;
- expansão dos testes automatizados.

---

# 📄 Licença

Este projeto foi desenvolvido como projeto acadêmico/TCC.

A utilização, distribuição ou modificação do código deve respeitar as regras definidas pelos autores e pela instituição responsável pelo projeto.

---

# 👨‍💻 Projeto

**Feira System**  
**Sistema Web de Gestão para Feirantes**

Projeto desenvolvido com foco em:

> **Organização, controle, acessibilidade e gestão para pequenos comerciantes.**

---

<p align="center">
  <strong>Feira System</strong><br>
  Sistema Web de Gestão para Feirantes
</p>
