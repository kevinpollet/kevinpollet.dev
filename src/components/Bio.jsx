/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { rhythm } from "../utils/typography";
import kevinpollet from "../assets/kevinpollet.jpg";
import twitter from "../assets/twitter.png";
import github from "../assets/github.png";

export const Bio = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              twitter
              gitHub
            }
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
        alt={site.siteMetadata.author}
        src={kevinpollet}
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

      <ul
        style={{
          listStyle: "none",
          marginBottom: 0,
          marginLeft: "auto",
        }}
      >
        <li>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              alt="Twitter icon"
              style={{ marginBottom: 0, marginRight: 10 }}
              src={twitter}
              width="30"
              height="30"
            />
            <a href={`https://twitter.com/${site.siteMetadata.social.twitter}`}>
              Twitter
            </a>
          </div>
        </li>
        <li>
          <div
            style={{ display: "flex", alignItems: "center", marginBottom: 0 }}
          >
            <img
              alt="GitHub icon"
              style={{ marginBottom: 0, marginRight: 10 }}
              src={github}
              width="30"
              height="30"
            />
            <a href={`https://github.com/${site.siteMetadata.social.gitHub}`}>
              GitHub
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
