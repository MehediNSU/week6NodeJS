const express = require('express');
const userRouter = require('./routes/userRoutes');
const noteRouter = require('./routes/noteRoutes');
const app = express();
const PORT = 8000;

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get('/', (req, res) => {
    res.send("Hello BS23")
})

app.get('/test', (req, res) => {
    res.send("This is test page")
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})