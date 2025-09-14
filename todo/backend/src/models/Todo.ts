import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.config";

const Todo = sequelize.define(
  "Todo",
  {
    todoId: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
sequelize.sync({ alter: true });
export default Todo;
