FROM amazoncorretto:19 AS build

WORKDIR .
COPY mvnw .
COPY .mvn .mvn
COPY ./pom.xml .
COPY ./src src
COPY ./apache-maven-3.9.6 apache-maven-3.9.6
#COPY --from=build-node ./src/main/resources ./src/main/resources

ENV M3_HOME=./apache-maven-3.9.6
RUN ./apache-maven-3.9.6/bin/mvn install -DskipTests

FROM eclipse-temurin:19-jre-alpine

WORKDIR /app

COPY --from=build target/*.jar app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=dev","-jar","app.jar"]
EXPOSE 8080

