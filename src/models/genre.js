import mongoose from "mongoose";

const { Schema } = mongoose;

const genre = new Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);
genre.virtual('books', {
  ref: 'Book',
  localField: '_id',
  foreignField: 'genre_id'
})
genre.set('toObject', { virtuals: true })
genre.set('toJSON', { virtuals: true })

export const Genre = mongoose.model("Genre", genre);
