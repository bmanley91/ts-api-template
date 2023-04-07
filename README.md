# ts-api-template
A template rest API written in typescript following Clean Architecture. This repo is meant to be forked so that a "real" service can be built.

## What is included?
* Code structure with:
  * HTTP interface
  * Database connection
* Containerization
  * Dockerfile to build the service for deployment
  * Docker Compose to run locally and execute tests
* Test Runner
* Github Action CICD Configuration

## Setup
Install target node version with [nvm](https://github.com/nvm-sh/nvm):
```
nvm install
```

Install dependencies with
```
yarn install
```

## Build
Compile typescript code with
```
yarn build
```

## Test
Run unit tests with
```
yarn test
```