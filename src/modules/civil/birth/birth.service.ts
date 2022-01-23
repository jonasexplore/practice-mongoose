import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Birth } from './domain';

@Injectable()
export class BirthService {
  constructor(
    @InjectModel('birth')
    private readonly birthModel: Model<Birth>,
  ) {}

  create(createBirthDto: Birth) {
    const createdBirth = new this.birthModel(createBirthDto);
    return createdBirth.save();
  }

  findAll() {
    return this.birthModel.find().populate([
      {
        path: 'born_person',
        model: 'person',
      },
      {
        path: 'parents',
        model: 'person',
      },
      {
        path: 'protocol.persons',
        model: 'person',
      },
    ]);
  }

  findOne(id: string) {
    return this.birthModel.findById(id);
  }

  update(id: string, updateBirthDto: Birth) {
    return this.birthModel.updateOne({ _id: id }, updateBirthDto);
  }

  remove(id: string) {
    return this.birthModel.deleteOne({ _id: id });
  }
}
