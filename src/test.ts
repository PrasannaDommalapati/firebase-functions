import * as functions from "firebase-functions";

export const testWorld = functions.https.onRequest((request, response) => {
  Promise.resolve()
    .then(() => response.send("Test from firebase!"))
    .catch(() => response.sendStatus(403));
});
