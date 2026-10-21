---
layout: project.njk
slug: GameOfLife
permalink: /Projects/GameOfLife.html
title: Conway's Game of Life
description: A Java GUI for Conway's Game of Life with preset and custom configurations, including a hand-rebuilt glider gun.
last_updated: 2026-10-20
---

I programmed this with Suvesh Bhusal, a fellow student at The Early College at Guilford.
We did it for our final project in our Intro to Computer Programming class. We made a GUI
that allowed the user to see an instruction manual, run some preset configurations, or
choose their own with parameters size and generations.
One challenge I had was the insane logic for the grid itself. Brute forcing the corners
and edges and center followed by the debugging might be the single most
<a href="https://github.com/TheFluffyNebula/gameoflife_maven/blob/master/src/main/java/edu/guilford/Block.java">difficult</a> implementation of brute force
I have ever attempted. My biggest fear was making a mistake in the hundreds of lines of code, and it happened.
Another great challenge was replicating the glider gun.
Going to a website, copying down the coordinates of the glider gun starting configuration
into a text file, and then attempting Java I/O is one of the crazier ideas I am proud of coming up with.
Here are some screenshots of the program:

<ul class="shots">
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife2.jpg' | url }}" alt="The program's title screen, &quot;Suvesh and Jason's Game of Life&quot;, with buttons for How it Works, User Controlled and Examples." loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife3.jpg' | url }}" alt="The How It Works screen, listing Conway's four survival and birth rules with a worked example beside each." loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife4.jpg' | url }}" alt="The user-controlled setup dialog, with inputs for grid length, percentage of cells alive, and number of generations." loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife5.jpg' | url }}" alt="A simulation running on a square grid, with black live cells scattered in small clusters across a white field." loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife6.jpg' | url }}" alt="The examples dialog over a running simulation, with three gliders circled and labeled on the grid behind it." loading="lazy"></li>
</ul>

And this is the moment the glider gun finally worked, 11 December 2022, reacted to in real time:

<p class="project-media"><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife1.jpg' | url }}" alt="A chat screenshot from 11 December 2022: program output listing the glider gun coordinates, an all-caps celebration, and below it the grid with a row of gliders in flight." loading="lazy"></p>
