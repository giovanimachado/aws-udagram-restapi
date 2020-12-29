require('dotenv').config(); // to make possible to use process.env

import express from 'express';
import { sequelize } from './sequelize';

import { IndexRouter } from './controllers/v0/index.router';

import bodyParser from 'body-parser';

import { V0MODELS } from './controllers/v0/model.index';

(async () => {

  await sequelize.addModels(V0MODELS); // this registers all of the models imported from V0Models.
  console.log("Models imported");
  await sequelize.sync(); // Make sure that database is in sync with expected models within sequelize.
  console.log("Model Synched"); 

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen

  app.use(bodyParser.json());

  //CORS Should be restricted
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
  });

  app.use('/api/v0/', IndexRouter) // Application will use IndexRouter when encounter the API V0 endpoint.

  // Root URI call
  app.get( "/", async ( req, res ) => {
    res.send( "/api/v0/" );
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
      //console.log(process.env.UDAGRAM_POSTGRES_USERNAME);
  } );

})();