"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const credentials_json_1 = __importDefault(require("./credentials.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(credentials_json_1.default),
    databaseURL: "https://kara-628e0.firebaseio.com",
});
console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
exports.default = firebase_admin_1.default;
//# sourceMappingURL=index.js.map