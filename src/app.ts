import express, { Request, Response, NextFunction, Application } from "express";
import { Server } from "http";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from 'cors';
import mongoose, { Error } from 'mongoose';

const app: Application = express();
app.use(cors({
    credentials: true
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
const server = http.createServer(app);
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send("Hello from TS APP")
})
server.listen("3000", () => {
    console.log("Server is on Port: 3000");
})

const MONGO_URL = "mongodb+srv://User:Subhash123@cluster0.hpdcbcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on('error', (error: Error) => {
    console.log(error);
})