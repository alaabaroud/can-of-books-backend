'use strict'

const mongoose = require('mongoose'); // mongoose package used to create the schema and generate the model

const BookSchema= require('./Schema')
//compile the schema into a model
// const myBookModel = mongoose.model('Book', BookSchema);


const userSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    books: [BookSchema] // a field that is an array of cat Schemas 
  });

  const userModel = mongoose.model('users', userSchema);
  mongoose.set('useCreateIndex', true);



// //Seeding a data
// function seedBookCollection() {
//   const book1 = new myBookModel({ 
//     title: `Attack on Titan 1`,
//     description: ` humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind`,
//     status: `action`,
//     email: ``,
//   });

//   const book2 = new myBookModel({ 
//     title: `My Hero Academia`,
//     description:`Midoriya inherits the superpower of the world's greatest hero, but greatness won't come easy.`,
//     status: `comidy`,
//     email: ``,
//   });

//   const book3 = new myBookModel({ 
//     title: `The Promised Neverland`,
//     description: `The children of the Grace Field House orphanage must escape a macabre fate before it's too late.`,
//     status: `drama & horror`,
//     email: ``,
//   });
//   //save the data that we created 
//   book1.save();
//   book2.save();
//   book3.save();
// }

function seedUserCollection() {
    const Doaa = new userModel({
        email: 'alaabaroud783@gmail.com',
        books : [
            {
                title: `Attack on Titan 1`,
                description: ` humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind`,
                status: `action`,
                image : 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
            },
            {
                title: `My Hero Academia 1`,
                description:`Midoriya inherits the superpower of the world's greatest hero, but greatness won't come easy.`,
                status: `comidy`,
                image : 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
            },
            {
                title: `The Promised Neverland 1`,
                description: `The children of the Grace Field House orphanage must escape a macabre fate before it's too late.`,
                status: `drama & horror`,
                image : 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'
            }
        ]
    })

    const Khair = new userModel({
        email: 'obadanaser135@gmail.com',
        books : [
            {
                title: `Attack on Titan 2`,
                description: ` humanity has been devastated by the bizarre, giant humanoids known as the Titans. Little is known about where they came from or why they are bent on consuming mankind`,
                status: `action`,
                image : 'https://i.pinimg.com/originals/e4/2e/66/e42e66591377e4719b9ba4fc44123ddd.jpg',
               
            },
            {
                title: `My Hero Academia 2`,
                description:`Midoriya inherits the superpower of the world's greatest hero, but greatness won't come easy.`,
                status: `comidy`,
                image : 'https://m.media-amazon.com/images/M/MV5BNmQzYmE2MGEtZjk4YS00YmVjLWEwZWMtODRkMjc4MTM5N2I3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg'

            },
            {
                title: `The Promised Neverland 2`,
                description: `The children of the Grace Field House orphanage must escape a macabre fate before it's too late.`,
                status: `drama & horror`,
                image : 'https://m.media-amazon.com/images/M/MV5BMTYwYjYyZDgtMTQ3My00YTI4LThmZTUtZmU1MjllOWRlOTdhXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg'

            }
        ]
    })

    Doaa.save();
    Khair.save();
}

// seedUserCollection();

 module.exports =userModel;