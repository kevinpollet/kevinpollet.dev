/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { rhythm } from "../utils/typography";
import avatar from "../assets/avatar.jpg";

export const Bio = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: rhythm(1 / 2),
      }}
    >
      <img
        alt={data.site.siteMetadata.author}
        src={avatar}
        style={{
          width: rhythm(2.8),
          height: rhythm(2.8),
          borderRadius: 50,
          marginBottom: 0,
          marginRight: rhythm(1 / 2),
        }}
      />
      <p style={{ marginBottom: 0 }}>
        ✦ Software Engineer <br />
        ✦ Java, TypeScript, Go, Node.js, Docker, AWS <br />✦ OSS ❤
      </p>
    </div>
  );
};
