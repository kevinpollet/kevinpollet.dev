/**
 * Copyright © 2019 kevinpollet <pollet.kevin@gmail.com>`
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE.md file.
 */

import Typography from "typography";
import wordpress2016Theme from "typography-theme-wordpress-2016";

const typography = new Typography(wordpress2016Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;
