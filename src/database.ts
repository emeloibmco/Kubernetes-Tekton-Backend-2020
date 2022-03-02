import { connect } from "mongoose";

export async function startConn() {
  // Cambiar la ruta y el puerto
  await connect("mongodb://172.21.134.164:32054/clientsdb", {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
  console.log("Database is connected");
}
