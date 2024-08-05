

## Libreriás utilizadas

- **express**: Framework web para Node.js.
- **sequelize**: ORM para Node.js.
- **sequelize-typescript**: Decoradores de TypeScript para Sequelize. Nos permite:
  - Definir modelos con clases de TypeScript.
  - Definir relaciones entre modelos con decoradores.
  - Definir validaciones con decoradores.
- **mysql2**: Driver de MySQL para Node.js.
- **nodemon**: Herramienta que ayuda a desarrollar aplicaciones basadas en Node.js reiniciando automáticamente la aplicación cuando se detectan cambios en el código fuente.
- **ts-node**: Ejecuta TypeScript directamente en Node.js sin necesidad de compilarlo previamente.
- **typescript**: Lenguaje de programación que añade tipado estático a JavaScript.
- **tsyringe**: Contenedor de inyección de dependencias para TypeScript.
- **@types/express**: Definiciones de tipos para Express. Recordemos que @types significa que es un paquete de definiciones de tipos TypeScript.
- **@types/sequelize**: Definiciones de tipos para Sequelize.
- **@types/node**: Definiciones de tipos para Node.js.

## Estructura de archivos y directorios

```text
project-name/
├── src/
│ ├── config/
│ │ └── db.ts
│ │ └── container.ts
│ ├── controllers/
│ │ ├── userController.ts
│ │ └── productController.ts
| | └── ...
│ ├── models/
│ │ ├── User.ts
│ │ └── Product.ts
| | └── ...
│ ├── repositories/
│ │ ├── UserRepository.ts
│ │ └── ProductRepository.ts
| | └── ...
│ ├── routes/
│ │ ├── Router.ts
│ │ ├── UserRoutes.ts
│ │ └── ProductRoutes.ts
| | └── ...
│ ├── services/
│ │ ├── UserService.ts
│ │ └── ProductService.ts
| | └── ...
│ └── index.ts
├── node_modules/
├── package.json
├── tsconfig.json
└── nodemon.json
```

## Explicación la estructura de archivos y directorios en el proyecto:

- **src**: Contiene el código fuente de la aplicación.
  - **config**: Contiene la configuración de la base de datos y el contenedor de inyección de dependencias.
  - **controllers**: Capa de presentación. Contiene los controladores de la aplicación. 
  - **models**: Capa de dominio. Contiene los modelos de la aplicación. Chicos, recordemos que para esta arquitectura, la carpeta models contiene las entidades que serán mapeadas a la base de datos. Anteriormente, habiamos hablado que la carpeta de modelos contenia las consultas a la base de datos. 
  - **repositories**: Capa de acceso a datos. Contiene los repositorios de la aplicación. Anteriormente, esta carpeta la llamabamos models. 
  - **routes**: Contiene las rutas de la aplicación.
  - **services**: Capa de lógica de negocio. Contiene los servicios de la aplicación.
  - **nodemon.json**: Archivo de configuración de nodemon para reiniciar la aplicación cuando se detectan cambios en el código fuente y que funcione con TypeScript.
  - **tsconfig.json**: Archivo de configuración de TypeScript.
  - **index.ts**: Archivo principal de la aplicación.

