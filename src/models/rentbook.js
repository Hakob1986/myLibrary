import mongoose from "mongoose";

const { Schema } = mongoose;

const rentbook = new Schema(
  {
    user_id: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    
    book_id: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    
    rated: {
        type: Number,
      },
  },
  
  { timestamps: true },
  {
    toJSON: { virtuals: true }
   }
   );

rentbook.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'book_id'
})

export const RentBook = mongoose.model("RentBook", rentbook);