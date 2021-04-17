<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripcion

Esta prueba se realizo con ayuda del framework Nest
este proyecto cuenta con docker-compose para correr un servidor en el puerto 3000
se debe tener instalado docker y docker-compose.

## Instalacion

- instalar docker y docker-compose.
- Correr la siguiente linea en bash para  ejecutar los dos contenedores app y mysql.

```bash
$ docker-compose up -d
```

## Correr la app

- El contenedor  por defecto corre con npm  run start.
pero podemos  comentar esta linea en el archivo docker-compose.yml y correr las siguientes lineas
```bash
# terminal 
$ docker-compose exec app sh

# contenedor
$ npm run start:dev

```

- El siguente paso podemos usar Postman y usar los servicios que importan la informacion
en los archivos CSV a la BD. importante  ejecutar en el suguiente orden para no tener problemas de
relacion.

- /categories/import
- /suppliers/import
- /products/import

# Despliegue publico.

- el proyecto se encuentra en una instancia de aws. 
- el proyecto esta corriendo un contenedor de docker. se que hay un mejor servicio de aws para esto.
pero tome la desicion de dejarlo en la instancia. para enlazaro mas facil a un nginx y publicarlo.
- dominio publico: https://api.test-backend-serempre.ga/

# Cosas Interesante

- no conocia del framework  esta divertido pero por falta de tiempo 
hay cosas que me cuestan aun como validar los request de las validaciones.
- No sabia como organizar las clases de los objectos, entonces tome la desicion de 
dejarlo modularizado. para que sea un poco mas escalable y facil de entender cada clase.

## Test

```bash
# unit tests
$ npm run test

```

## Informacion de contacto

- Author - juan carlos perdomo quiceno
- Website - https://cabuweb.com/
- email - jcpq60981@gmail.com

