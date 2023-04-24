const db = require('../src/db');

module.exports = async (req, res) => {
    
    const id = req.query.id;

    try {
        const tutorial = await db.Tutorials.findOne({
            where: {
                id: id
            }
        });

        res.json(tutorial);
    }
    catch(err){
        res.status(500);
        console.log(err);
    }
}