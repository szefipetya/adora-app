# ADÓRA-app
## How to release the app in docker
### Create Images
 - ```docker build -t adora/back-end ./app/back-end/```
 - ```docker build -t adora/front-end ./app/front-end/```
### Create and run containers
 - ```docker-compose -f ./app/docker-compose.yml up```
### Stop containers
 - ```docker-compose -f ./app/docker-compose.yml down```