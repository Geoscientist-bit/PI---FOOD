const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const axios = require('axios');
// traigo mis tablas
const {Recipe, Diet, typeDiet} = require('../db.js');
// traigo los operadores de sequelize
const {Op} = require('sequelize')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// TRAIGO LA API
const data = async () =>{
  const api = await axios.get('http://https://api.spoonacular.com/recipes/716429/information?apiKey=DB_APIKEY&includeNutrition=true')
  console.log('ESTOME DEVUELVE LA API', api.data.extendedIngredients)
  return api.data.extendedIngredients;
}

// endpoints
// GET https://api.spoonacular.com/recipes/complexSearch
// GET https://api.spoonacular.com/recipes/{id}/information

router.get('/types', async (req, res) =>{
  try{

  }catch(e){

  }
});

router.post('recipe', async (req,res) =>{
  try{

  }catch(e){

  }
})


module.exports = router;
