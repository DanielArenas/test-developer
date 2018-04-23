## Clonar la app

- La app esta en github, lo cual necesitaremos clonarla del repositorio, por esto necesitamos tener instalado git, para ellos puedes consultar el siguiente enlace [Getting-Started-Installing-Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

- Una vez instalado git puedes correr el comando `git clone git@github.com:DanielArenas/test-developer.git` para tener el repositorio en tu computador

- Accede a la carpeta que se te creó llamada `test-react`

## Requisitos para correr la app

La app funciona con react js, necesitamos tener instalado lo siguiente

- [npm v 5.6.0](https://www.npmjs.com/get-npm)
- [node js v 9.6.0](https://nodejs.org/es/download/)

una vez tengamos esto listo entrar al folder de la app (test-react) y corres `npm install` tambien podes consultar la documentacion en [docreact](https://github.com/facebook/react)

una vez estamos listo simplemente es correr la app con `npm start` y listo ya tenemos la prueba corriendo

## Realizar la prueba

### Primer punto

Cuando tengas corriendo la app, por lo general corre en el puerto 3000, entonces en tu navegador web digitar `http://localhost:3000/`, debería aparecer un título Parenthesis con un campo de texto y un label en la parte de abajo diciendo `It is Invalid` 

- Lo que necesitamos hacer es identificar si el string que se digita en el campo de texto tiene los paréntesis válidos o no, entonces los posibles valores que puede recibir el campo y el resultado que debería de obtener serían los siguientes


|    Valor   |  Resultado     |
|------------|----------------|
|            |`It is Invalid` |
|(           |`It is Invalid` |
|)           |`It is Invalid` |
|()          |`It is valid`   |
|(())        | `It is valid`  |
|((()()))    | `It is valid`  |
|(((1)(2)))  |  `It is valid` |



### Segundo punto


En el archivo src/index.js necesitamos agregar un nuevo componente que se llame `<Welcome/>`, lo que vamos a hacer es enviarle un parametro nombre al componente para que renderize el nombre que se le envia

te puedes guar de esta documentacion [components-and-props](https://reactjs.org/docs/components-and-props.html)

## Entregar la prueba

Una vez tengas el resultado de la app corriendo, pueden comprimir el proyecto y enviarlo al correo darenas@softdreams.co con el asunto 'prueba desarrollador' en el correo también debes incluir tu nombre, celuar tu disponibilidad horaria y tu aspiración salarial

No siendo mas cualquier pregunta me la puedes enviar a darenas@softdreams.co sin ningún problema, estaremos atentos a cualquier novedad

### Happy Code!!




