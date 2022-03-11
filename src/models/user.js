import mongoose from "mongoose";

const { Schema } = mongoose;

const user = new Schema(
  {
    name: {
      type: String,
    
    },
    lastname: {
      type: String,
      
    },
    phone: {
      type: String,
      
    },
    email: {
      type: String,
    },
    city: {
      type: String,
      
    },
    
  },
  { timestamps: true },
  {
    toJSON: { virtuals: true }
   }
);

user.virtual('books', {
  ref: 'RentBook',
  localField: '_id',
  foreignField: 'book_id'
});

export const User = mongoose.model("User", user);
