import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>Home Page</h1><p>Welcome to my Blog Web Application</p>");
})

app.get("/create", (req, res) => {
    res.send("<h1>Create a Blog post</h1>");
})

app.get("/entry", (req,res) => {
    res.send("<h1>Blog Entries</h1><p>List of blog entries</p>");
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})