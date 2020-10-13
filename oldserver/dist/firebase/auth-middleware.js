"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const authMiddleware = (req, res, next) => {
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
    firebase_admin_1.default.auth().verifyIdToken(token).then(() => next())
        .catch(error => {
        res.send('Unable to authorize').status(403);
        console.error(error.message);
    });
};
exports.default = authMiddleware;
//# sourceMappingURL=auth-middleware.js.map