import firebase from 'firebase-admin';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const headerToken = req.headers.authorization;
  // missing auth token
  if (!headerToken) {
    return res.send('No token provided').status(401);
  }

  // invalid auth token
  if (headerToken && headerToken.split(' ')[0] !== "Bearer") {
    res.send('Invalid token').status(401);
  }

  const token = headerToken.split(" ")[1];
  firebase.auth().verifyIdToken(token).then(() => next())
  .catch(error => {
    res.send('Unable to authorize').status(403);
    console.error(error.message);
  });
}

export default authMiddleware;
