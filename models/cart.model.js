const { db, DataTypes } = require("../utils/database.util");

const Cart = db.define(
  "cart",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "cart",
    timestamps: false,
  }
);

module.exports = { Cart };
