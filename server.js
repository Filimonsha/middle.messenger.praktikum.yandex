const path = require('path');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log("this application work on " + PORT + "port");
});
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname,"./build/index.html"));
});
