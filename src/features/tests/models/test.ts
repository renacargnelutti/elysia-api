import mongoose, { Schema, InferSchemaType } from 'mongoose';

const testSchema = new Schema({
  name: { type: String, default: null },
});

export type Test = InferSchemaType<typeof testSchema>;
export const TestModel = mongoose.model('User', testSchema);
