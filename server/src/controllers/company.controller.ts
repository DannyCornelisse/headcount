import { model, Model, Document } from 'mongoose';
import { companySchema } from '../models/company.model';
import { Request, Response } from 'express';

const Company: Model<any> = model('Company', companySchema);

export class CompanyController {

  public addNewCompany(req: Request, res: Response) {
    const newCompany = new Company(req.body);

    newCompany.save((err, company: Document[]) => {
      if (err) {
        res.send(err);
      }
      res.json(company);
    });
  }

  public getCompanies(req: Request, res: Response) {
    Company.find({}, (err, company: Document[]) => {
      if (err) {
        res.send(err);
      }
      res.json(company);
    });
  }

  public getCompanyWithID(req: Request, res: Response) {
    Company.findById(req.params.companyId, (err, company: Document[]) => {
      if (err) {
        res.send(err);
      }
      res.json(company);
    });
  }

  public updateCompany(req: Request, res: Response) {
    Company.findOneAndUpdate(
      { _id: req.params.companyId },
      req.body,
      { new: true },
      (err, company: Document[]) => {
        console.log(req.params.companyId);
        if (err) {
          res.send(err);
        }
        res.json(company);
      });
  }

  public deleteCompany(req: Request, res: Response) {
    Company.deleteOne({ _id: req.params.companyId }, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted company!' });
    });
  }
}
