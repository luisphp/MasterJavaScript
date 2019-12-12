### Para instalar y ejecutar este servidor debes instalar las siguientes librerias y dependencias

- `npm install express --save`
- `npm install body-parser --save`
- `npm install connect-multiparty --save`
- `npm install mongoose --save`
- `npm install nodemon --save-dev`

### Para iniciar este servidor con Node.js 

- Utilizar el comando npm start
- Utilizar el comando `npm run --watch` para ejecutar el listener de cambios de codigo y que se reflejen automaticamente en la web

### MongoDb
Aparte de eso tambien debes instalar MongoDB, RoboMongo, Robo3T al tener instalado esos programas
debes iniciar la base de datos usando el comando `./mongod` en el directorio donde se instalo

### Nota
Angtes de todo bebes crear en disco C una carpeta llamada db, en esa carpeta se guardan los archivos de la base de datos
![MongoDb command start][img2]


### Ejecutar backend NodeJS

- Usar el comando `npm start`, el mismo se configuro el archivo index.js
![NodeJS command start][img1]


[img1]: ./server-reference-images/MongoDB_Initial_command.PNG "NodeJS command start"
[img2]: ./server-reference-images/Node_Initial_command.PNG "MongoDb command start"
