import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose';

import user from './src/models/user'
import book from './src/models/book'
import author from './src/models/author'
import genre from './src/models/genre'
import rentbook from './src/models/rentbook'

import userRouter from "./src/moduls/User/router"
import bookRouter from "./src/moduls/Book/router"
import authorRouter from "./src/moduls/Author/router"
import genreRouter from "./src/moduls/Genre/router"
import rentbookRoute from './src/moduls/RentBook/router'


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/LibraryMongo',(error)=>{
   if(!error){
    console.log("Success");
   }else{
    console.log("Error connection to database");
   }
})

app.use("/user/", userRouter);
app.use("/book/", bookRouter);
app.use('/author/', authorRouter);
app.use('/genre/', genreRouter);
app.use('/rentbook',rentbookRoute)

// app.use(function (req, res) {
//   createError(404).then(res.send("Not found"));
// });


app.listen(3013, () => console.log("server creat"));
