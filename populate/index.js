const config = require("../config");
const mongoose = require("mongoose");
const fakeDB = require("./FakeDB.js");
mongoose.connect(
  config.DB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  async (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Starting to populate the DB");
      await fakeDB.populate();
      await mongoose.connection.close();
      console.log("DB has been populated");
    }
  },
);
