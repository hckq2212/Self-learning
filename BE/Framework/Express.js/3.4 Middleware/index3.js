import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.use(morgan('combined'))
app.use((req, res, next) => {
  console.log("Incoming request:", req.name);
  next()
})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
