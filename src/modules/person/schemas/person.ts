import * as mongoose from 'mongoose';

export const personSchema = new mongoose.Schema(
  {
    name: String,
    birth_date: Date,
    document: String,
    email: String,
    phone: String,
    address: String,
    number: String,
    district: String,
    city: String,
    state: String,
    country: String,
    zip_code: String,
    complement: String,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
