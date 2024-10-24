FROM node:20.18-alpine

RUN apk add --no-cache shadow

# Create a new user
RUN useradd -ms /bin/bash appuser

# Set the working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY --chown=appuser:appuser . .

RUN mkdir -p dist && chown -R appuser:appuser dist

USER appuser

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
