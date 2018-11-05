import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';

// Routes
import { Routes } from './routes/employee.routes';

class App {
  public app: express.Application;
  public employeeRoutes: Routes = new Routes();
  public mongoUrl: String = 'mongodb://localhost:27017/test';

  constructor() {
    this.app = express();
    this.config();
    this.employeeRoutes.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        return console.log(err);
      }
    });
  }
}

export default new App().app;
