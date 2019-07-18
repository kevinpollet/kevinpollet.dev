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
import twitterIcon from "../assets/twitter-icon.png";
import githubIcon from "../assets/github-icon.png";
import { SocialLink } from "./SocialLink";

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
    <div className="bio">
      <div style={{ display: "flex" }}>
        <img
          alt={site.siteMetadata.author}
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
          ✦ OSS ❤<br />✦ Java, TypeScript, Go, Node.js, Docker, AWS
        </p>
      </div>

      <div className="social-links">
        <SocialLink
          imgSrc={twitterIcon}
          to={`https://twitter.com/${site.siteMetadata.social.twitter}`}
        >
          Twitter
        </SocialLink>
        <SocialLink
          imgSrc={githubIcon}
          to={`https://github.com/${site.siteMetadata.social.gitHub}`}
        >
          GitHub
        </SocialLink>
      </div>
    </div>
  );
};
