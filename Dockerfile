
FROM node:18-alpine

WORKDIR /code

COPY package.json ./
RUN npm install

# Copy the whole codebase to the container
COPY . .

# Expose port and start the application
EXPOSE 3000

CMD [ "npm", "run", "dev" ]
