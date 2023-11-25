require("dotenv").config();
const habits = require("./routes/habits");
const express = require("express");
const app = express();
app.use(express.json());

app.use("/api/habits", habits);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
