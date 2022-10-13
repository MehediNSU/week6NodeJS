const express = require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const PORT = 8000;

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next) => {
    console.log("HTTP Method - " + req.method + " , URL - " + req.url);
    next();
});

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get('/', (req, res) => {
    res.send("Hello BS23")
})

mongoose
    .connect(
        'mongodb+srv://admin:admin1234@cluster26.2hetudh.mongodb.net/?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });