FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install

# Bundle app source
COPY . .
RUN yarn build

EXPOSE 8080

RUN git clone https://github.com/vishnubob/wait-for-it.git

CMD [ "node", "dist/server.js" ]

