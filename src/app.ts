import express, { Request, Response, NextFunction, Application } from "express";
import { Server } from "http";
const app: Application = express();
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from TS APP")
})
const server: Server = app.listen("3000", () => {
    console.log("Server is on Port: 3000");
})