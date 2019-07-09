/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

module.exports = {
  siteMetadata: {
    author: "Kevin Pollet",
    email: "pollet.kevin@gmail.com",
    siteUrl: "https://kevinpollet.dev",
    social: {
      twitter: "@kevinpollet",
      gitHub: "kevinpollet",
    },
  },
  plugins: [
    "gatsby-plugin-typography",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: { name: "content", path: `${__dirname}/content` },
    },
    "gatsby-transformer-remark",
  ],
};
