/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve(`src/templates/postTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const { edges } = result.data.allMarkdownRemark;

    return edges.forEach(({ node }, index) => {
      const previous =
        index !== edges.length - 1 ? edges[index + 1].node : undefined;

      const next = index !== 0 ? edges[index - 1].node : undefined;

      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        context: {
          previous,
          next,
        },
      });
    });
  });
};
