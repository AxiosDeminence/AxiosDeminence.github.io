---
permalink: false
tags: project
title: Scalable Database
brief_desc: Distributed database based on the Chord protocol and Go.
---
A database with decentralized file storage clusters and a centralized cluster manager based on the
Chord protocol. The goal was to dynamically add and remove clusters, allowing data migration
between clusters by determining the predecessors and succesors using a consistent hashing method.
Versioning was incremented based on differences of hashes of 4096-bit blocks of files (deleted files
are marked as empty, but as an additional version); the database always assumed that if both the
client and server's representation of the file changed, the server was correct to maintain consistent
versioning between different clients. Servers and clients were coded in Go to ensure ease of
concurrent connections.The final product was used and tested across multiple AWS EC2 instances in
differnet regions.

* Developed client and server in [Go](https://go.dev) to foster concurrent connections.
* Utilized the Chord protocol for a distributed database over many file storage clusters to provide
    redundancy in case of network failures.
* Leveraged AWS EC2 instances for deployment of the servers and clusters.