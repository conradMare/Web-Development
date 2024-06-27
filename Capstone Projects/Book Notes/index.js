import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import axios from "axios";

const app = express();
const port = 3000;

app.listen(port, () => {
    {`Server started on port ${port}.`};
})