import express from 'express';

const app =express();
const port =3000;


app.get("/", (req,res) => {

    const d =new Date();
    const today= d.getDay();

    let type = "weekday";
    let adv= "work hard bruhh";

    if (today === 0 || today === 6){
        type = "weekend";
        adv= "chill bruh";
    }

    res.render("index.ejs", {
        dayType: type, 
        advice: adv});
})

app.listen(port, () => {
    console.log("port runnung");
});

