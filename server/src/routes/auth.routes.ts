import { Request, Response, Application } from 'express';
import { AuthController } from './../controllers/auth.controller';
import { verifyToken } from './../middleware/verify-token.middleware';

export class AuthRoutes {
  public authController: AuthController = new AuthController();

  public routes(app: Application): void {
    app.route('/api/login')
      .post(this.authController.login);

    app.route('/api/me')
      .get(verifyToken, this.authController.getMe);
  }
}
