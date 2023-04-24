const db = require('../src/db');

module.exports = async (req, res) => {
    const { 
        title,
        description,
        published
    } = req.body;

    try{
        await db.Tutorials.create({
            title: title, 
            description: description,
            published: published
        });

        res.sendStatus(200);

    } catch (err){
        res.sendStatus(500);
        console.log(err);
    }
}