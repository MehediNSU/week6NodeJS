const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    res.send("Hello BS23")
})

app.get('/test', (req, res) => {
    res.send("This is test page")
})
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})