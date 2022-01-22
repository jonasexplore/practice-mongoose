import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mongo:mongo@cluster0.pl5tm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    PersonsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
