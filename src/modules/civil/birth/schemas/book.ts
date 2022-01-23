import * as mongoose from 'mongoose';

export const bookSchema = new mongoose.Schema({
  number: String,
  type: String,
});
