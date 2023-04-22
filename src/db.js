const fs = require('fs').promises;
const path = require('path');
const Sequelize = require('sequelize');

const db = {};

(async () => {
    const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASS, {
        host: process.env.HOST,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    });

    const dirname = path.join(__dirname, 'models');
    const dir = await fs.readdir(dirname);

    const files = dir.filter(file => { 
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
    });
    for (const file of files) {
        const model = require(path.join(dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    }

    const models = Object.keys(db);
    for (const model of models) {
        if (db[model].associate) db[model].associate(db);
    }

    db.sequelize = sequelize;
    db.Sequelize = Sequelize;
})();

module.exports = db;
