---
permalink: false
tags: project
title: Portfolio website
preview_img: "/project_images/portfolio-website/main.webp"
preview_img_desc: portfolio website preview image
brief_desc: The website that you're seeing right now! Responsive and uses web
    components.
strength: 1
---
Initial Creation Date: **Mar. 28, 2022**

<section class="project-images">
  <figure>
    <img src="{{ '/project_images/portfolio-website/main.webp' | url }}" />
    <figcaption>Portfolio website's main page</figcaption>
  </figure>
  <figure>
    <img
        src="{{ '/project_images/portfolio-website/example-modal.webp' | url }}"
    />
    <figcaption>A modal showcasing a project's details</figcaption>
  </figure>
</section>

This portfolio website was created to maintain a list of projects, contact
information, and my resume. Entirely written in native HTML, JS, and CSS. The
only external libraries used and deployed are a dialog polyfill from the Google
Chrome team and Lit Elements for web component hydration. I do also use the Vite
to bundle my JavaScript files and Eleventy to statically generate the site. The
icons within the webpage are taken from Bootstrap v1.8.1.

##### Notable things about this project:
<dl>
  <dt>Web Components:</dt>
  <dd>
    At first I used native web components but ran into many issues such as the
    fallback content in the description modal being rendered if modules were not
    supported. I ended up having to refactor the web components to only display
    the preview as fallback content and began to use Lit Element in order to
    support hydration and gradually upgrade the web components. This helped to
    keep the components modular.
  </dd>
  <dt>Static Site Generation:</dt>
  <dd>
    At first, I just wrote plain HTML without any developer tools which was not
    good for maintainability. I ended up using Eleventy in order to make each
    project more modular and keep them separate from the main HTML file. Overall,
    I enjoyed the experience of using it and think it's a really neat tool. I do
    plan on making the entire website more modular, but baby steps.
  </dd>
  <dt>JavaScript Bundling:</dt>
  <dd>
    This was the first time I used a bundling tool and decided to use Vite
    because some benchmarks showed that it delivered smaller resources. Getting
    it to work with Eleventy was a bit ifficky but allowed me to use Lit Element
    so it was overall worth the pain.
  </dd>
  <dt>Dialog polyfill</dt>
  <dd>
    While creating this website, I learned that the dialog element I was taking
    advantage of was just recently added to Firefox 98. In order to support
    older versions of Firefox browsers, I decided to implement
    <a href="https://github.com/GoogleChrome/dialog-polyfill">
        Google Chrome's dialog polyfill.
    </a>
  </dd>
</dl>
