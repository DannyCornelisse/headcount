import { Request, Response, Application } from 'express';
import { EmployeeController } from './../controllers/employee.controller';
import { verifyToken } from './../middleware/verify-token.middleware';

export class Routes {
  public employeeController: EmployeeController = new EmployeeController();

  public routes(app: Application): void {
    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(403).send({
          message: 'Forbidden'
        });
      });

    app.route('/api/employees')
      .get(verifyToken, this.employeeController.getEmployees)
      .post(verifyToken, this.employeeController.addNewEmployee);

    app.route('/api/employees/:employeeId')
      .get(verifyToken, this.employeeController.getEmployeeWithID)
      .put(verifyToken, this.employeeController.updateEmployee)
      .delete(verifyToken, this.employeeController.deleteEmployee);
  }
}
