const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// mongoose.Schema.Types.Boolean.convertToFalse.add('');
let names = null
mongoose.set('strictQuery', true);

const connectionOptions = {
    // useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false 
};

mongoose.connect('mongodb://0.0.0.0:27017/alam', connectionOptions);
const db = mongoose.connection

db.once("connected", () => {
    console.log("Connected to database sucessfully");
    let listOfCollections = Object.keys(db.collections);
    names = listOfCollections
    console.log(names);

});

db.on("error", (err) => {
    console.log("Error while connecting to database :" + err);
});

db.on("disconnected", () => {
    console.log("Mongodb connection disconnected");
});

db.on("close", () => {
    console.log("Closes to database sucessfully");
});

