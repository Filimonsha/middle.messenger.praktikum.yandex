const path = require('path');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static('./build'));

app.listen(PORT, () => {
    console.log(path.resolve(__dirname,"./build/index.html"));
});
app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname,"./build/index.html"));
});
