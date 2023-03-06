build:
	- docker compose build

start:
	- docker compose up

down:
	- docker compose down

test:
	- docker compose run --rm app npm run test $(ARGS)

install-dependency:
	- docker compose run --rm app npm install $(ARGS)

install-dev-dependency:
	- docker compose run --rm app npm install -D $(ARGS)