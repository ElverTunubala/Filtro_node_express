import { container } from 'tsyringe';
import UserService from '../services/userService';
import UserRepository from '../repositories/userRepository';
import ProductRepository from '../repositories/productRepository';
import ProductService from '../services/productService';
import AuthService from '../services/auth.Service';
import OrderRepository from '../repositories/orderRepository';
import OrderService from '../services/orderService';
import ProductCartRepository from '../repositories/productCartRepository';
import ProductCardService from '../services/productCardService';

container.registerSingleton<UserRepository>(UserRepository);
container.registerSingleton<UserService>(UserService);

container.registerSingleton<AuthService>(AuthService);

container.registerSingleton<ProductRepository>(ProductRepository);
container.registerSingleton<ProductService>(ProductService);

container.registerSingleton<OrderRepository>(OrderRepository);
container.registerSingleton<OrderService>(OrderService);

container.registerSingleton<ProductCartRepository>(ProductCartRepository);
container.registerSingleton<ProductCardService>(ProductCardService);



