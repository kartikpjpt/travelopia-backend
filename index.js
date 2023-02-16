require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./db/db");
const onboardRouter = require("./routes/onboard");
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = process.env.PORT || 4000;

app.use("/onboard", onboardRouter);

const start = async () => {
  try {
    console.log("process.env.MONGO_URL: ", process.env.MONGO_URL);
    await connectDB(process.env.MONGO_URL);
    app.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`DB Connected ${process.env.MONGO_URL}`);
      console.log(`Server is up and running on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};
start();
