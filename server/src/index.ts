import express from 'express';
import { connectDB } from "./core"
import dotenv from 'dotenv';
import RootRouter from './routers/RootRouter';
import bodyParser from 'body-parser';


dotenv.config();

const PORT = process.env.PORT || 5000;

const app: express.Application = express();

app.use(bodyParser.json());

app.get("/check", (req: express.Request, res: express.Response) => {
    res.send("API is working!!");
});

app.use('/', RootRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

connectDB();
