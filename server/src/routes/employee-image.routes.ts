import { Request, Response, Application } from 'express';
import { EmployeeImageController } from './../controllers/employee-img.controller';

export class EmployeeImageRoutes {
  public employeeController: EmployeeImageController = new EmployeeImageController();

  public routes(app: Application): void {

    // Contact
    app.route('/api/employee-images')
      // GET endpoint
      .get(this.employeeController.getEmployeeImages)
      .post(this.employeeController.addNewEmployeeImage);

    // Contact detail
    app.route('/api/employee-images/:employeeImageId')
      // get specific employee
      .get(this.employeeController.getEmployeeImageWithID)
      .put(this.employeeController.updateEmployeeImage)
      .delete(this.employeeController.deleteEmployeeImage);
  }
}
