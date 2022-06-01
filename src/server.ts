import express from "express";

const app = express();

app.get("/users", (req, res) => {

})
app.listen(process.env.PORT || 3333, () => {
    console.log("HTTP server running")
});