# Use the official Node.js 16 image as the base image
FROM node:16.20.2-alpine3.18
 
# Set the working directory in the container
WORKDIR /app
 
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
 
# Install the dependencies
RUN npm install
 
# Copy the entire project to the container
COPY . .

# Start the application
CMD ["npm", "run", "start:both"]