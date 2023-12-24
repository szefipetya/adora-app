FROM maven:3.8.7-eclipse-temurin-19 as maven

WORKDIR .
COPY mvnw .
COPY .mvn .mvn
COPY ./pom.xml .
COPY ./src src
COPY ./apache-maven-3.9.6 apache-maven-3.9.6
#COPY --from=build-node ./src/main/resources ./src/main/resources

ENV M3_HOME=./apache-maven-3.9.6
RUN mvn install -DskipTests


WORKDIR /app

COPY ./target/*.jar app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=dev","-jar","app.jar"]
EXPOSE 8080

