


const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/Booksdb', {useNewUrlParser: true, useUnifiedTopology: true});

 const bookSchema = new mongoose.Schema({
  title: String,
  description:String,
  status:String,
  email:String
});

const myBookModel = mongoose.model('Books', bookSchema);



function seedBooksCollection(){

  const History=new myBookModel({
    title:'History',
    description:'Lsvsnovsnms',
     status:'true',
     email:'obadanaser135@gmail.com'


  })
  History.save();


}



module.exports=seedBooksCollection;