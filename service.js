const express = require('express');
const cors = require('cors');
const { json, urlencoded } = require('body-parser');
const compression = require('compression');

const app = express();

app.use([
    compression(), 
    cors(), 
    json({ limit: '50mb'}), 
    urlencoded({ extended: true })
]);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, origin, content-type, Authorization, x-preferences-currency, x-preferences-reference, accept');
    next();
});

app.post('/tutorial', require('./routes/postTutorial'));

app.get('/tutorial', require('./routes/getTutorial'));
app.get('/tutorialId', require('./routes/getTutorialId'));
app.get('/published', require('./routes/getPublished'));
app.get('/title', require('./routes/getTitle'));

app.put('/tutorial/:id', require('./routes/putTutorial'));

app.delete('/tutirial/:id', require('./routes/delTutorialId'));
app.delete('/title', require('./routes/delTutorial'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});
