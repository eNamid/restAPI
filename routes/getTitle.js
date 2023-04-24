const db = require('../src/db');

module.exports = async (req, res) => {
    const title = req.query.title;

    try {
        const Title = await db.Tutorials.findAll({
            where: {
                title: {
                    [db.Sequelize.Op.like]:`${title}%`
                }
            }
        })

        res.json(Title);

    } catch (err) {
        res.status(500);
        console.log(err);
    }
}
