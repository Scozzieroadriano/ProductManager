import { connect } from 'mongoose';

//const connectionString = "mongodb://127.0.0.1:27017/ecommerce";
const connectionString = "mongodb+srv://AdrianoScozziero:Jakinoto10@coder.iba2ez1.mongodb.net/ecommerce?retryWrites=true&w=majority"
export const initMongoDB = async () => {
  try {
    await connect(connectionString);
    console.log('Conectado a la base de datos de MongoDB');
  } catch (error) {
    console.log(`ERROR => ${error}`);
  }
};