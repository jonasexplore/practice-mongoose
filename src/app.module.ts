import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PersonsModule } from '@modules/person/persons.module';
import { BirthModule } from '@modules/civil/birth/birth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
    }),
    PersonsModule,
    BirthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
