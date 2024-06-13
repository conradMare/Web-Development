import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Hello, My name is <strong>Conrad Mare'</strong></p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>conradmare4@gmial.com</p>");
})

app.listen(port, () => {
    console.log(`Server started on ${port}.`);
});