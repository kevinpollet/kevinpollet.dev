/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";

export const PostList = ({ posts }) =>
  posts.map(({ id, fields, frontmatter, timeToRead }) => (
    <div key={id} style={{ padding: `${rhythm(1)} 0` }}>
      <h2 style={{ ...scale(0.8), margin: 0, padding: 0, borderBottom: 0 }}>
        <Link to={fields.slug}>{frontmatter.title}</Link>
      </h2>
      <small>
        {frontmatter.date} ✦ 🍱 {timeToRead} min read
      </small>
      <p>{frontmatter.description}</p>
    </div>
  ));
