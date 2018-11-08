import { model, Model } from 'mongoose';
import { userSchema } from '../models/user.model';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from './../config'; // this is very unsafe, use env variables instead

const User: Model<any> = model('User', userSchema);

interface LoginRequest extends Request {
  body: {
    name: string
    email: string,
    password: string
  };
}

export class AuthController {

  public registerUser(req: Request, res: Response) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 8);

    const newUser = new User({
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    });

    newUser.save((err, user) => {
      if (err) {
        return res.status(500).send('There was a problem registering the user.');
      }
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      res.status(200).send({ auth: true, token: token });
    });
  }


  public login(req: any, res: Response) {
    User.findOne({ name: req.body.name }, function (err, user: any) {
      if (err) {
        return res.status(500).send('There was a problem registering the user.');
      }
      if (!user) {
        return res.status(404).send('No user found.');
      }

      // check if the password is valid
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

      if (!passwordIsValid) {
        return res.status(401).send({ auth: false, token: null });
      }

      // if user is found and password is valid
      // create a token
      const token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });

      // return the information including token as JSON
      res.status(200).send({ auth: true, token: token });
    });
  }

  public getMe(req: any, res: Response) {
    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) {
        return res.status(500).send('There was a problem finding the user.');
      }
      if (!user) {
        return res.status(404).send('No user found.');
      }

      res.status(200).send(user);
    });
  }
}
