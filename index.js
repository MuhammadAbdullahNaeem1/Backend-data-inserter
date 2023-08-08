// // npm init -y

// // npm install express mongoose cors body-parser

const express = require("express");
const connectToMongo = require("./db");

const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello Abdullah"));
app.use(express.json());
//routes
// app.use('/api/auth', require ('./routes/auth'))
// app.use('/api/auth', require ('./routes/notes'))

const user = require("./routes/userroute.js");
app.use("/api/v1", user);
connectToMongo()
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });
