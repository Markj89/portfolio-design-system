FROM node:22-alpine

# Execute working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
# RUN la -la /app npm install --legacy-peer-deps && npm run test
RUN npm ci

COPY . .
RUN npm run build-storybook

EXPOSE 6006
CMD ["npx", "http-server", "storybook-static", "-p", "6006"]