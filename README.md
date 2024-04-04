# Prueba de proyecto. Listado de usuarios
***
> Proyecto simple cargando una Api de usuarios, obtenida del siguiente enlace: https://random-data-api.com/api/v2/users?size=100

*** 
> Para las imágenes se ha utilizado la siguiente librería: https://robohash.org/

***
El proyecto consta de una homePage sencilla con un botón, que al clickar carga una lista de usuarios y te redirecciona a otro enlace. Este enlace tiene la opción de volver al home de nuevo.
Los usuarios están distribuidos en 3 columnas, en formato de "card", con nombre, imagen, email, teléfono y un botón de información que carga información adicional con un modal, que también puede cerrarse para ver otro usuario distinto.

***
Se ha usado React con:
* Create-react-app
* useContext
* useState
* useEffect
* Funciones externas para hacer fetch a la api
* React layout
* react-router-dom
* TailwindCss para los estilos
* Node para formar el proyecto
* Express para configurar un Router y hacer posibles ampliaciones con peticiones
* Netlify para el deployment de la web

Enlace de prueba de la página: [Prueba de la web](https://660ef954a09f56408973108a--splendorous-croquembouche-cc8462.netlify.app/)