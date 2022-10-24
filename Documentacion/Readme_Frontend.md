## Kruger PokeAPI Challenge
## /FrontEnd


![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

El frontend de la PokeAPI fue realizado con [React](https://reactjs.org/docs/getting-started.html) esta distribuido en 3 partes:

- MainScreen
- DetailScreen
- Componentes

## Características

- Ver la lista de todos los pokemons en la pagina principal(MainScreen).
- ver detalles adicionales de un pokemon seleccionado en la DetailScreen.
- Buscar Pokemons por su nombre

## Paquetes (NPM)

Para el desarrolo del frontEnd se utilizaron lo siguientes paquetes del gestor NPM.

| Paquete | Uso |
| ------ | ------ |
| Axios | Para el llamado de la API|
| react-router-dom | Para la navegacion entre rutas | 


## Proceso de construcción y ejecución FrontEnd

El proceso de construcción y ejecución del Frontend se realizo de esta manera:

- Estructurar nuestros directorios en 3 carpetas:
  - Screens:  donde se encuentra la pantalla principal y de detalles.
  - Components:  donde se encuentran los diversos componentes para la seccion     Screens, como por ejemplo el buscador. 
  - Assets:  directorio de nuestras imagenes utilizadas en el proyecto.
- En nuestra App.js estructuramos nuestras rutas usando "react-route-dom" 
- En nuestra MainScreen.js se renderizan nuestros pokemons usando:
 -UseEffect Hook: para el llamado de nuestra API al iniciar a travez de [Axios](https://www.npmjs.com/package/axios)
 -Funcion de Busqueda(async): para buscar pokemons por nombre en nuestra API.
- Cada componente y Screen poseé su hoja de estilos (CSS)

**Componentes usados:**
En nuestra MainScreen usamos los siguientes componentes de nuestra carpeta de componentes:
- Pokelist: Container de toda la lista de pokemons en nuestra MainScreen.
- SearchBar: Barra de busqueda en la MainScreen.
- PokemonCard: Container individual de cada pokemon a renderizar.
- Colors.js: archivo js de los colores de cada tipo de pokemon segun corresponda.

En nuestra DetailScreen usamos los siguientes componentes de nuestra carpeta de componentes:
- StatsBar: Container de las estadisticas de nuestro pokemon.

Los atributos de nuestro pokemon se pasan a las pantallas usando react-route-dom a travez del componente <Link>



## Instalación

PokeAPI/frontend requiere [Node.js](https://nodejs.org/) v10+ y [React](https://reactjs.org/versions) v18.0.0+ para correr.

Instalar las dependecias y lanzar el programa desde la carpeta /frontend.

```sh
cd frontend
npm install
npm start
```

**Free Software**

[//]: # (Links de referencia usados en el documento - )

   [dill]: <https://github.com/joemccann/dillinger>

