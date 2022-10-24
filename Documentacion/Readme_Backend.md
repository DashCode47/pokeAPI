## Kruger PokeAPI Challenge
## /BackEnd


![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

El backend de la PokeAPI fue realizado con:
- MongosDB para la base de datos.
- Node js con el framework Express para el desarrollo.
- Deploy en Heroku para hacer publica la API.


## Características

- Diseno del esquema de pokemons con sus atributos para la base de datos.
- Diseno de la route para el metodo GET.
-- Diseno de la route para el metodo GET por nombre del pokemon
- Diseno de la route para el metodo POST(solo para desarollo)


## Paquetes (NPM)

Para el desarrolo del Backend se utilizaron lo siguientes paquetes del gestor NPM.

| Paquete | Uso |
| ------ | ------ |
| cors | Para permitir las web request al server|
| express | Framework de nodeJs para la escritura de la API| 
| mongoose | Herramienta para el modelado de objetos de la DB | 
| dotenv | Para cargar variables de entorno(enviroment variables)desde un archivo .env |
| nodemon | Para controlar cambios en el server |


## Proceso de construcción y ejecución BackEnd

El proceso de construcción y ejecución del BackEnd   se realizo de esta manera:

- Estructurar nuestros directorios en 2 carpetas:
  - Models:  donde se encuentra nuestro esquema de pokemon(schema) con los atributos: name,descripcion,tipo,evolucion,altura,peso,stats,image.Siendo nombre y descripcion atributos  requeridos.
  - Routes:donde definimos nuestras rutas para el metodo GET
  
**Routes:** 
Aqui tenemos las rutas para nuestros metodos GET y POST.
 -POST: lo usamos solo en desarrollo para agregar 10 pokemons a la base de datos.
 -GET: 
Tenemos 2 rutas principales ,son tipo async,usando try and catch para el manejo de errores.
 - Ruta("/"):nuestra ruta para hacer consulta a la base de datos de todos los pokemos.
 - Ruta("/:pokemonId"):ruta de consulta de pokemon por nombre; el nombre puede estar en mayusculas o minusculas gracias al constructor RegExp usado.


**MiddleWares usados:**
En nuestro Index.js usamos los siguientes middlewares para el diseño de la API:
Para el metodo POST: (usado para el desarrollo).
- express.json: Maneja y reconoce las consultas como un objeto JSON.
- express.urlencoded: Reconoce solicitudes como un string.

-cors: para el manejo de requests en un api publica.
-dotenv: para crear variables de entorno.
Definimos nuestra ruta inicial de la API siendo esta("/pokemons")

## Deploy
-El deploy fue hecho en [heroku](https://www.heroku.com
) con el cual obtuvimos una url publica de nuestra API.
-Extra se creo una proxy para evitar conflictos CORS con nuestra API y permitir al server reconocer origenes y permitirles su uso.

## Instalación

PokeAPI/backend requiere [Node.js](https://nodejs.org/) v10+ para correr.

Instalar las dependecias y lanzar el programa desde la carpeta /backend.

```sh
cd backend
npm install
npm start
```

**Free Software**

[//]: # (Links de referencia usados en el documento - )

   [dill]: <https://github.com/joemccann/dillinger>

