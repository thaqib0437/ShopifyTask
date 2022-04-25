FROM node:16

WORKDIR /app

COPY package*.json ./

ARG NODE_ENV
RUN if [ "$NODE_ENV = dev" ]; \
        then npm install;\
        else npm install --only=production;\
    fi

ENV PORT 3001

COPY . .

EXPOSE ${PORT}

CMD ["node", "dist/index.js"]
