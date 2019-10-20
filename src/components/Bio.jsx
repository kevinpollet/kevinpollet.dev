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
import gitHubIcon from "../assets/github-icon.png";
import twitterIcon from "../assets/twitter-icon.png";

export const Bio = ({ style = {} }) => {
  const { site, avatar } = useStaticQuery(
    graphql`
      query {
        avatar: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fixed(width: 60, height: 60) {
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

      <p className="description">
        Software Engineer, OSS Enthusiast. <br />
        Always learning and coding with passion.
      </p>

      <ul className="links">
        <li>
          <a
            href={`https://twitter.com/${site.siteMetadata.social.twitter}`}
            rel="noopener noreferrer"
            target="blank"
          >
            <img
              style={{ marginRight: rhythm(1 / 4) }}
              src={twitterIcon}
              alt="Kevin Pollet's Twitter Profile"
              height="26"
              width="26"
            />
          </a>
        </li>
        <li>
          <a
            href={`https://github.com/${site.siteMetadata.social.gitHub}`}
            rel="noopener noreferrer"
            target="blank"
          >
            <img
              style={{ marginRight: rhythm(1 / 4) }}
              src={gitHubIcon}
              alt="Kevin Pollet's GitHub Profile"
              height="26"
              width="26"
            />
          </a>
        </li>

        <li>
          <a
            href={`https://dev.to/${site.siteMetadata.social.devTo}`}
            rel="noopener noreferrer"
            target="blank"
          >
            <img
              style={{ marginRight: rhythm(1 / 4) }}
              src={devToIcon}
              alt="Kevin Pollet's DEV Profile"
              height="26"
              width="26"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
