import app from "./app";
import "./utils/mongoose";
import firebaseApp from './firebaseConfig';

// Ejemplo de uso
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();


app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
