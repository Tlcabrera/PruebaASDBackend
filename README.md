# PruebaASDBackend
CONTENIDO

Este documento contiene:

•	Modelamiento BackEnd (Diagrama de Clases)
•	Instrucciones de despliegue de Proyecto
•	Carga y enlace de proyecto en GitHub
•	Paso a paso de Construcción y Ejecución de Proyecto
•	Pruebas de procesos con Postman

1.	MODELAMIENTO BACKEND (DIAGRAMA DE CLASES)
![Image text](https://github.com/Tlcabrera/PruebaASDBackend/blob/main/public/PQRS.png)
 


2.	INSTRUCCIONES DE DESPLIEGUE DE PROYECTO
WEB SERVICES
1.	Ingresar al enlace https://asd-pqrs.onrender.com de la aplicación render y usar cada una de las rutas creadas
2.	Nota: comando de construcción: npm install
3.	Comando de ejecución: node index.js (configurado en el packege.json)
 

4.	CARGA Y ENLACE DE PROYECTO EN GITHUB
1.	Creación del repositorio https://github.com/Tlcabrera/PruebaASDBackend.git 
2.	Usando gitHub Destokp se clona proyecto
3.	Se crea rama dev
4.	se cargan commits necesarios
5.	Se carga en rama main
6.	Se publican en repositorio


5.	PASO A PASO DE CONSTRUCCIÓN Y EJECUCIÓN DE PROYECTO

CONFIGURACIÓN INICIAL

1. Crear carpeta donde se alojará el proyecto
2. Tener instalado node.js
3. Instalar Postman
4. Inicializar el proyecto 
5. Crear el index.js archivo de arranque del proyecto
6. Instalar los módulos necesarios (express, mongoose, dotenv, jsonwebtoken, nodemon, cors)
7. Ajustar archivo package.json para crea scripts de arranque dev y start.
8. crear archivo.gitignore
9. Crear estructura con arquitectura MVC del proyecto (models, controllers, routes, auth)
10. Ejecutar servidor
11. Creación de rutas del proyecto para users y PQRS
12. Probar rutas en Postman

MONGODB

1.	Ingresar a mongodb
2.	Crear base de datos y cluster en mongodb
3.	Ajustar ip para que se pueda realizar la conexión desde cualquier red
4.	Crear usuario en Database Acess
5.	Hacer la conexión en el paquete config archivo mongo.js
6.	Verificar conexión

SCHEMA

1.	Crear modelo para user en el paquete models
2.	Crear modelo para pqrs en el paquete models
3.	Ejecutar el servidor
4.	Verificar creación de colecciones en la base de datos
5.	Realizar validación de usuarios en ep paquete auth
6.	Realizar login con email y password utilizando jwt
7.	Probar en Postman para visualizar token
8.	Crear controllers para user y Pqrs
9.	Conectar las capas routes, controllers, models
10.	Testear en Postman funciones de users y pqrs

CAPA DE AUTENTICACIÓN

REGISTRO

1.	Crear paquete Auth
2.	Crear archivo auth.user.js
3.	Importar jwt en user.controller.js
4.	Incluir jwt
5.	Incluir funciones de registro y validaciones de campos 
6.	Probar con postman
7.	Ejecutar el servidor

