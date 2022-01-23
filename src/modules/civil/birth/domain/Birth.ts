import { Document } from 'mongoose';

import { Person } from '@modules/person/domain/Person';
import { Book } from '.';

export class Birth extends Document {
  type: string;
  order_number: string;
  born_person: Person;
  date: Date;
  parents: Person[];
  book_record: {
    book: Book;
    sheet_number: string;
  };
  protocol: {
    date: Date;
    status: string;
    order_number: string;
    comment: string;
    charge: {
      type: string;
    };
    persons: Person[];
  };
  court_record: boolean;
}
