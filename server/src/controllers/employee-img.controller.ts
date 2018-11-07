import * as mongoose from 'mongoose';
import { employeeImageSchema } from '../models/employee-img.model';
import { Request, Response } from 'express';
import * as fs from 'fs';
import * as multer from 'multer';

const EmployeeImage = mongoose.model('EmployeeImage', employeeImageSchema);

export class EmployeeImageController {
  private multer = multer({ dest: 'uploads/' });

  constructor() {
    console.log(this.multer.single);
  }

  public addNewEmployeeImage(req: any, res: Response) {
    console.log(req.files);
    debugger;
    fs.readFile(req.body.files.file.path, (err, data) => {
    })
    const newEmployee = new EmployeeImage(req.body);

    newEmployee.save((err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public getEmployeeImages(req: Request, res: Response) {
    EmployeeImage.find({}, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public getEmployeeImageWithID(req: Request, res: Response) {
    EmployeeImage.findById(req.params.employeeId, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public updateEmployeeImage(req: Request, res: Response) {
    EmployeeImage.findOneAndUpdate({ _id: req.params.employeeId }, req.body, { new: true }, (err, employee) => {
      console.log(req.params.employeeId);
      if (err) {
        res.send(err);
      }
      res.json(employee);
    });
  }

  public deleteEmployeeImage(req: Request, res: Response) {
    EmployeeImage.deleteOne({ _id: req.params.employeeId }, (err, employee) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted employee image!' });
    });
  }
}
