/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

module.exports = {
  siteMetadata: {
    title: "Kevin Pollet",
    author: "Kevin Pollet",
    description: "Blog posts by Kevin Pollet",
    siteUrl: "https://kevinpollet.dev",
    social: {
      twitter: "@kevinpollet",
      gitHub: "kevinpollet",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "content", path: `${__dirname}/content` },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              maxWidth: 780,
            },
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-prismjs",
        ],
      },
    },
    "gatsby-plugin-typography",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({
            features: { "nesting-rules": true },
          }),
        ],
      },
    },
  ],
};
