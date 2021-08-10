'use strict';


require('dotenv').config();
const express = require('express');
 const cors = require('cors');
// const jwt = require('jsonwebtoken');
// const jwksClient = require('jwks-rsa');
 const mongoose = require('mongoose');

 const server = express();
 server.use(cors());

 const PORT = process.env.PORT || 3001;

 
// const Books=require('./Books');

// Books();
//  server.get('/test', (request, response) => {

//  })
 
//   // TODO: 
//   // STEP 1: get the jwt from the headers
//   // STEP 2. use the jsonwebtoken library to verify that it is a valid jwt
//   // jsonwebtoken dock - https://www.npmjs.com/package/jsonwebtoken
//   // STEP 3: to prove that everything is working correctly, send the opened jwt back to the front-end

// })



mongoose.connect('mongodb://localhost:27017/Booksdb', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);


 const bookSchema = new mongoose.Schema({
  title: String,
  description:String,
  status:String,
  
});






const userSchema = new mongoose.Schema({
  email: {type: String, unique: true},
  book : [bookSchema]
})
// const myBookModel = mongoose.model('Books', bookSchema);
const userModel = mongoose.model('user', userSchema);


function seedBooksCollection(){
  // try{

  const user1 =new userModel({
    email : "alaabaroud783@gmail.com",
    book :[
      {
        title: ' Ulysses',
        description:'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904. The title parallels and alludes to Odysseus',
        status:'on progress',
        
      },
      {
        title: ' In Search of Lost Time',
        description:'Swanns Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.',
        status:'Read',
        
      },
      {
        title: ' Don Quixote',
        description:'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper.',
        status:'Read',
        
      },
    ]
  })

  const user2 =new userModel({
    email : "obadanaser135@gmail.com",
    book :[
      {
        title: 'Attack on Titan',
        description:'is a Japanese dark fantasy anime television series adapted from the manga of the same name by Hajime Isayama that premiered on April 7, 2013. It has aired on NHK General TV in Japan,[d] and Aniplus Asia in various Asia-Pacific countries.',
        status:'Read',
        
      },
      {
        title: 'Naruto',
        description:'is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. ',
        status:'Read',
        
      },
     
      {
        title: 'Death Note',
        description:'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.',
        status:'Read',
        
      },
    ]
  })
  user1.save();
  user2.save();


}
// seedBooksCollection();

server.get('/',homeRoute);
server.get('/book',bookHandler);

function homeRoute(req,res){

  res.send('Home');
}

function bookHandler(req,res){
 let email=req.query.email;

 userModel.find({email:email},function(err,data){
  if(err){
    console.log(" sorry, failed with errors");
  }
  else{
    // console.log(data);
    res.send(data);
  }
 })


}


 

 server.listen(PORT, () => console.log(`listening on ${PORT}`));



