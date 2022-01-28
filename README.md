# kevinpollet.dev

[![Netlify Status](https://api.netlify.com/api/v1/badges/a4c8c58d-9e65-40a3-87b3-30d62ec4f95e/deploy-status)](https://app.netlify.com/sites/amazing-swanson-8df184/deploys)

This repository contains the source code for https://kevinpollet.dev website. This site is built
using [Hugo](https://gohugo.io/) and hosted on [Netlify](https://www.netlify.com/).

## Editing

Launch a local Hugo server with live reload by running (append `-F` for including future posts):

```shell
$ hugo server -D
```

## Deploying

Deployment to Netlify happens automatically when pushing to master. Build the deployed artifact locally by running the
following command:

```shell
$ hugo --gc --minify
```

## License

[MIT](./LICENSE)
