# Web application project MEAN

![headerImage](./images/header.png "Image to project")

Project of a web application that manages users, the project has its frontend project made in Angular and its backend created in Nodejs and express as API and a database hosted in Mongodb. To see how it works, look at the following link: [Formulario Users](https://formusers.netlify.app)

## Installation

---
To install to use the project:

1. git clone to project:

```
git clone https://github.com/seObando19/FormularioUser.git
```

2. Install the dependencies:

* Frontend:

1. Change to directory:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Open this file and changes URL_API

open file frontend\src\app\services\register.service.ts
```javascript
URL_API = 'localhost/api/users/';
```

3. Run to de front:

```
ng serve --open
```

* Backend:

1. change to directory:

```
cd backend
```

2. Install dependencies:

```
npm install
```

### depending on how you are going to use the project follow these instructions

---

* DB mongo Atlas:

1. In project backend root create the .env file, where to need for create environment variables for to connect con mongodb:

```
MINGW64 ~/Desktop/munily-project (main)
$ touch .env
MINGW64 ~/Desktop/munily-project (main)
$ code .env
```

2. Open the file and add this enviroment variables:

```
DB_USER= *userDB
DB_PASS= *passwordDB
DB_NAME= *nameDB
```

* DB mongo local:

1. open the database.js and changes to route:

``` javascript
//open file
code database.js
//change this url-----:
mongoose.connect(`mongodb+srv://${user}:${pass}@server1.h8sfo.mongodb.net/${name}?retryWrites=true&w=majority`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
//this ----:
mongoose.connect(`mongodb://localhost/<nameDB>`,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
    }
```

3. run the backend:

```
DEBUG=backend:* npm start
```
## Author

Sebastian Obando Perez

Fullstack Sofware Developer

[LinkedIn](https://www.linkedin.com/in/sebastianobandop/)

[Github](https://github.com/seObando19/)

[Email](mailto:sebastiano-10@hotmail.com)

[Twitter](https://twitter.com/seObando19)
