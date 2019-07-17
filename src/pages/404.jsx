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
  <Layout location={location}>
    <SEO title="404" description="Oops, something went wrong" />
    <div>404</div>
  </Layout>
);
