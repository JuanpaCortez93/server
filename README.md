## Description of the project
This project was generated with NEST and it is part of a test created by MushroomSoft (Backend).
A company needs know the city weather conditions for their clients/users. The logic workflow is presented in the following image:

<img src="foto3.png" alt="workflow" />

The modules are the following:
<img src="foto2.png" alt="modules" />

The arquitecture selected is Client-Server to keep things super simple and it is the following:
<img src="foto1.png" alt="arquitecture" />


## Installation

```bash
$ npm install
```

## Running the app
Before run the app you must install and run mongo on your server.
```bash
# run mongo in your localhost
$ mongod
```

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
