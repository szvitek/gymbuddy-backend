import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Exercise } from './interfaces/exercise.interface';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  constructor(
    @InjectModel('Exercise') private exerciseModel: Model<Exercise>,
  ) {}

  async create(exercise: CreateExerciseDto) {
    const createdExercise = new this.exerciseModel(exercise);
    return createdExercise.save();
  }

  async findAll() {
    return this.exerciseModel.find().exec();
  }

  async findOne(id: string) {
    return this.exerciseModel.findById(id);
  }

  async update(id: string, body: UpdateExerciseDto) {
    return this.exerciseModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
  }

  async deleteProduct(id: string) {
    return this.exerciseModel.findByIdAndDelete(id);
  }
}
