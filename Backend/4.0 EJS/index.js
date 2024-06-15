import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const today = new Date("June 15, 2024 06:17:00");
    const day = today.getDay();

    // console.log(day);
    let type = "a weekday";
    let adv = "it's time to work";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "it's time have some fun";
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv,
    })
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});