# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:16-alpine3.12

# set the current working directory for all commands
WORKDIR /usr/src/app

# copy these over first and run 'npm install' so the node_modules will be cached
# until the package.json / lock changes
COPY package.json .
COPY package-lock.json .
RUN npm install -g @angular/cli
RUN npm install

# copy over all code files
COPY . .

# expose internal docker container port to external environment
EXPOSE 4200

# specify default command to run when we run the image
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck