<img src="https://nestjs.com/img/logo_text.svg" align="right" width="200" alt="Nest Logo" />

# Backend
> for Change2Collect (C2C) application, powered by [Nest](https://github.com/nestjs/nest)

## Getting started
> If you want to start the complete project, follow the [general setup instructions](../README.md)

## Local Backend Development
Make sure to have [yarn](https://classic.yarnpkg.com/en)
and [Docker](https://docs.docker.com/get-docker/) (including *docker compose*) installed.

### Make setup
```bash
make setup-dev
```

### Optional: Local environment overrides
Copy the file `.env.local.example` to `.env.local` and change your desired variables in the copied file.

### Run The App
```bash
make dev
```

## Build

### Setup
```bash
make setup-build
```

### Generate The Build
```bash
# make command
make build
```

### Start The Build
```bash
make start
```

## Tests
### Make tests
```bash
make tests
```

### Or step by step
#### 1. Unit tests
```bash
yarn test:unit
```

#### 2. End-to-end tests
```bash
docker-compose up -d
yarn test:e2e
docker-compose stop
```

## Postgres DB

### Local connection to the database
#### 1. Start docker container, if it is not already running
```bash
docker-compose up -d
```

#### 2.a Connection via pgAdmin
* visit http://localhost:8080
* enter `{PGADMIN_DEFAULT_EMAIL}` and `{PGADMIN_DEFAULT_PASSWORD}`

*See the [pgAdmin docs](https://www.pgadmin.org) for further information*

#### 2.b Connection via bash
```bash
docker-compose run postgres bash
```
```bash
psql --host=postgres --username={POSTGRES_USER} --dbname={POSTGRES_DB}
```

enter `{POSTGRES_PASSWORD}`
  
*For detailed explanation on how things work, run `help`
or check out the [Postgres docs](https://www.postgresql.org/docs).*

run `exit` to exit

## Admin
> powered by [AdminBro](https://softwarebrothers.github.io/admin-bro-dev)

*visit http://localhost:4000/admin*  
--> if there aren't any admin users set yet, enter `{SUPER_ADMIN_EMAIL}` and `{SUPER_ADMIN_PASSWORD}`

## Nest
For detailed explanation on how things work, run 
```bash
yarn help:me
```
or check out the [Nest docs](https://docs.nestjs.com).
