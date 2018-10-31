export interface Employee {
  _id?: string; // Only available from db
  name: string;
  onProject: Boolean;
  company: {
    _id?: Boolean;
    name: string;
  };
}
