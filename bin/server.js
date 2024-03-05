const mongoose = require("mongoose");

const app = require("../app");

const { DB_HOST = "mongodb://localhost:27019/", PORT = 4000 } = process.env;

mongoose
  .connect("mongodb://localhost:27019/")
  .then(() => console.log("Database connection successful"))
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
