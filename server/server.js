require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const workoutRoutes = require("./routes/workouts.js");

const {PORT} = process.env || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("public"))

app.get("/", (req, res) =>{
  res.json({
    message: "hello",
    routes: [
      {
        method: "get",
        endpoint: "/workouts"
      }
    ]
  })
})

app.use("/workouts", workoutRoutes);

app.listen(PORT, function () {
  console.log(`my server is running on ${PORT}`);
});
