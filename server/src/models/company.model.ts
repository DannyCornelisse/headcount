import { Schema } from 'mongoose';

export const companySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    streetName: String,
    city: String,
    number: Number,
    annex: String,
    postalCode: String
  },
  customerNumber: Number
});
