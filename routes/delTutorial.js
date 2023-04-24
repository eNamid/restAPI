const db = require('../src/db');

module.exports = async (req, res) => {
    const title = req.query.title;

    try {
         await db.Tutorials.destroy({
            where: {
                title: title
            }
        });

        res.sendStatus(200);
    }
    catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}