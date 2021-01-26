# ---------
# Variables
# ---------
# Make variables
MAKE_DOLLAR := $$

# Project variables
PROJECT = change2collect
PROJECT_PREFIX = c2c

# --------------------
# Application commands
# --------------------
# Setup the project
setup-dev:
	@echo "\n"
	@echo Run Setup
	@echo ---------
	cd backend && $(MAKE) setup-dev
	cd frontend && $(MAKE) setup-dev
	@echo ---------
	@echo End Setup
	@echo "\n"

# Run the project in development mode
dev-backend:
	$(MAKE) dev -C backend

dev-frontend:
	$(MAKE) dev -C frontend

dev:
	@echo "\n"
	@echo Start Dev
	@echo ---------
	$(MAKE) -j 2 dev-backend dev-frontend
	@echo ---------
	@echo "\n"
