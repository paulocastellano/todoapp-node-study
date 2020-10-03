const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://localhost/todoapp?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
