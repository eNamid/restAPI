const db = require('../src/db');

module.exports = async (req, res) => {
    try {
        const tutorials = await db.Tutorials.findAll();

        res.json(tutorials);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}