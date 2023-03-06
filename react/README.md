# REACT SEED

This project has been generated with [Vite](https://vitejs.dev/).

To start the project please follow the next steps:

## DOCKER

Docker is used to build and start the application.

 - To build docker image:

    ```
        docker compose build
    ```

 - To start the project:

    ```
        docker compose up
    ```

 - To stop the project:

    ```
        docker compose down
    ```

 - To run tests:

    ```
        docker compose run --rm app npm run test
    ```

 - To run specific test:

    ```
        docker compose run --rm app npm run test test_file_name.spec.ts
    ```

 - To install a dependency:

    ```
        docker compose run --rm app npm install dependency_name
    ```

 - To install a dev dependency:

    ```
        docker compose run --rm app npm install -D dev_dependency_name
    ```

## SHORTCUTS WITH MAKE

You can use make instructions to run the commands seen before.
Instructions are referenced in [Makefile](./Makefile)

 - To build docker image:

    ```
        make build
    ```

 - To start the project:

    ```
        make start
    ```

 - To stop the project:

    ```
        make down
    ```

 - To run tests:

    ```
        make test
    ```

 - To run specific test:

    ```
        make test ARGS=test_file_name.spec.ts
    ```

 - To install a dependency:

    ```
        make install-dependency ARGS=dependency_name
    ```

 - To install a dev dependency:

    ```
        make install-dev-dependency ARGS=dev_dependency_name
    ```