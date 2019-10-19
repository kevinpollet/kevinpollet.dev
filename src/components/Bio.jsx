/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { rhythm } from "../utils/typography";
import devToIcon from "../assets/devto-icon.svg";

export const Bio = ({ style = {} }) => {
  const { site, avatar, twitterIcon, gitHubIcon } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
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
              devTo
            }
          }
        }
      }
    `
  );

  return (
    <div className="bio" style={style}>
      <Img
        style={{ marginRight: rhythm(1 / 2) }}
        imgStyle={{ borderRadius: 50 }}
        fixed={avatar.childImageSharp.fixed}
      />

      <ul className="description">
        <li>Software Engineer, OSS Enthusiast.</li>
        <li>Always learning and coding with passion.</li>
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

        <li>
          <img
            style={{ marginRight: rhythm(1 / 4) }}
            src={devToIcon}
            alt="Kevin Pollet's DEV Profile"
            height="26"
            width="26"
          />
          <a href={`https://dev.to/${site.siteMetadata.social.devTo}`}>
            Dev.to
          </a>
        </li>
      </ul>
    </div>
  );
};
