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

    // Contact
    app.route('/api/employees')
      // GET endpoint
      .get(this.employeeController.getEmployees)
      .post(this.employeeController.addNewEmployee);

    // Contact detail
    app.route('/api/employees/:employeeId')
      // get specific employee
      .get(this.employeeController.getEmployeeWithID)
      .put(this.employeeController.updateEmployee)
      .delete(this.employeeController.deleteEmployee);
  }
}
