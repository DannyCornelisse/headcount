import { Schema } from 'mongoose';

export const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    streetName: String,
    number: Number,
    annex: String,
    postalCode: String
  },
  customerNumber: Number
});
