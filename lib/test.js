"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
exports.testWorld = functions.https.onRequest((request, response) => {
    Promise.resolve()
        .then(() => response.send("Test from firebase!"))
        .catch(() => response.sendStatus(403));
});
//# sourceMappingURL=test.js.map