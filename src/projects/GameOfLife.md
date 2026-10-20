---
layout: project.njk
slug: GameOfLife
permalink: /Projects/GameOfLife.html
title: Conway's Game of Life
description: A Java GUI for Conway's Game of Life with preset and custom configurations, including a hand-rebuilt glider gun.
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
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife1.jpg' | url }}" alt="conway game of life 1" loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife2.jpg' | url }}" alt="conway game of life 2" loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife3.jpg' | url }}" alt="conway game of life 3" loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife4.jpg' | url }}" alt="conway game of life 4" loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife5.jpg' | url }}" alt="conway game of life 5" loading="lazy"></li>
  <li><img src="{{ '/Images/ConwayGameOfLife/ConwayGameOfLife6.jpg' | url }}" alt="conway game of life 6" loading="lazy"></li>
</ul>
