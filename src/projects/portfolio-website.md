---
permalink: false
tags: project
title: Portfolio website
preview_img: "/project_images/portfolio-website/main.webp"
preview_img_desc: portfolio website preview image
brief_desc: The website that you're seeing right now! Responsive and uses web
    components.
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
information, and my resume. Entirely written in native HTML, JS, and CSS and
does not include any external libraries or source code. The icons within the
webpage are taken from Bootstrap v1.8.1.

##### Notable things about this project:
<dl>
  <dt>Web Components:</dt>
  <dd>
    I ended up extending the <code>&lt;article&gt;</code> element to create each
    project. This really helped when I was creating and adding projects to this
    website since it helped to keep everything relatively modular while allowing
    me some customizability.
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
