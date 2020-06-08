# React WordPress REST API Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/be9fb77e-a2a6-4ef0-b3ac-fd0ae72914af/deploy-status)](https://app.netlify.com/sites/react-wordpress-api-demo/deploys)

Create an single page app using the WordPress [REST API](https://developer.wordpress.org/rest-api/) and Create React App.

_NOTE: This repo is dated, and needs to be refactored to use [React Hooks](https://reactjs.org/docs/hooks-intro.html)._

https://react-wordpress-api-demo.netlify.app/

## Development

Clone the repo:

```bash
git clone git@github.com:gregrickaby/React-WordPress-API-Demo.git
```

Install dependencies:

```bash
cd React-WordPress-API-Demo && yarn
```

Start dev server:

```bash
yarn start
```

Build a production ready app:

```bash
yarn build
```

## FAQ

### I don't see posts

It's because your web broswer is blocking [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). Disable tracking protection in Firefox and/or any ad blockers.

### I want to use my WordPress REST-API endpoint

1. Open `/src/config.js`
2. Change `wordPressURL` to match your website

```js
  options: {
    wordPressUrl: "https://YOUR-WORDPRESS-WEBSITE-URL/wp-json/wp/v2/posts",
  },
```

3. Run `yarn start` or `yarn build` to view your data

---

Built with [Create React App](https://github.com/facebook/create-react-app), [WordPress](https://wordpress.org), and hosted on [Netlify](https://www.netlify.com/)
