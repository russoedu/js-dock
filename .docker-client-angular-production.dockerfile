# Latest Nginx as base image
FROM nginx

# Install node 12
RUN apt-get update && apt-get install -y curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash -
RUN apt -y install nodejs

# Set Nginx production config
COPY ./nginx/client-production.conf /etc/nginx/conf.d/default.conf

# Set working directory as the client dir
WORKDIR /app/client

# Copy source
COPY ./client-angular .

# Install and cache app dependencies
RUN npm install --quiet

# Build the angular app
RUN npm install -g @angular/cli@9.1.1
RUN ng build --prod=true --output-path=./build
RUN rm -rf node_modules/*
