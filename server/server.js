require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8080;

const workoutRoutes = require("./routes/workouts.js");
const trainingMaxesRoutes = require("./routes/trainingMaxes.js");

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
      },
      {
        method: "get",
        endpoint: "/trainingmaxes"
      }
    ]
  })
})


app.use("/workouts", workoutRoutes);
app.use("/trainingmaxes", trainingMaxesRoutes);

app.listen(PORT, function () {
  console.log(`my server is running on ${PORT}`);
});
