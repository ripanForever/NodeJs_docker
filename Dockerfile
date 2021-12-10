FROM node:lts-alpine
WORKDIR /app.js
COPY package.json /app.js
COPY ./views /app.js
RUN npm install 
COPY . /app.js
CMD ["npm", "start"]
