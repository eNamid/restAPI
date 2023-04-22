const db = require('../src/db');

module.exports = async (req, res) => {
    const id = req.params.id;

    try {
         await db.Tutorial.destroy({
            where: {
                id: id
            }
        });

        res.sendStatus(200);
    }
    catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}