---
date: 2019-08-10
title: How to use your .dockerignore as a whitelist
description: Maintaining the exclusion patterns in your .dockerignore can be hard as your project grows and evolves. Using this file as a whitelist is an elegant way to keep things clean, secure and easy to maintain.
---

Many tools use ignore files to exclude files from build, process or publish steps (e.g. `.npmignore` for npm, `.gitignore` for Git and `.dockerignore` for Docker). As your project grows, evolves, it can be hard to maintain the exclusion patterns and, as a side effect, you can expose unwanted or sensitive files. Using your `.dockerignore` as a whitelist can be an elegant option to avoid these mistakes and to reduce the effort to keep things up to date.

## What's the `.dockerignore` for?

When you're creating a Docker image, the very first step is to define the build [instructions][1] in a `Dockerfile`. The second step is to run the `docker build PATH` command from the Docker CLI. The `PATH` argument is the path to the folder containing your `Dockerfile`. As a result, the Docker CLI will send the build `context` to the Docker daemon.

### The build `context`

Every file and folder within the given `PATH` are `tar`d by the Docker CLI and sent to the Docker daemon. These files and folders compose the build `context`. Your Docker image will be built with this `context`, so unwanted files sent to the daemon can be packaged by error in the final image with the `ADD` or `COPY` instructions.

Also, the Docker daemon can be executed on a remote machine, so it's better to avoid sending large, unnecessary and sensitive files to it.

Remember, `ADD` and `COPY` instructions are run by the daemon and never by the CLI, so they are not used to remove unwanted files from the build `context`.

### Exclude files from the build `context`

When you invoke the `docker build` command, the Docker CLI looks for a file named `.dockerignore` in the root folder of the build `context` (i.e. in the root folder of the given `PATH`). If this file exists, every file and folder matching the [exclusion patterns][3] will not be included in the `tar` archive sent to the Docker daemon. The Docker build will be faster and the risk of packaging unwanted files reduced.

For example, if you want to exclude the `.git` folder and all markdown files from the build `context`, add the following content to your `.dockerignore`:

```shell
.git
*.md
```

## Use your `.dockerignore` as a whitelist

Blacklist vs whitelist is a long debate and, I think, both types have its use case. From my experience, you'll have more files to exclude from your build `context` than to include, so to keep things clean and secure, whitelisting files is less error-prone.

If you've read the `.dockerignore` [documentation][3], you may have noticed the following lines:

> Finally, you may want to specify which files to include in the context, rather than which to exclude. To achieve this, specify \* as the first pattern, followed by one or more! exception patterns.

Pretty easy!

As an example, the following `.dockerignore` instructs the Docker CLI to exclude everything excepted the `JS` files within the `lib` folder from the build `context`:

```shell
# Ignore everything
*

# Allow files and folders with a pattern starting with !
!lib/**/*.js
```

With a whitelist it's also possible to publish unwanted or sensitive files from a whitelisted folder but, in my opinion, this issue is minor.

## Summary

Now that you know how to blacklist or whitelist files with your `.dockerignore`, choose the best option for your use case. To conclude, using your `.dockerignore` as a whitelist allows to:

- Exclude by default everything from the build `context`
- Reduce the size of the `tar` archive sent to the Docker daemon
- Reduce the risk of packaging unwanted or sensitive files in your Docker `image`
- Reduce the effort to keep exclusion patterns up to date

PS: You can use the same trick with your `.gitignore` or `.npmignore`. For npm, the best practice is to use the [files][4] property in your `package.json` instead of a `.npmignore` file.

[1]: https://docs.docker.com/engine/reference/builder/
[2]: https://golang.org/pkg/path/filepath/#Match
[3]: https://docs.docker.com/engine/reference/builder/#dockerignore-file
[4]: https://docs.npmjs.com/files/package.json#files
