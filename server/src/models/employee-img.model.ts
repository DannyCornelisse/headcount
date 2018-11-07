import { Schema } from 'mongoose';

export const employeeImageSchema = new Schema({
  type: String,
  data: Buffer
});
