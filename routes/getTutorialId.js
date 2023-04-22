const db = require('../src/db');

module.exports = async (req, res) => {
    const id = req.query.id;
    try {
        const getTutorialId = await db.Tutorial.findAll({
            where: {
                id: id
            }
        });

        res.json(getTutorialId);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}