# Juhmer Tena's Portfolio Website

A statically generated website to showcase different projects from Juhmer Tena.
Uses [Eleventy](https://11ty.dev) as the static site generator.

## Installation

```bash
yarn install --frozen-lockfile
```

## Usage
All public and static assets should be placed in the `public` folder while all
templating and JavaScript/HTML/CSS should go into the `src` folder.

Currently I have not set up a yarn or npm script for development or build
purposes but running the following commands will build the website.

```bash
yarn eleventy
yarn vite build
```

The output of the static site will be in the `dist` folder.