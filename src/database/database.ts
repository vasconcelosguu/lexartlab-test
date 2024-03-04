import * as pg from 'pg'
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  });


export default sequelize;