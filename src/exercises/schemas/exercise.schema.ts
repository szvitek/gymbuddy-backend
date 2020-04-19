import * as mongoose from 'mongoose';

export const ExerciseSchema = new mongoose.Schema({
  name: { type: String, required: true},
  description: String,
  group: {
    type: String,
    required: true,
    enum: ['abs', 'back', 'biceps', 'chest', 'legs', 'shoulders', 'triceps']
    // todo: user
  }
})