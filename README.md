# frontend

## Build Setup

```bash
# install dependencies
$ npm install
```

If `npm install` fails while building `sharp`, you have libvips installed
system-wide, and `sharp` (a dependency of the Netlify CLI) tries to compile
against it instead of using its prebuilt binary. Install with
`SHARP_IGNORE_GLOBAL_LIBVIPS=1 npm install` (or `npm ci`) instead.

```bash

# serve with hot reload at localhost:3000
$ npm run dev

# to display Hcaptcha, run this and visit http://127.0.0.1:3000/
$ npm run dev -- --hostname 0.0.0.0

# run netlify functions (for email delivery)
$ npm run functions:serve

# run maildev (mailserver for development)
$ npm run maildev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
