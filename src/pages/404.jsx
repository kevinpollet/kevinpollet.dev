/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

export default ({ location }) => {
  const title = "404";
  const description = "Sorry, the page you were looking for doesn't exist.";

  return (
    <Layout location={location} title={title}>
      <SEO title={title} description={description} />
      <h2 style={{ borderBottom: 0 }}>{description}</h2>
    </Layout>
  );
};
