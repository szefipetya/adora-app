## ADORA application

### Prerequisites

- Java 17
- docker
- maven

## PostgreSQL

We are using a docker image. A configuration file is provided under resources/docker.

- ```cd ./src/main/resources/docker```
- ```docker-compose up```

### Build

- mvn install -DskipTests=true

### Run

- ```cd ./target```
- ```java -jar felo-0.0.1-SNAPSHOT.jar ```

