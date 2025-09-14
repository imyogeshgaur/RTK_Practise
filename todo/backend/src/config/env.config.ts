import { config } from "dotenv";
import {resolve} from "path"
config({path:resolve("./src/.env")})

export const envToExpose = {
    APP_PORT : process.env.APP_PORT as string,
    DB_HOST : process.env.DB_HOST as string,
    DB_DIALECT : process.env.DB_DIALECT as string,
    DB_PORT : process.env.DB_PORT as string,
    DB_USERNAME : process.env.DB_USERNAME as string,
    DB_PASSWORD : process.env.DB_PASSWORD as string,
    DB_NAME : process.env.DB_NAME as string,
    JWT_SECRET : process.env. JWT_SECRET as string
}

