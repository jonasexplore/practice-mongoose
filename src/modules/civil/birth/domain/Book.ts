import { Document } from 'mongoose';

export class Book extends Document {
  number: string;
  type: string;
}
