import { Module } from '@nestjs/common';
import { BirthService } from './birth.service';
import { BirthController } from './birth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { birthSchema } from './schemas/birth';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'birth', schema: birthSchema }]),
  ],
  controllers: [BirthController],
  providers: [BirthService],
})
export class BirthModule {}
