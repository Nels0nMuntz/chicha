import express from 'express';
import { connectDB } from "./core"
import dotenv from 'dotenv';

dotenv.config();

const app: express.Application = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req: express.Request, res: express.Response) => {
    res.send("API is working!!");
});


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));