FROM maven:3.8.7-eclipse-temurin-19 as maven

WORKDIR .
COPY mvnw .
COPY .mvn .mvn
COPY ./pom.xml .
COPY ./src src
#COPY --from=build-node ./src/main/resources ./src/main/resources

RUN mvn install -DskipTests


WORKDIR /app

COPY ./target/*.jar app.jar
ENTRYPOINT ["java","-Dspring.profiles.active=dev","-jar","app.jar"]
EXPOSE 8080

