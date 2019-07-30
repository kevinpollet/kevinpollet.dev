/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import Typography from "typography";
import gitHubTheme from "typography-theme-github";

gitHubTheme.overrideThemeStyles = () => ({
  a: {
    color: "#14997e",
    fontFamily: "Lora",
    fontStyle: "italic",
    textDecoration: "none",
  },
  "a:hover": {
    textDecoration: "underline",
  },
});

const typography = new Typography(gitHubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
