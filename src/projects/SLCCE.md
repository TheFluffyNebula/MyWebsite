---
layout: project.njk
slug: SLCCE
permalink: /Projects/SLCCE.html
title: SLCCE Workshop Platform
description: Volunteer work with Students Leading Collaborative Computing Education at NC State — designing and presenting computing workshops, and building a platform to host them.
last_updated: 2026-10-20
---

Students Leading Collaborative Computing Education (SLCCE) is a volunteer-based student organization at NC State
University which aims to create opportunities for under-resourced and under-supported middle and high school students
in North Carolina.

I have been a general body member since October 2024. I was able to contribute more especially after January, when I
returned to campus from my co-op. I helped design two workshops to teach middle and high school students computing concepts.
In March 2025, I helped present an interactive workshop at Trinity Christian School, engaging students in hands-on learning.

<p class="project-media"><img src="{{ '/Images/SLCCE/Trinity.jpg' | url }}" alt="A group of NC State student volunteers standing together outside the entrance of Trinity Christian School after running a workshop." loading="lazy"></p>

In April 2025, I became the Computer Science (CSC) Chair. Since then, I've led the design for the third workshop and facilitated two
future collaborations with other clubs.

## The workshop platform

As CSC Chair I've been working on a way to run our lessons that doesn't depend on us being physically in the room.
Workshops are interactive Python notebooks, and the goal is that a teacher can hand them to a class and see how far
each student has got.

We've rolled this out in tiers. Tier 1 runs the lessons in Google Colab, and Tier 2 runs them entirely in the
browser using Pyodide and WebAssembly, hosted on GitHub Pages — both of those are live. Tier 3 moves to a hosted
JupyterHub with real-time progress tracking and a teacher panel. A prototype is deployed but it has not launched yet.

The reason for the progress tracking is practical: it lets a teacher see which students are ready to move on from the
lessons to building something of their own, and it lets us reach more students than we can fit into an in-person
workshop.

<!-- TODO: add a screenshot of the platform once Tier 3 is far enough along, or a shot of a Tier 2
     browser-based lesson. Per the repo rules, no student faces and no student names in any screenshot. -->
