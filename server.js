'use strict';


require('dotenv').config();
const express = require('express');
 const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
// const mongoose = require('mongoose');

 const server = express();
 server.use(cors());

 const PORT = process.env.PORT || 3001;

 
const Books=require('./Books');

Books();
//  server.get('/test', (request, response) => {

//  })
 
//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// })

 server.listen(PORT, () => console.log(`listening on ${PORT}`));
