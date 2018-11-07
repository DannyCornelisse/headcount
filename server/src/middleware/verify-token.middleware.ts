import * as jwt from 'jsonwebtoken';
import { config } from './../config'; // unsafe to use hard-coded!
import { Request, Response, NextFunction } from 'express';

export function verifyToken(req: any, res: Response, next: NextFunction) {
  console.log('middleware!');

  // check header or url parameters or post parameters for token
  const token = req.headers['x-access-token'];

  if (!token)  {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    // if everything is good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}
