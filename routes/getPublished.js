const db = require('../src/db');

module.exports = async (req, res) => {
    const { published } = req.body;
    try {
        const getPublished = await db.Tutorial.findAll({
            where: {
                published: published
            }
        });

        res.json(getPublished);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}