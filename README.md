# Agenda-Create-from-uml

## Installation du projet

### Docker

Pour installer la base de donnée :

```shell
docker-compose up -d
```

```shell
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' agenda
```

Renseigner l'addresse dans l'onglet server :
name : agenda
host : le résultat de la commande précédante
