/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

export const SEO = ({ title, description }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  const resolvedTitle = title || data.site.siteMetadata.title;
  const resolvedDescription = description || data.site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={resolvedTitle}
      titleTemplate="%s ✦ kevinpollet.dev"
      meta={[
        {
          name: "description",
          content: resolvedDescription,
        },
        {
          property: "og:title",
          content: resolvedTitle,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:description",
          content: resolvedDescription,
        },
        {
          property: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: data.site.siteMetadata.author,
        },
      ]}
    />
  );
};
