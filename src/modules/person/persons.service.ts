import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './domain/Person';

@Injectable()
export class PersonsService {
  constructor(
    @InjectModel('person')
    private readonly personModel: Model<Person>,
  ) {}

  async create(createPersonDto: Person) {
    const createdPerson = new this.personModel(createPersonDto);
    return createdPerson.save();
  }

  async findAll() {
    return this.personModel.find();
  }

  async findOne(id: string) {
    return this.personModel.findById(id);
  }

  async update(id: string, updatePersonDto: Person) {
    return this.personModel.updateOne({ _id: id }, updatePersonDto);
  }

  async remove(id: string) {
    return this.personModel.deleteOne({ _id: id });
  }
}
