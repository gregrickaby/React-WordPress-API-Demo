# Hello World: React

My little sandbox to help me understand React. I was initially inspired by [this post](https://medium.freecodecamp.com/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76) on Medium, by [Samer Buna](https://twitter.com/samerbuna).

## Set up
To get started, install the dependencies using either [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/).

###Yarn

```bash
yarn install
```

### NPM

```bash
npm install
```

## Compile

Because this Hello World demo uses JSX, you will need to compile with [Babel](http://babeljs.io/). Read more about [CLI options](http://babeljs.io/docs/usage/api/#options).

```bash
babel script.js --watch  --out-file dist/script.min.js --presets es2015,react --minified  --source-maps inline
```