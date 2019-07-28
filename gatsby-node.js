/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

const { resolve } = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = resolve(`src/templates/postTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
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
        path: node.fields.slug,
        component: postTemplate,
        context: {
          slug: node.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const postPath = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: `posts${postPath}`,
    });
  }
};
