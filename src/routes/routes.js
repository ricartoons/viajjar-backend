const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({"message":"Home"});
});

router.get('/login', (req, res, next) => {
  res.json({"message":"Login"});
});

router.get('/viagens', (req, res, next) => {
  res.json({"message":"Página de viagens"});
});

router.get('/perfil-organizador',(req, res, next) => {
  res.json({"message":"Página do perfil do organizador"});
});

router.get('/perfil-usuario',(req, res, next) => {
  res.json({"message":"Página do meu perfil"});
});

router.get('/minhas-viagens',(req, res, next) => {
  res.json({"message":"Página das minhas viagens"});
});

module.exports = router;