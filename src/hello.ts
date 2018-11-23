import * as functions from "firebase-functions";
import * as cors       from 'cors';

const handleCors = cors({methods: 'POST',origin: true});

export const helloWorld = functions.https.onRequest((request, response) => {

    return handleCors(request, response, () => hello(request, response));

});

function hello(request, response) {
  
   Promise.resolve()
    .then(() => response.send("Hello from firebase!"))
    .catch(() => response.sendStatus(403));
}

