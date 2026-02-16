import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "sd123";
const yourPassword = "123";
const yourAPIKey = "b81cc770-9003-456f-ac03-646770f47936";
const yourBearerToken = "ff3d4f8d-7de6-422e-aecd-c797089bf626";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/random/");

    res.render("index.ejs", {
      content: JSON.stringify(response.data)
    });
  } catch (error){
    res.status(500).send("Error fetching data: " + error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
 try{
  const url = "https://secrets-api.appbrewery.com";
  const response = await axios.get(url + "/all?page=2", {
    auth: {
      username: yourUsername,
      password: yourPassword,
    },
    // params: {
    //   page: 2,
    // },
  });
  res.render("index.ejs", { content: JSON.stringify(response.data) });
 }  catch (error) {
    res.status(500).send("Authentication failed: " + error.message);
  }
});

app.get("/apiKey", async(req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{
    const response= await axios.get("https://secrets-api.appbrewery.com/filter", {
      params: {
        score: 5,
        apiKey: yourAPIKey,
      }
    });
    res.render("index.ejs", { content: JSON.stringify(response.data) });
  } catch (error) {
    res.status(500).send("Authentication failed: " + error.message);
  }

});

app.get("/bearerToken", async(req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 try{
  const response = await axios.get("https://secrets-api.appbrewery.com/secrets/42", {
    headers :{
      Authorization: `Bearer ${yourBearerToken}`,
    }
  });
  res.render("index.ejs", { content: JSON.stringify(response.data) });
 } catch (error) {
    console.log(error.response.data);
    res.status(500).send("Error fetching secret");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
