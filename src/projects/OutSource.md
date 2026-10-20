---
layout: project.njk
slug: OutSource
permalink: /Projects/OutSource.html
title: OutSource
description: A containerized outdoors app with a Flutter frontend, deployed on AWS at Hack_NCState 2026.
---

OutSource was built at Hack_NCState 2026.

The app has a Flutter frontend talking to a containerized backend deployed on AWS, using ECS and
Fargate for the containers, an Application Load Balancer in front of them, and RDS for
persistence. The point of architecting it that way inside a hackathon window was to end up with
something genuinely distributed and scalable rather than a single box that happens to work on
demo day.

<!-- TODO: add screenshots or a demo video. No images for this project exist in the repo yet. -->

<!-- TODO: add repo_url / live_url / devpost_url to the OutSource entry in
     src/_data/projects.json and the buttons will appear automatically. -->
