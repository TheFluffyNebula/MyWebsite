---
layout: project.njk
slug: NCROEP
permalink: /Projects/NCROEP.html
title: Offshore Energy Siting Tool
description: Full-stack web app that pairs multi-year geospatial ocean resource data with device specifications to surface promising offshore energy technology combinations.
last_updated: 2026-10-20
---

I built this as a software engineering intern with the NC Renewable Ocean Energy Program at
NC State.

The tool brings together two things that normally live far apart: multi-year geospatial
datasets describing the ocean energy resource available in a given area, and specifications for
the devices that could harvest it. A user selects a domain on the map, and the application works
through the combinations to surface which offshore technologies look most promising there.

The data behind it is bulky — roughly 70GB of resource datasets. Mounting that into the
containers as Docker volumes, rather than baking it into the images, took a container build from
about two hours down to three minutes, which changed how quickly we could iterate.

The work won 1st place for undergraduate research poster at the NCROEP Symposium.

<!-- TODO: add screenshots of the application. No images for this project exist in the repo yet.
     Remember to confirm nothing in a screenshot is program-internal before adding it. -->

<!-- TODO: if a public repo or demo exists, add repo_url / live_url to the NCROEP entry in
     src/_data/projects.json and the buttons will appear automatically. -->
