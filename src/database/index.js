const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://todoapp:GoyrnX6LSMqtciCQ@cluster0.ngfzv.mongodb.net/todoapp?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
