FROM node:6

# Server installation
COPY server/ /usr/src/lapause.roscanvel/server
WORKDIR /usr/src/lapause.roscanvel/server
RUN npm install

# Frontend installation
COPY client/ /usr/src/lapause.roscanvel/client

EXPOSE 7600
CMD [ "node", "index.js" ]
