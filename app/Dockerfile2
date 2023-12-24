FROM maven:3.8.7-eclipse-temurin-19 as  build
COPY ./back-end .
COPY ./front-end .
CMD ["docker", "build", "-t", "adora/back-end", "./back-end/"]
CMD ["docker", "build", "-t", "adora/front-end", "./front-end/"]
CMD ["docker-compose", "-f" ,"./docker-compose.yml" ,"up"]
EXPOSE 8080
EXPOSE 5432
EXPOSE 3000