import * as mongoose from 'mongoose';

export const birthSchema = new mongoose.Schema(
  {
    type: String,
    order_number: String,
    born_person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'person',
    },
    date: Date,
    parents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'person',
      },
    ],
    book_record: {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'book',
      },
      sheet_number: String,
    },
    protocol: {
      date: Date,
      status: String,
      order_number: String,
      comment: String,
      charge: {
        type: String,
      },
      persons: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'person',
        },
      ],
    },
    court_record: Boolean,
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);
