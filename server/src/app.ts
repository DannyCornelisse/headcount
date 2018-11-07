import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

// Routes
import { Routes } from './routes/employee.routes';
import { AuthRoutes } from './routes/auth.routes';
import { UserRoutes } from './routes/user.routes';

class App {
  public app: express.Application;
  // public mongoUrl = 'mongodb://localhost:27017/test';
  public mongoUrl = 'mongodb://DannyC:testy123@ds155823.mlab.com:55823/testy';
  public employeeRoutes: Routes = new Routes();
  public authRoutes: AuthRoutes = new AuthRoutes();
  public userRoutes: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.employeeRoutes.routes(this.app);
    this.authRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise; // mongoose.Promise = ... is not allowed by TS
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, (err: MongoError) => {
      if (err) {
        return console.log(err);
      }
    });
  }
}

export default new App().app;
