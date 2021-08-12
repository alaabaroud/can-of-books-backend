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
   email: String,
  title: String,
  description:String,
  status:String,
  image: String,
  
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
        image: 'https://images-na.ssl-images-amazon.com/images/I/A1AtM0maYJL.jpg'
        
      },
      {
        title: ' In Search of Lost Time',
        description:'Swanns Way, the first part of A la recherche de temps perdu, Marcel Prousts seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.',
        status:'Read',
        image: 'https://images.penguinrandomhouse.com/cover/9780679645689'
        
      },
      {
        title: ' Don Quixote',
        description:'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper.',
        status:'Read',
        image: 'https://images-na.ssl-images-amazon.com/images/I/71qP+ddEG1L.jpg'
        
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
        image : 'https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2021/01/Attack-on-Titan-Season-4-Poster.jpg'
        
      },
      {
        title: 'Naruto',
        description:'is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. ',
        status:'Read',
        image : 'https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
        
      },
     
      {
        title: 'Death Note',
        description:'An intelligent high school student goes on a secret crusade to eliminate criminals from the world after discovering a notebook capable of killing anyone whose name is written into it.',
        status:'Read',
        image : 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/07/death-note-episode-featured.jpg'
      },
    ]
  })
  user1.save();
  user2.save();


}
// seedBooksCollection();

server.get('/',homeRoute);
server.get('/book',bookHandler);
server.post ('/addbooks', addBooksHandler);

function addBooksHandler (req,res){
const {email, title, description, status} = req.body;
userModel.find({email:email},(err,data) => {
if(err){
  res.send('sorry, failed with errors')
}else {
  data[0].book.push ({
    title : title,
    description :description,
    status: status,
  })
  data[0].sava();
  res.send(data[0].book);

}
} )
}

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

    console.log(data[0].book);

    res.send(data[0].book);
  }
 })


}


 

 server.listen(PORT, () => console.log(`listening on ${PORT}`));



 


