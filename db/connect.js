const mongoose = require("mongoose");


const connectionStr =
    "mongodb+srv://shiyuchen6688:csy6688@split-your-bill.1hooc.mongodb.net/SPLIT-YOUR-BIILL?retryWrites = true & w=majority";

mongoose
    .connect(connectionStr, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log(`There is an error: ${err}`))