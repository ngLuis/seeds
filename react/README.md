# React

This project has been generated with [Vite](https://vitejs.dev/).

## Specifications and dependencies

    - Node
    - TypeScript
    - React
    - Vite
    - Vitest
    - Testing Library
    - Docker


## Docker and make

To start the project please follow the next steps:

Docker is used to build and start the application.
You can use make instructions to run commands as a shortcut.
Instructions are referenced in [Makefile](./Makefile)

 - To build docker image:

    ```
        Docker: docker compose build
        Make: make build
    ```

 - To start the project:

    ```
        Docker: docker compose up
        Make: make start
    ```

 - To stop the project:

    ```
        Docker: docker compose down
        Make: make down
    ```

 - To run tests:

    ```
        Docker: docker compose run --rm app npm run test
        Make: make test
    ```

 - To run specific test:

    ```
        Docker: docker compose run --rm app npm run test test_file_name.spec.ts
        Make: make test ARGS=test_file_name.spec.ts
    ```

 - To install a dependency:

    ```
        Docker: docker compose run --rm app npm install dependency_name
        Make: make install-dependency ARGS=dependency_name
    ```

 - To install a dev dependency:

    ```
        Docker: docker compose run --rm app npm install -D dev_dependency_name
        Make: make install-dev-dependency ARGS=dev_dependency_name
    ```