FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# Copy local code to the container image.
COPY . .
