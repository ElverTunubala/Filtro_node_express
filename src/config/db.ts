import { Sequelize } from 'sequelize-typescript';
import { User, Product,Rol, ProductCart, Cart } from '../models';
import { Order } from '../models/order';

const sequelize: Sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'Rlwl2023.',
    database: 'repaso_filtro',
    models: [User,Product,Rol,Order,ProductCart,Permission,Cart], // Añade todos tus modelos aquí es lo mismo que el nombre de las tablas
});

export default sequelize;

