# Agenda-Create-from-uml

## Installation du projet

### Docker

Pour installer PostgreSQL et PgAdmin:

```shell
docker-compose up -d
```

Seulement PostgreSQL :

```shell
docker-compose up db
```

Pour configurer l'host de PgAdmin :

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' agenda
```

Renseigner l'addresse dans l'onglet server :
name : agenda
host : le résultat de la commande précédante

### API

```shell
cd api
npm i
npm run start
```

Les tables seront crées via les schéma grace à Sequelize. L'API est root sur ExpressJS.

### Front-End

```shell
cd front
npm i
ng serve
```

En cours de développement (rien ne marche)
