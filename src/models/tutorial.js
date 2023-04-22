module.exports = (sequelize, DataTypes) => {
    const Tutorial = sequelize.define('Tutorial', {
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

	return Tutorial;
}
