import { Schema } from 'mongoose';

export const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  onProject: Boolean,
  company: {
    _id: Boolean,
    name: {
      type: String,
      required: true
    }
  }
});
