# TCC-FEIRA-SYSTEM-

-----

📌 SOBRE O PROJETO
Nome: Feira System

Tipo: Sistema Web de Gestão

Área: Tecnologia da Informação

O sistema será voltado para feirantes, ambulantes e pequenos comerciantes, com foco em gestão interna.

⚠️ REGRAS IMPORTANTES:

- NÃO é e-commerce
- NÃO realiza vendas online
- NÃO possui cadastro de clientes
- É um sistema administrativo interno

🎯 OBJETIVO PRINCIPAL
Permitir controle completo de:
* Produtos
* Estoque
* Vendas
* Lucro
* Desperdícios
* Metas (vendas e lucro)
* Relatórios financeiros
* Indicadores de desempenho

📊 JUSTIFICATIVA
O sistema resolve problemas reais como:
- Controle manual ineficiente
- Perda de dados
- Erros de cálculo
- Falta de controle financeiro
- Dificuldade de tomada de decisão

🎯 OBJETIVOS
Geral:
Desenvolver um sistema web completo para gestão de feirantes.

Específicos:
* Levantamento de requisitos
* Interface intuitiva
* Autenticação segura
* CRUD de produtos
* Controle de estoque
* Registro de vendas
* Controle de desperdícios
* Dashboard gerencial
* Relatórios
* Segurança dos dados

🧱 STACK TECNOLÓGICA
Backend:
Node.js
Express
PostgreSQL
JWT
bcrypt

Frontend:
JavaScript
HTML
CSS

🗄️ MODELAGEM DO BANCO

Tabelas:

usuarios:
id
nome
email
senha_hash
nome_banca
moeda
meta_vendas
meta_lucro
modo_escuro
created_at

produtos:
id
usuario_id
nome
categoria
tipo_venda
preco_custo
preco_venda
quantidade
ativo
created_at

vendas
id
usuario_id
total
lucro_total
forma_pagamento
status
created_at

itens_venda
id
venda_id
produto_id
quantidade
preco_unitario
custo_unitario
subtotal
lucro_item

desperdicios
id
usuario_id
produto_id
quantidade
motivo
valor_perda
data_registro
created_at

⚙️ FUNCIONALIDADES
Autenticação:
* Cadastro
* Login
* JWT
* Hash com bcrypt
* Recuperação de senha
* Proteção de rotas

Produtos:
* CRUD completo
* Filtros e busca
* Controle de estoque

Estoque:
* Entrada e saída automática
* Alerta de estoque baixo

Vendas:
* Registro com múltiplos itens
* Cálculo automático
* Baixa no estoque
* Cancelamento com reversão

Desperdícios:
* Registro de perdas
* Cálculo de prejuízo
* Histórico

Dashboard:
* gráficos 
* Vendas (dia/mês)
* Lucro
* Metas
* Produtos mais vendidos

Relatórios:
* PDF e Word
* Receita
* Custos
* Lucro
* Relatórios por período

📏 REGRAS DE NEGÓCIO
* Toda venda deve atualizar estoque e lucro
* Cancelamento deve restaurar estoque
* Desperdício reduz estoque e gera prejuízo
* Todos os dados são por usuário (multi-tenant)
* Usuário só acessa seus dados

🏗️ ARQUITETURA
Utilizar:
 * Clean Architecture
 * MVC
 * SOLID
 * Clean Code
 * Repository Pattern
 * Service Layer

📁 ESTRUTURA DO BACKEND
Pasta do backend:
src
routes
controllers
services
repositories
middlewares
models
database
config
utils
types


🪜 ORDEM DE DESENVOLVIMENTO
 - Levantamento de requisitos
 - Arquitetura
 - Estrutura de pastas
 - Banco de dados
 - Node.js setup
 - TypeScript
 - Express
 - Autenticação
 - CRUD produtos
 - Estoque
 - Vendas
 - Desperdícios
 - Dashboard
 - Relatórios
 - Testes
 - Deploy



15. Testes
16. Deploy
