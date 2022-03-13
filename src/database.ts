import { connect } from "mongoose";

export async function startConn() {
  // Cambiar la ruta y el puerto
  await connect("mongodb://8009aff0-us-south.lb.appdomain.cloud:27017/clientsdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Database is connected");
}
