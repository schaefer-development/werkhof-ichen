# frontend

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# to display Hcaptcha, run this and visit http://127.0.0.1:3000/
$ yarn dev -- --hostname 0.0.0.0

# run netlify functions (for email delivery)
$ yarn run functions:serve

# run maildev (mailserver for development)
$ yarn run maildev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
