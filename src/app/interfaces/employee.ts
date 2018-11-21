
type EmployeeType = 'Contract' | 'Trainee' | 'Intern' | 'None';
export const EmployeeTypeOptions: Array<EmployeeType> = ['Contract', 'Trainee', 'Intern', 'None'];

export interface Employee {
  _id?: string; // Only available from db
  name: string;
  onProject: Boolean;
  company: {
    _id?: Boolean;
    name: string;
  };
  type: EmployeeType;
}
