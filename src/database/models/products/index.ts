import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from "../../database";

interface ProductAttributes {
  id: number;
  user: string;
  name: string;
  brand: string;
  model: string;
  price: number;
  color: string;
}

interface ProductCreationAttriubts extends Optional<ProductAttributes, 'id'> {}

interface Productistance extends Model<ProductAttributes, ProductCreationAttriubts> {
  createdAt?: Date;
  updatedAt?: Date;
}

const Product = sequelize.define<Productistance>('Products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Product.sync();

export default Product;