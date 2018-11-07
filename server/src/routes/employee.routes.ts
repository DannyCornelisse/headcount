import { Request, Response, Application } from 'express';
import { EmployeeController } from './../controllers/employee.controller';

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
      .get(this.employeeController.getEmployees)
      .post(this.employeeController.addNewEmployee);

    app.route('/api/employees/:employeeId')
      .get(this.employeeController.getEmployeeWithID)
      .put(this.employeeController.updateEmployee)
      .delete(this.employeeController.deleteEmployee);
  }
}
