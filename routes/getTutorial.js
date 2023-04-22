const db = require('../src/db');

module.exports = async (req, res) => {
    try {
        const getTutorial = await db.Tutorial.findAll();

        res.json(getTutorial);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}