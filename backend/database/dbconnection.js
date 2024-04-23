const mongoose = require('mongoose');

const dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
            dbName: "fourdivs",
        });
        console.log("Database connected successfully");
    } catch (err) {
        console.error(`Error connecting to database ${err}`);
    }
};

module.exports = { dbconnection };
