import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from "../../database";

interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface UserInstance extends Model<UserAttributes, UserCreationAttributes> {
  email: string;
  id: number;
  password: string;
}

const User = sequelize.define<UserInstance>('Users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

User.sync();

export default User;