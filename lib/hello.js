"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.helloWorld = functions.https.onRequest((request, response) => {
    Promise.resolve()
        .then(() => response.send("Hello from firebase!"))
        .catch(() => response.sendStatus(403));
});
//# sourceMappingURL=hello.js.map