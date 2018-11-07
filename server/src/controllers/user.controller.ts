import { model, Model, Schema } from 'mongoose';
import { userSchema } from '../models/user.model';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { config } from './../config'; // this is very unsafe, use env variables instead
import { MongoError } from 'mongodb';

const User: Model<any> = model('User', userSchema);

export class UserController {

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

  public getUsers(req: Request, res: Response) {
    User.find({}, { password: 0 }, (err, users) => {
      if (err) {
        return res.status(500).send('There was a problem finding the users.');
      }
      res.status(200).send(users);
    });
  }

  public getUser(req: Request, res: Response) {
    User.findById(req.params.userId, { password: 0 }, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem finding the user.');
      }
      if (!user) {
        return res.status(404).send('No user found.');
      }

      res.status(200).send(user);
    });
  }

  public deleteUser(req: Request, res: Response) {
    User.findByIdAndRemove(req.params.userId, (err, user) => {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.');
      }
      if (!user) {
        return res.status(404).send('No user found.');
      }

      res.status(200).send(`User with name: ${user.name} deleted`);
    });
  }

  public updateUser(req: Request, res: Response) {
    User.findByIdAndUpdate(req.params.userId, req.body, {new: true}, (err: MongoError, user: any) => {
      if (err) {
        return res.status(500).send('There was a problem updating the user.');
      }
      if (!user) {
        return res.status(404).send('No user found.');
      }
      res.status(200).send(`User with name: ${user.name} updated`);
    });
  }
}
