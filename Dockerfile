# base image (https://hub.docker.com/_/node)
FROM node:16-alpine

# Create and change to the app directory.
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
COPY . .

# Install production dependencies.
RUN yarn

# Build project distribution.
RUN yarn build

# Run the web service.
CMD [ "yarn", "start" ]
