const db = require('../src/db');

module.exports = async (req, res) => {
    const id = req.params.id;
    const {
        title,
        description,
        published
    } = req.body;

    try {
        await db.Tutorials.update({
            title: title,
            description: description,
            published: published
        }, {
            where: {
                id: id
            },
        });

        res.sendStatus(200);
    }
    catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}