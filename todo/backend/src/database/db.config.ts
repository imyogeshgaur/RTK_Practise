import { Sequelize } from "sequelize";
import { envToExpose } from "../config/env.config";
const { DB_DIALECT, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME, DB_NAME } =
  envToExpose;

export const sequelize = new Sequelize(
  `${DB_DIALECT}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
);

const connectToDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to DB sucessfully !!!");
  } catch (error) {
    console.log("Error in connecting to DB ... ", error);
  }
};

export default connectToDB;
