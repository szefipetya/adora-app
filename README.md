# ADÓRA
### production website link
- http://adora.freeddns.org
### How to download the released images and run locally with docker?
 - ```docker-compose -f .\docker-compose-docker-hub.yml up```

### How to create docker Images locally from the source code and the run it locally?

- ### Step 1: Create the Images locally from the source code
    - ```git clone git@github.com:szefipetya/adora-app.git```
    - ```cd ./adora-app```
    - ```docker build -t adora/back-end ./app/back-end/```
    - ```docker build -t adora/front-end ./app/front-end/```
- ### Step 2: Run the containers together from the local images
    - ```docker-compose -f ./app/docker-compose.yml up```
- ### Step 3: Open the app locally
    - http://localhost:3000

## 1.0 Release docker image links
- docker.io/speterz199/adora-front-end:1.0
- docker.io/speterz199/adora-back-end:1.0
- docker.io/speterz199/adora-db:1.0

## End user usage informations
- ### Test user
    - username: admin
    - password: admin

## Development informations and links
### Version control
For version controlling and C/I we used github. Our public github repository is available here: https://github.com/szefipetya/adora-app

### Issue tracker
We used agile development style during the project. TO ensure the flow of our project's development, we used Trello as our issue-tracker: https://trello.com/b/ZuLQk4OK/adóra


## MVP user stories
User stories can be overlooked in the attached Finalized_User Stories.xlsx
All the user stories are completed.

## User info and KPI 
We used Google analytics to monitor user traffic on our website.
The target KPI will be reached with 2 active users (outside of the development team) by the end of 2023 december.

## marketing one-liner
Ha megoldás kell az adókra, akkor ADÓRA