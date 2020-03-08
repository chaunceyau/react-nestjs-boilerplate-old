# react-nestjs-boilerplate
Boilerplate with JWT authentication - using React, GraphQL, Apollo, NestJS, &amp; Prisma.

Need to update Readme.

## Getting Started
```
$ docker-compose up -d # creates postgres db & starts prisma
$ cd nestjs && JWT_SECRET=123 PRISMA_ENDPOINT=http://localhosthost:4000 yarn start:old # starts nest server
$ cd client && yarn start # starts react app
```
