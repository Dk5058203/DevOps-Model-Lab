const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to My Web Application</h1><p>Deployed using Docker, Jenkins, and Git and Divya mam is great</p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
