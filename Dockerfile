	# Use the official Node.js 14 image as the base image
FROM node:16.20.2-alpine3.18
 
# Set the working directory in the container
WORKDIR /app
 
# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
 
# Install the dependencies
RUN npm install
 
# Copy the entire project to the container
COPY . .
 
# Set the environment variables
ENV NODE_ENV=production
ENV PORT=3000
 
# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:both"]