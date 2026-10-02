/* ═══════════════════════════════════════════════════════════
   app.js — ⭐ NOVO (extraído de server.js)
   Monta o app Express (rotas, middlewares, CORS) mas NÃO chama
   app.listen(). Isso existe pra permitir testar a API com Supertest
   sem precisar abrir uma porta de rede de verdade — os testes fazem
   requisições direto contra este objeto `app` em memória.
   quem sobe o servidor de verdade é o server.js.
   ═══════════════════════════════════════════════════════════ */

require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app = express();

/* ⭐ CORREÇÃO: origin: '*' aceitava requisições de qualquer site.
   Agora usa a FRONTEND_URL do .env; em dev, também libera localhost
   em portas comuns de live-server para não travar o desenvolvimento. */
const origensPermitidas = [
  process.env.FRONTEND_URL,
  'http://localhost:8080',
  'http://127.0.0.1:8080',
  'http://localhost:5500',
  'http://127.0.0.1:5500',
  'http://localhost:5501',
  'http://127.0.0.1:5501',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    /* requisições sem origin (ex: curl, Postman, apps mobile) são liberadas */
   if (!origin || origensPermitidas.includes(origin)) return callback(null, true);
console.warn('⚠️  Origem bloqueada pelo CORS:', origin);
return callback(null, false);
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
/* ⭐ limite de 1 MB: a foto de perfil vai no corpo da requisição (o padrão é só 100 KB) */
app.use(express.json({ limit: '1mb' }));

/* Importa todas as rotas */
const rotasAuth         = require('./routes/auth');
const rotasProdutos     = require('./routes/produtos');
const rotasVendas       = require('./routes/vendas');
const rotasDesperdicios = require('./routes/desperdicios');
const rotasRelatorios   = require('./routes/relatorios');
const rotasMetas        = require('./routes/metas');

/* Registra as rotas */
app.use('/api/auth',         rotasAuth);
app.use('/api/produtos',     rotasProdutos);
app.use('/api/vendas',       rotasVendas);
app.use('/api/desperdicios', rotasDesperdicios);
app.use('/api/relatorios',   rotasRelatorios);
app.use('/api/metas',        rotasMetas);

/* Rota de teste */
app.get('/', (req, res) => {
  res.json({ mensagem: '✅ Feira System API rodando!', versao: '2.0', status: 'online' });
});

/* Middleware de erro global */
app.use((err, req, res, next) => {
  console.error('❌ Erro:', err.message);
  res.status(500).json({ erro: 'Erro interno do servidor' });
});

module.exports = app;
