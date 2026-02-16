const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// set EJS
app.set("view engine", "ejs");

// static files
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://cat-fact.herokuapp.com/facts/random");
    const randomFact = response.data[Math.floor(Math.random()*response.data.length)].text;

    res.render("index", { fact: randomFact });
  } catch (error) {
    console.log(error.message);
    res.send("Error fetching cat fact");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
