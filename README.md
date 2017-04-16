# React SPA Boilerplate

React SPA boilerplate for open source project

<a href="http://lucasbassetti.com.br/react-spa-boilerplate/" target="_blank"> <img src="https://cloud.githubusercontent.com/assets/1014326/25073696/406d6aa6-22c2-11e7-99fd-3d09d09b37d6.png" width="600"  />
</a>

## Features

- Simple `index.html` loading `bundle.js`.
- Starter `index.jsx` for React.
- All code following Airbnb's JavaScript (ES6) style guide with ESlint.
- Webpack dev server with automatic reloading. Start with: `npm start`.
- Deployment build with `npm run build`.

## Components

- [Babel](https://babeljs.io) for ES6 support.
- [Chai](http://chaijs.com/) as BDD / TDD assertion library.
- [ESlint](http://eslint.org) for ES6 linting using Airbnb's JS style guide.
- [Mocha](https://mochajs.org/) as test framework.
- [Nyc](https://github.com/istanbuljs/nyc) for test coverage
- [React](https://facebook.github.io/react/) as front-end view library.
- [Webpack](https://webpack.github.io) for bundling of JavaScript modules.

## Getting Start

Run the following commands in your terminal

```bash
git clone https://github.com/LucasBassetti/react-spa-boilerplate.git
cd react-spa-boilerplate
npm install
npm start
```

Then open [http://localhost:8080/](http://localhost:8080/) on your web browser.

### Testing

1. Run `npm test` for simple test.
2. Run `npm run test:watch` for watch tests.
3. Run `npm run test:coverage` for test coverage. This will generate a `coverage` folder. Open the `index.html` file in this folder to check the results.

## Deploying

For deployment, run `npm run build` and upload `build/` to your server.

## License

MIT · [Lucas Bassetti](http://lucasbassetti.com.br)
