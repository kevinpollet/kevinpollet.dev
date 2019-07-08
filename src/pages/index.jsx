/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { graphql } from "gatsby";
import React from "react";
import { Layout } from "../components/Layout";

export default ({ data }) => (
  <Layout siteTitle={data.site.siteMetadata.title}>Content</Layout>
);

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
