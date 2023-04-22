const db = require('../src/db');

module.exports = async (req, res) => {
    const title = req.query.title;

    try {
        const getTitle = await db.Tutorial.findAll({
            where: {
                title: title
            }
        })

        res.json(getTitle);

    } catch (err) {
        res.status(500);
        console.log(err);
    }
}