<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Repaso Proyecto Individual - Breaking Bad

<p align="left">
  <img height="200" src="./bb.png" />
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.

## Enunciado

La idea general es crear una aplicación en la cual se puedan ver distintos personajes de Breaking Bad junto con información relevante de los mismos (¡¡TOMANDO EN CUENTA QUE NO HE VISTO LA SERIE ANTES!!) utilizando la api externa [The Breaking Bad API](https://breakingbadapi.com/) y a partir de ella poder, entre otras cosas:

  - Buscar personajes
  - Filtrarlos / Ordenarlos
  - Agregar nuevos personajes

__IMPORTANTE__: Para poder utilizar esta API externa no es necesario crearse una cuenta.

__IMPORTANTE__: Para las funcionalidades de filtrado y ordenamiento NO pueden utilizar los endpoints de la API externa que ya devuelven los resultados filtrados u ordenados sino que deben realizarlo ustedes mismos. En particular alguno de los ordenamientos o filtrados debe si o si realizarse desde el frontend.

### Únicos Endpoints/Flags que pueden utilizar

  - GET https://breakingbadapi.com/api/characters
  - GET https://www.breakingbadapi.com/api/characters/?name={name}

### Requerimientos mínimos:

__IMPORTANTE__: No se permitirá utilizar librerías externas para aplicar estilos a la aplicación. Tendrán que utilizar CSS con algunas de las opciones que vimos en dicha clase (CSS puro, CSS Modules o Styled Components)

#### Tecnologías necesarias:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

#### Base de datos

La relación entre ambas entidades debe ser de muchos a muchos ya que un personaje puede tener varias "ocupaciones" en simultaneo y, a su vez, una "ocupación" puede corresponder a múltiples personajes. Por ejemplo, Kimberly Wexler es 'lawyer', pero a su vez existen otros personajes con esa ocupación.

__IMPORTANTE__: Pensar como modelar los IDs de los personajes en la base de datos. Existen distintas formas correctas de hacerlo pero tener en cuenta que cuando hagamos click en alguno, este puede provenir de la API o de la Base de Datos por lo que cuando muestre su detalle no debería haber ambigüedad en cual se debería mostrar. Por ejemplo si en la API el personaje Walter White ` tiene id = 1 y en nuestra base de datos creamos un nuevo personaje `Walter Black` con id = 1, ver la forma de diferenciarlas cuando querramos acceder al detalle de los mismos.

#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

- [ ] __GET /characters__.

- [ ] __GET /characters?name="..."__.

- [ ] __GET /character/{idPersonaje}__.

- [ ] __GET /ocupaciones__.

- [ ] __POST /character__.

#### Testing
