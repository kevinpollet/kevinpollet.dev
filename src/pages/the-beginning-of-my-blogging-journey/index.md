---
date: 2019-07-28
title: The beginning of my blogging journey
description: Every journey has a beginning.
---

As said in the description, every journey has a beginning and here is a little write-up for the beginning of my blogging journey. In the past I've created many blogs but nothing was publicly available or updated because I was not satisfied by the result. As a therapy and to improve my writing skills, I will ~~try to~~ post articles on a monthly basis on things I've learned or hacked during my developer journey, which have started 10 years ago, even if it's not perfect in my point of view.

> The best is the enemy of the good — Voltaire

## Gatsby

I've already used static site generators like [Jekyll][1] and [Hugo][2] but I've never used [Gatsby][3] before. When I've decided to create ~~another~~ a blog, it was a good opportunity to try Gatsby. To start my journey I've opened https://www.gatsbyjs.org/tutorial/ in my browser and entered the following commands in my shell:

```shell
$ npx gatsby-cli new kevinpollet.dev
$ cd kevinpollet.dev && npm run develop
```

After many days, I was really pleased by the simplicity and the productivity of this framework. The list of plugins and resources is impressive, the only limit is your creativity. If you're familiar with JavaScript and React, give it a try, I'm sure you'll be pleased.

## Netlify

Same here, I've used many hosting platforms before like [GitHub Pages][4] and [Amazon CloudFront][5] but I've never used [Netlify][6]. I've seen many times on my [Twitter][7] feed that Netlify is awesome and there is a starter plan at _\$0/month_, so I've tried it. I must admit that I'm really impressed by its simplicity and intuitive user interface. To deploy this website I've just done the following steps:

1. Created an account
2. Connected my GitHub repository
3. Clicked the _Deploy site_ button
4. Done

The build command and the deploy directory has been configured for me because Netlify has detected that it's a Gatsby project. In a minute my website is publicly available and deployed automatically after a commit to the _master_ branch 🎉.

[1]: https://jekyllrb.com/
[2]: https://gohugo.io/
[3]: https://www.gatsbyjs.org/
[4]: https://pages.github.com/
[5]: https://aws.amazon.com/cloudfront/
[6]: https://www.netlify.com/
[7]: https://twitter.com/@kevinpollet
