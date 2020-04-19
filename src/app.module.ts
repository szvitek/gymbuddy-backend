import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExercisesModule } from './exercises/exercises.module';
import { db } from './config';

@Module({
  imports: [
    MongooseModule.forRoot(db, { useNewUrlParser: true, useUnifiedTopology: true }),
    ExercisesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
