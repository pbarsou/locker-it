import "reflect-metadata";
import express from 'express';
import './database/data_source';
import { routes } from "./routes";
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json())

app.use(routes);

app.listen(3333, () => console.log("Server is running"));