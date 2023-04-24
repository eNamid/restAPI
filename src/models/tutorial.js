module.exports = (sequelize, DataTypes) => {
    const Tutorials = sequelize.define('Tutorials', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		title: DataTypes.STRING,
		description: DataTypes.STRING,
        published: DataTypes.INTEGER
	}, {
		timestamps: false,
        freezeTableName: true,
        tableName: 'tutorials'
	});

	return Tutorials;
}
