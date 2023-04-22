const db = require('../src/db');

module.exports = async (req, res) => {
    const { 
        title,
        description,
        published
    } = req.body;

    try{
        const tutorial = await db.Tutorial.create({
            title: title, 
            description: description,
            published: published
        });

        res.json(tutorial);

    } catch (err){
        res.status(500);
        console.log(err);
    }
}