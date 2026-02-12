import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var name = "";

app.use(bodyParser.urlencoded({ extended: true }));


function nameGenerator(req, res, next){
  name= req.body["street"] + req.body["pet"];
  next();
}
app.use(nameGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1> Name is ${name} </h1>`);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
