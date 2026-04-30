const express = require("express");
const indexRouter = require("./routes/indexRouter");
const app = express();

const PORT = 3000;
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
