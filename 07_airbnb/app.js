const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());

app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send("");
});

const port = 3002;
app.listen(port, () => {
  console.log(`Sever Starting on http://localhost:${port}`);
});
