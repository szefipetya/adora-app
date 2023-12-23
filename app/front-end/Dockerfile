FROM node:17-alpine3.12
WORKDIR /
ENV PATH /node_modules/.bin:$PATH
COPY package.json .
COPY package-lock.json .
RUN npm install -g
COPY . .
EXPOSE 3000
CMD ["npm", "start"]