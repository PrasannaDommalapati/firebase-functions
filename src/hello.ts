import * as functions from "firebase-functions";

export const helloWorld = functions.https.onRequest((request, response) => {
  Promise.resolve()
    .then(() => response.send("Hello from firebase!"))
    .catch(() => response.sendStatus(403));
});
