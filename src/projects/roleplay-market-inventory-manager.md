---
permalink: false
tags: project
title: Roleplay Market Inventory Manager
brief_desc: PostgreSQL database and REST API using Django to help roleplayers
    manage inventories and transactions.
---
As someone who participates in a lot of forum roleplaying communities, it can be
a pain to track and manage a character's inventory. If characters are trading
amongst themselves, it can also be a pain for people who try and track which
character which items as well. I ended up creating this project as a sort of
experiment to see how I would try and solve this problem. Although it never saw
use because the community decided that requiring its use would make things
unnecessarily difficult for casual members, it still exists as a
proof-of-concept.

* Leveraged [Django](https://www.djangoproject.com/) and
    [Django REST Framework](https://www.django-rest-framework.org/) to manage
    a PostgreSQL database.
* Designed a relational schema divided into users, characters, inventories, and
    transactions.
* Used [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
    for authentication of privileges for resource management.