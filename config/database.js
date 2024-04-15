const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.MONGODB_CONNECTION_URL;
console.log(dbUrl)

const connectDatabase = async () => {
  let retries = 3; // Intentar conectar hasta 3 veces
  while (retries) {
    try {
      await mongoose.connect(dbUrl);
      console.log("MongoDB connected");
      return; // Salir del bucle si la conexión es exitosa
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      retries--;
      if (retries === 0) {
        console.error("Max retries reached. Exiting...");
        process.exit(1);
      }
      console.log(`Retrying connection. ${retries} retries left...`);
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Esperar 5 segundos antes de volver a intentar
    }
  }
};

module.exports = connectDatabase;
