const mongoose = require("mongoose");
const URI = process.env.MONGODB_URL;

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,              // unavailable on mongoose version : 6 and superior 
    useFindAndModify: false,          // unavailable on mongoose version : 6 and superior
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB " + err));
