# Use the Alpine Linux Docker image as the base image
FROM node:alpine

# Expose 8000 port the app runs on, and exposing VSCode debug ports
EXPOSE 8000 9929 9230

# Add additional packages needed to run Gatsby/React
RUN \
  apk add --no-cache python make g++ autoconf automake libtool nasm && \
  apk add vips-dev fftw-dev --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community --repository http://dl-3.alpinelinux.org/alpine/edge/main && \
  rm -fR /var/cache/apk/*

# Install Gatsby command line interface
RUN npm install -g gatsby-cli

# Sets the working directory for the container
WORKDIR /app
# Copy the package.json file to the Docker container
COPY ./package.json .
#Install all required packages defined in package.json
RUN yarn install && yarn cache clean
# Copy the rest of the project files to the Docker container
COPY . .
# Run the 'gatsby develop' command. The -H and 0.0.0.0 parameters set the host to your local machine
# so the app can be access via browser on your local machine
CMD ["gatsby", "develop", "-H", "0.0.0.0" ]