---
layout: project.njk
slug: InvertedDartboard
permalink: /Projects/InvertedDartboard.html
title: Inverted Dartboard
description: Expected value of a dart throw on an inverted board, computed by integration and checked against Monte Carlo simulation.
last_updated: 2026-10-20
---

<p><a href="https://docs.google.com/presentation/d/1NKk9WDoz3LZU0JUY7AG_q8LPuzFJu6Sab8HkXQbR02M/edit#slide=id.g1078661b784_0_48">Presentation slides</a></p>

I programmed this for my final project for in Calculus 3. For this project,
I asked myself what would happen if I combined two of my dartboards at home,
which would in theory help me as a novice dart thrower, since darts that are
closer to the outside receive a higher multiplier. I first computed the expected
value of a throw by hand through integration and adding up all segments. I then
computed the expected value of a throw via simulation. One of my favorite memories
was sitting down at my laptop and working for 3-4 hours straight to draw the dartboard.
Overall, I was happy to find that my calculation by hand got pretty close to the
computer's Monte Carlo method (avg 1000 random throws). However, I did find that if a
skilled player simply aimed for a section of a board, they would achieve much better
results on average. Thus, skill will always matter; some boards just show it more.

<ul class="shots">
  <li><img src="{{ '/Images/InvertedDartboard/InvertedDartboard1.jpg' | url }}" alt="The two dartboards side by side: Board A is a standard numbered board, Board B has plain concentric rings scoring 10 at the outside rising to 80 at the centre." loading="lazy"></li>
  <li><img src="{{ '/Images/InvertedDartboard/InvertedDartboard2.jpg' | url }}" alt="A slide working out the doubles ring by hand: the double integral over the sector, its area, the resulting expected value and the probability of hitting a double." loading="lazy"></li>
  <li><img src="{{ '/Images/InvertedDartboard/InvertedDartboard3.jpg' | url }}" alt="Simulation results: a computer-drawn dartboard peppered with a thousand random throws, with five runs landing in a 58 to 61 range against a hand prediction of 59.121." loading="lazy"></li>
</ul>
