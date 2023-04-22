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

app.set('trust proxy', true);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, origin, content-type, Authorization, x-preferences-currency, x-preferences-reference, accept');
    next();
});

app.post('/postTutorial', require('./routes/postTutorial'));

app.get('/getTutorial', require('./routes/getTutorial'));
app.get('/getTutorialId', require('./routes/getTutorialId'));
app.get('/getPublished', require('./routes/getPublished'));
app.get('/getTitle', require('./routes/getTitle'));

app.put('/putTutorial/:id', require('./routes/putTutorial'));

app.delete('/delTutirialId/:id', require('./routes/delTutorialId'));
app.delete('/delTutorial', require('./routes/delTutorial'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}.`);
});