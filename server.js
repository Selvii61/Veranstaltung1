const express = require('express');

const app = express();
const port = 2000;

app.get('/', (req, res) => {
    res.sendFile("/Users/albayrak/Desktop/selvi/RWU/Semester 4/Cloud Computing/Veranstaltung1/index.html");
});

app.get('/about', (req, res) => {
    res.sendFile("/Users/albayrak/Desktop/selvi/RWU/Semester 4/Cloud Computing/Veranstaltung1/about.html");
});

app.get('/destinations', (req, res) => {
    res.sendFile("/Users/albayrak/Desktop/selvi/RWU/Semester 4/Cloud Computing/Veranstaltung1/destinations.html");
});

app.get('/travelblog', (req, res) => {
    res.sendFile("/Users/albayrak/Desktop/selvi/RWU/Semester 4/Cloud Computing/Veranstaltung1/travelblog.html");
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});