# Use the official OpenJDK image as a base for the back-end service

RUN docker build -t adora/back-end ./back-end/
RUN docker build -t adora/front-end ./app/front-end/
RUN docker-compose up
