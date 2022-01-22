import { Document } from 'mongoose';

export class Person extends Document {
  name: string;
  birth_date: Date;
  document: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
}
