import * as mongoose from 'mongoose';
import { employeeSchema } from '../models/employee.model';
import { Request, Response } from 'express';

const Employee = mongoose.model('Employee', employeeSchema);

export class EmployeeController {

  public addNewEmployee(req: Request, res: Response) {
    const newEmployee = new Employee(req.body);

    newEmployee.save((err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public getEmployees(req: Request, res: Response) {
    Employee.find({}, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public getEmployeeWithID(req: Request, res: Response) {
    Employee.findById(req.params.employeeId, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public updateEmployee(req: Request, res: Response) {
    Employee.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, employee) => {
      console.log(req.params.employeeId);
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public deleteEmployee(req: Request, res: Response) {
    Employee.deleteOne({ _id: req.params.employeeId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted employee!' });
    });
  }
}
