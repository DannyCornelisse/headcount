export interface Company {
  _id?: string; // Only available from db
  name: String;
  address: {
    streetName: String,
    city: String,
    number: Number,
    annex: String,
    postalCode: String
  };
  customerNumber: Number;
}
