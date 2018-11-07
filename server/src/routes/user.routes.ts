import { Request, Response, Application } from 'express';
import { UserController } from './../controllers/user.controller';
import { verifyToken } from './../middleware/verify-token.middleware';

export class UserRoutes {
  public userController: UserController = new UserController();

  public routes(app: Application): void {
    // Contact
    app.route('/api/users/register')
      .post(this.userController.registerUser);

    app.route('/api/users')
      .get(verifyToken, this.userController.getUsers);

    app.route('/api/users/:userId')
      .get(verifyToken, this.userController.getUser)
      .delete(verifyToken, this.userController.deleteUser)
      .put(verifyToken, this.userController.updateUser);
  }
}
