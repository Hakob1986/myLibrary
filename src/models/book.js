import mongoose from "mongoose";

const { Schema } = mongoose;

const book = new Schema(
  {
    name: {
      type: String,
    },
    genre_id: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
      },
    
    author_id: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author",
      },
    
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true }
   }
);

book.virtual('users', {
  ref: 'RentBook',
  localField: '_id',
  foreignField: 'user_id'
})


export const Book = mongoose.model("Book", book);
