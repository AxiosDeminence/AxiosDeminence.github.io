---
permalink: false
tags: project
title: Roleplay Roller Scraper
brief_desc: NodeJS and Node-API powered web scraper to save a live relational database with rows accessible on a website.
---
Some asynchronous roleplay communities use traditional tabletop RPG mechanics
that would require the use of dice for some randomness. One community that I was
a part of had a website dedicated to these rolls, but the owner of the website
eventually became inactive and drifted away from the community. In order to
preserve these rolls, which were necessary for some recordkeeping, I made a web
scraper to save them into a CSV file using NodeJS to make and parse requests and
Node-API to link a csv builder to find out the next point.

##### Notable things about this project:

<dl>
    <dt>Project structure management and git submodules</dt>
    <dd>
        This project taught me a lot about different ways to handle submodule
        directories. Eventually, I ended up doing a hybrid model where I had library
        code in the root directory in their own folders and a distributed directory
        structure for bespoken code due to the simplicity of the project.
    </dd>
    <dt>Creating Node.js Native Addons with Node-API/N-API</dt>
    <dd>
        The project originally was just going to be a wrapper for a CSV parser that
        would end up looking for the missing IDs within a list of files. However, I
        ended up deciding to create it into a full fledged web crawler. As such, I
        needed to port my already-written C code to NodeJS. Although it took a while
        to learn, I learned how to create native Node.js addons using Node-API.
    </dd>
    <dt>Makefiles, implicit variables and rules, and automatic dependency generation</dt>
    <dd>
        While creating the Makefile, the first thing I learned was implicit variables
        and rules where Makefiles can imply dependencies based off of the target
        (such as main.c creating main.o) and compilation rules. These include
        implicit variables and tags that could be set to use these implicit rules.
        However, since I used a distributed directory structure, I had to write my
        own rules to compile to different directories. This led to me researching
        automatic dependency generation through some C preprocessor flags ultimately
        simplifying the Makefile structure instead of explicitly writing every
        dependency.
    </dd>
    <dt>Linking C object files and libraries</dt>
    <dd>
        While a minor part of the project, I learned how to link shared dynamic
        libraries and static libraries even in different directories.
    </dd>
    <dt>Making ANSI- and ISO C89/C90-compliant C code</dt>
    <dd>
        While I do end up using GNULib's argp library to create a main executable
        (mainly for testing), all other code is ANSI compliant. While writing this,
        I actually had the chance to learn the reasons for certain specifications of
        the C89/C90 standards and how to accomodate the strict standards.
    </dd>
</dl>