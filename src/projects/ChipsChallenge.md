---
layout: project.njk
slug: ChipsChallenge
permalink: /Projects/ChipsChallenge.html
title: Chip's Challenge
description: A planning agent that collects every chip and reaches the portal using a subtask stack and A* search.
last_updated: 2026-10-20
---

This project was for my CSC411 class, Intro to Artificial Intelligence. The last problem set was Chip's Challenge,
with one of the levels shown below. The goal is to collect all of the chips and then reach the portal.
We were given a Java robot with some perceive methods and had to fill out a 'getAction' method returning an action
like 'go up' or 'go right' on each iteration of the simulation.

<p class="project-media"><img src="{{ '/Images/ChipChallenge/ChipChallenge.jpg' | url }}" alt="A Chip's Challenge level: the player character stands in the middle of a grid scattered with computer chips, colored keys and matching locked doors, with a blue portal near the top and a counter reading &quot;Chips Remaining 10&quot;." loading="lazy"></p>

The method used to tackle this problem is 'Planning'. When discovering an object (ex. a door) in the way of
getting a chip, a new subtask is pushed onto a stack, and the robot recomputes the path to the new subtask (the key).
Once the robot reaches the subtask and picks the key up, the subtask is popped from the stack. Eventually, once all of the
chips are collected, the final subtask is the portal's location. A* search with the Manhattan distance heuristic was used
to compute the paths. A video of the solution running is below.

<video controls muted playsinline>
  <source src="{{ '/Images/ChipChallenge/ChipChallenge.mp4' | url }}" type="video/mp4">
  <p>Your browser can't play this video. <a href="{{ '/Images/ChipChallenge/ChipChallenge.mp4' | url }}">Download it instead</a>.</p>
</video>
