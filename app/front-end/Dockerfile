FROM node:17-alpine3.12
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
ENV NODE_ENV=prod
ENV API_HOST=http://81.183.58.110:8080
COPY package.json .
COPY package-lock.json .
RUN npm install -g
COPY . .
EXPOSE 3000

CMD ["npm", "run", "start"]