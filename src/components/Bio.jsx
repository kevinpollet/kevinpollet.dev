/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import { rhythm } from "../utils/typography";

export const Bio = () => {
  const { site, avatar, twitterIcon, gitHubIcon } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 70, height: 70) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        twitterIcon: file(relativePath: { eq: "twitter-icon.png" }) {
          childImageSharp {
            fixed(width: 26, height: 26) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        gitHubIcon: file(relativePath: { eq: "github-icon.png" }) {
          childImageSharp {
            fixed(width: 26, height: 26) {
              ...GatsbyImageSharpFixed
            }
          }
        }
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
    <div className="bio">
      <Img
        style={{ marginRight: rhythm(1 / 2) }}
        imgStyle={{ borderRadius: 50 }}
        fixed={avatar.childImageSharp.fixed}
      />

      <ul className="description">
        <li>✦ Software Engineer</li>
        <li>✦ Java, TypeScript, Go, Node.js, Docker, AWS</li>
        <li>✦ OSS ❤</li>
      </ul>

      <ul className="links">
        <li>
          <Img
            style={{ marginRight: rhythm(1 / 4) }}
            fixed={twitterIcon.childImageSharp.fixed}
          />
          <a href={`https://twitter.com/${site.siteMetadata.social.twitter}`}>
            Twitter
          </a>
        </li>
        <li>
          <Img
            style={{ marginRight: rhythm(1 / 4) }}
            fixed={gitHubIcon.childImageSharp.fixed}
          />
          <a href={`https://github.com/${site.siteMetadata.social.gitHub}`}>
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};
