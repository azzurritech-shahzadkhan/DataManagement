# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Ensure Vite is properly installed
RUN npm list vite

# Expose the Vite development server port
EXPOSE 5173

# Start Vite with explicit --host
CMD ["npm", "run", "dev", "--", "--host"]

