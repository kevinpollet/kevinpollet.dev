/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

module.exports = {
  siteMetadata: {
    author: "Kevin Pollet",
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
            resolve: `gatsby-remark-images`,
            options: {
              linkImagesToOriginal: false,
              maxWidth: 741,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    "gatsby-plugin-typography",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
  ],
};
