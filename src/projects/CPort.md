---
layout: project.njk
slug: CPort
permalink: /Projects/CPort.html
title: C-PORT
description: Web-based analytics platform for Coastal Portfolio Optimization of Resource Technologies — optimising combinations of offshore energy technologies for a selected stretch of coast.
last_updated: 2026-10-20
---

C-PORT stands for **Coastal Portfolio Optimization of Resource Technologies**. I built it as a
software engineering intern with the NC Renewable Ocean Energy Program at NC State.

Offshore energy sources — wind, wave, tidal and ocean current — are usually evaluated one at a
time, as isolated resources. That makes it hard for a planner to see how a *mix* of technologies
might behave together: stabilising output, reducing cost volatility, and spreading economic
benefit along the coastal supply chain. C-PORT exists to move that analysis from
single-technology assessment to integrated, multi-technology design.

You pick a domain along the coast and set constraints — transmission capacity and system radius,
maximum depth, maximum distance from shore, an LCOE range and step size, which device types to
consider and how densely to pack them, and the years to analyse. The platform combines multi-year
geospatial resource datasets with technology, transmission cost and performance models, and
returns the combinations of devices that do best under those constraints, plotted as an
efficiency frontier against levelised cost of energy.

## How it's built

The frontend is a Next.js project in TypeScript with Tailwind CSS, deployed on Vercel. The
backend is Flask, with the frontend calling it through Axios. Everything is containerised with
Docker.

The datasets behind it are bulky — roughly 70GB. Mounting that into the containers as Docker
volumes, rather than baking it into the images, took a container build from about two hours down
to three minutes, which changed how quickly we could iterate.

The frontend is deployed at
[portfolio-opt-app.vercel.app](https://portfolio-opt-app.vercel.app/). Fair warning: it's the
interface only. Running an optimisation needs the Flask backend up and tunnelled through to it,
and that isn't publicly hosted — which is what 70GB of resource data tends to do to your hosting
options. So you can look around the inputs, but it won't compute anything for you.

## Presenting it

I presented C-PORT as first author at the NCROEP Symposium, where it won 1st place for
undergraduate research poster. The poster — *Web-Based Analytics Platform for Coastal Portfolio
Optimization of Resource Technologies (C-PORT)* — covers the background, the architecture and
the user interface, alongside four co-authors from NC State.

<!-- TODO: add the poster image. Save it as Images/CPort/poster.png (or .jpg), then set
     `thumb` + `thumb_alt` on the CPort entry in src/_data/projects.json.
     Publishing the author block, email included, is a deliberate decision - don't crop it.
     A crop of the UI panel or the efficiency-frontier chart would make a better card
     thumbnail than the full poster, which is too dense to read at card size. -->

{# live_url is deliberately left empty on the CPort entry: the Vercel deployment is
   frontend-only without the backend, so a "Live demo" button would promise more than it
   delivers. It is linked in the prose above with that caveat instead. #}
