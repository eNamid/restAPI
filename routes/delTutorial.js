const db = require('../src/db');

module.exports = async (req, res) => {
    const { 
        title
     } = req.body;

    try {
         await db.Tutorial.destroy({
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