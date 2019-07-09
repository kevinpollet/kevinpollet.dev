/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import md5 from "md5";
import React from "react";
import { rhythm } from "../utils/typography";

export const Bio = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            email
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
        alt={siteMetadata.author}
        src={`https://www.gravatar.com/avatar/${md5(siteMetadata.email)}?s=200`}
        style={{
          width: rhythm(2.8),
          height: rhythm(2.8),
          borderRadius: 50,
          marginBottom: 0,
          marginRight: rhythm(1 / 2),
        }}
      />
      <p style={{ marginBottom: 0 }}>
        ✦ Software Tech Lead @hl2 <br />
        ✦ Java, TypeScript, Go, Node.js, Docker, AWS <br />✦ OSS ❤
      </p>
    </div>
  );
};
