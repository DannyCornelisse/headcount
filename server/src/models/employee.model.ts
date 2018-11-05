import { Schema } from 'mongoose';

// interface Employee {
//   _id?: string; // Only available from db
//   name: string;
//   onProject: Boolean;
//   company: {
//     _id?: Boolean;
//     name: string;
//   };
// }

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
