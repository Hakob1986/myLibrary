import mongoose from "mongoose";

const { Schema } = mongoose;

const author = new Schema(
  {
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
  },
  { timestamps: true }
);
author.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'author_id'
})

author.set("toObject", { virtuals: true });
author.set("toJSON", { virtuals: true });

export const Author = mongoose.model("Author", author);
