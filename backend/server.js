const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const bookRoute = require("./route/book.route");
const  userRoute = require("./route/user.route");
const app = express();
const cors = require("cors");
dotenv.config();


app.use(cors());
//Body parser middleware

app.use(express.json());
const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODBURI;

app.get("/", (req, res) => {
    res.send("hello world");
});

// Connect to MongoDB
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("MongoDB Connected...");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

// defining route
app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
