import { Request, Response, Application } from 'express';
import { CompanyController } from './../controllers/company.controller';
import { verifyToken } from './../middleware/verify-token.middleware';

export class CompanyRoutes {
  public companyController: CompanyController = new CompanyController();

  public routes(app: Application): void {
    app.route('/api/companies')
      .get(verifyToken, this.companyController.getCompanies)
      .post(verifyToken, this.companyController.addNewCompany);

    app.route('/api/companies/:companyId')
      .get(verifyToken, this.companyController.getCompanyWithID)
      .put(verifyToken, this.companyController.updateCompany)
      .delete(verifyToken, this.companyController.deleteCompany);
  }
}
