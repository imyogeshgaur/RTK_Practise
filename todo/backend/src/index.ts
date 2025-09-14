import express,{ json,urlencoded } from "express";
import connectToDB from "./database/db.config";
import userRouter from "./routes/user.routes";
import todoRouter from "./routes/todo.routes";
const app = express();

connectToDB();

app.use(json())
app.use(urlencoded({extended:true}))

app.use("/user",userRouter)
app.use("/todo",todoRouter)

app.listen(3000)