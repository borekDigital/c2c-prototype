# ---------
# Variables
# ---------
# Make variables
MAKE_DOLLAR := $$

# Project variables
PROJECT_PREFIX = c2c

# Docker variables
DOCKER_LIST = docker ps -a --filter name=${PROJECT_PREFIX}
DOCKER_CLEAR = docker rm ${MAKE_DOLLAR}(docker ps -qa --filter name=${PROJECT_PREFIX})
DOCKER_BUILD = docker-compose build --no-cache
DOCKER_START = docker-compose up -d --force-recreate --remove-orphans
DOCKER_STOP = docker-compose stop

# -----------
# DB commands
# -----------
# Generate migration
migration-add:
	yarn migration:add

# Run migrations
migration-run:
	yarn migration:run

# Run alias
migration: migration-run

# --------------------
# Application commands
# --------------------
# Setup for development
setup-dev:
	@echo "\n"
	@echo Run Backend Dev Setup
	cp -n .env.example .env || true
	yarn setup:dev
	@echo "\n"

# Run in development mode
dev:
	@echo "\n"
	@echo Run Backend Dev
	${DOCKER_START}
	yarn dev

# Setup for build
setup-build:
	@echo "\n"
	@echo Run Backend Build Setup
	yarn setup:build
	@echo "\n"

# Generate the build
build:
	@echo "\n"
	@echo Generate Backend Build
	yarn build
	@echo "\n"

# Run the build
start:
	@echo "\n"
	@echo Start Backend Build
	yarn start

# Stop docker containers
stop:
	${DOCKER_STOP}
	${DOCKER_CLEAR}

# Current status of backend
status:
	${DOCKER_LIST}

# Run backend tests
tests:
	yarn test:unit
	${DOCKER_START}
	yarn test:e2e
	${DOCKER_STOP}
	${DOCKER_CLEAR}
