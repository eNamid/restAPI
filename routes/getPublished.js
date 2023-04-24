const db = require('../src/db');

module.exports = async (req, res) => {
    const published = req.query.published;
    try {
        const Published = await db.Tutorials.findAll({
            where: {
                published: published
            }
        });

        res.json(Published);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}