# MERN Api

Heros API using MERN stack. Every request must only accept this: `Content-type: application/json`.

### Features
- [] CRUD `heros` 

## Tables


### Heros

Column | Type
------ | ----
_id | int sequence ( PK )
name | string
description | string


### Author

Yari Ivan Taft

- GitHub: https://github.com/yaritaft
- Website: http://yaritaft.com
- LinkedIn: https://www.linkedin.com/in/yari-ivan-taft-4122a7153/

### Badges
[![Build Status](https://travis-ci.com/yaritaft/vindow-challenge.svg?branch=master)](https://travis-ci.com/yaritaft/vindow-challenge)
[![Coverage Status](https://coveralls.io/repos/github/yaritaft/vindow-challenge/badge.svg?branch=master)](https://coveralls.io/github/yaritaft/vindow-challenge?branch=master)

## Table of contents

- [Technology](#Technology)
- [Routes](#Routes)
- [PreRequisites](#Pre-requisites)
- [Run APP](#Run-APP)
- [Preload data](#Preload-data)
- [Run tests](#Run-tests)
- [Standards applied](#Standards-applied)
- [Deployment](#Deployment)

## Technology

- Programming languaje: NodeJS 14
- APP Framework: Express
- Containers: Docker, Docker-compose
- Deployment: Coveralls and Travis

## Routes

- Create and list of heros: http://127.0.0.1:4000/api/heros
- Specificc heros (Put, Delete, Get) : http://127.0.0.1:4000/heros/<id>

## Pre-requisites

- Docker and docker compose installed.
- Linux/Mac terminal (Or emulated linux on Windows)
- No services running on localhost port 27017 or 4000.

### Run APP

1) Execute script to run migrations and create db.
```
chmod 777 ./up_dev.sh
./up_dev.sh
```

2) Go to the swagger and test the app or consume api through curl or postman.

3) Press Control + C to stop the app.

### Preload data

Coming soon.

### Run tests

Being at the same point before last step type:

```
chmod 777 ./up_test.sh
./up_test.sh
```

### Precommit hooks

Coming soon

### Standards applied

Coming soon

### Deployment

There is a build in a remote environment in Travis. That platform checks that
the build is valid and that none of the tests are failing. If everything is
okay, then the code coverage is sent to coveralls and in that site the test
coverage can be reviewed in detail.