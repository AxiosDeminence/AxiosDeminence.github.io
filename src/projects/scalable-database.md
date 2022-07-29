---
permalink: false
tags: project
title: Distributed Database
brief_desc: Distributed database developed in Go.
rank: 4
---
Project Date: **Nov. 2021**

##### Short Summary:
A database with decentralized file storage clusters and a centralized cluster
manager using consistent hashing. The goal was to dynamically add and remove
clusters, allowing data migration between clusters by determining the
predecessors and succesors using a consistent hashing method. Versioning was
incremented based on differences of hashes of 4096-bit blocks of files (deleted
files are marked as empty, but as an additional version); the database always
assumed that if both the client and server's representation of the file changed,
the server was correct to maintain consistent versioning between different
clients. Servers and clients were coded in Go to ensure ease of concurrent
connections. The final product was used and tested across multiple AWS EC2
instances in differnet regions.

##### Action Points:
* Created a distributed database to maintain concurrent versions across
    several clients as a school project
* Devised a protocol to scale storage space across multiple servers to increase
    service resiliency
* Used consistent hashing to manage server nodes to allow for addition or
    removal of nodes without interruption of the service
* Built client and server programs in Go to foster concurrent connections
* Developed a centralized server that mediates clients' queries to learn the
    information of the node that their data is on