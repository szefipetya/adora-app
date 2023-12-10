run-docker:
	cd ./src/main/resources/docker && docker-compose up
build:
	mvn install -DskipTests=true
run-backend:
	cd ./target && java -jar felo-0.0.1-SNAPSHOT.jar