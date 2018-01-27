FROM node

# prepare app directory
RUN mkdir -p /app
ADD . /app

# install dependencies
WORKDIR /app
RUN npm install -g typescript
RUN npm install

# rebuild sass to set the sys environment
RUN npm rebuild node-sass --force

# build the app
RUN npm run build:ssr

# expose the app port
EXPOSE 4000

# start the app
CMD ["node", "dist/server.js"]