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
