import express from "express";
import cors from "cors";

const app = express();
const port = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Minesweeper");
});

app.listen(port, () => console.log(`server listening at port: ${port}`));
