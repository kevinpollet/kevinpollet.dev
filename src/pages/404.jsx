/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { Layout } from "../components/Layout";
import { SEO } from "../components/SEO";

export default ({ location }) => (
  <Layout location={location} title="404">
    <SEO title="404" description="Oops, something went wrong" />
    <h2>Sorry, the page you were looking for doesn't exist.</h2>
  </Layout>
);
