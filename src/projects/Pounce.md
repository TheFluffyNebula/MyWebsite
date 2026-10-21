---
layout: project.njk
slug: Pounce
permalink: /Projects/Pounce.html
title: Pounce
description: Multiplayer solitaire as a real-time web app, built in four staged sub-projects over roughly a year.
last_updated: 2026-10-20
standing: |
  <p>Finished and deployed in August 2025. All four stages are done, and Pounce is live at
  <a href="https://pounce.onrender.com">pounce.onrender.com</a>. The journal below is kept as it was
  written, so the earlier entries still talk about work that has since been completed.</p>
  <p><!-- TODO: replace this box with your own wording if you'd rather phrase it differently. --></p>
---

<p>
  <a href="https://github.com/TheFluffyNebula/War_Basic">War repo</a> ·
  <a href="https://github.com/TheFluffyNebula/Hearts">Hearts repo</a> ·
  <a href="https://github.com/TheFluffyNebula/Solitaire">Solitaire repo</a> ·
  <a href="https://github.com/TheFluffyNebula/Pounce">Pounce repo</a>
</p>

This project's origins lie in my participation of the NSF ACE Data Science and Analytics REU at NC A&T in summer 2024.
I got pretty close with my fellow researchers, and our go-to card game was pounce. In short, it's multiplayer solitaire.
From there, I then started thinking about how to create a web application for it. However, this project would be by far
the most ambitious thing I've tried to make, so I decided to break it down into smaller steps. They are as follows:

1. War (card game)
2. Hearts (real time) — deployed at <https://hearts-q4nx.onrender.com/>
3. Solitaire (structure)
4. Pounce (combining the first three)

War was created with a simple stack (html/css/js). Hearts was made with React, Express, and SocketIO.
A quick usage guide for the render link: enter a code, then hit 'create room'. Go to console in developer tools (F12) and
copy the roomId. On 3 other tabs, put that roomId into the text input and hit 'join room'. The cards should show for
everyone in a few seconds. Note: Render may take a minute or two to spin-up.

Something you may notice is the relatively large time gap. I've been busy with my fall 24 co-op and school this semester.
As of writing this on 4/11/25, step 1 was finished in fall last year and step 2 was finished on 3/9 (deployed on render!).
Below are some screenshots for those. Currently, I'm trying to create solitaire.

<ul class="shots">
  <li><img src="{{ '/Images/Pounce/War.jpg' | url }}" alt="The War game: two cards face up, the five of diamonds above the ace of hearts, with scores of 24 and 26 and the word &quot;Win&quot;." loading="lazy"></li>
  <li><img src="{{ '/Images/Pounce/Hearts1.jpg' | url }}" alt="The Hearts table at the end of a round, showing four empty trick slots, a thirteen-card hand along the bottom, and a running score panel for four players." loading="lazy"></li>
  <li><img src="{{ '/Images/Pounce/Hearts2.jpg' | url }}" alt="The Hearts table mid-trick on Player 3's turn, with the two of clubs played and the three legal cards in hand highlighted in green." loading="lazy"></li>
</ul>

<div class="update">
<p class="update-date">4/26/25 Update</p>

I have finished solitaire (step  3/4)! I spent a bit of time each day for 16 days straight. Overall it works just like
the classic game, with click transitions between stock and waste and drag transitions for waste -> tableau,
waste -> foundation, tableau -> tableau, and tableau -> foundation. The final project will be the culmination of all of
this, Pounce. I plan on starting it sometime soon and hope to have the html/css done before I go on vacation. The screenshots
are mid-game and after it's completed.

<ul class="shots">
  <li><img src="{{ '/Images/Pounce/Solitaire1.jpg' | url }}" alt="A solitaire game in progress, with the stock and waste piles top left, four foundation piles top right, and seven tableau columns of face-down and face-up cards." loading="lazy"></li>
  <li><img src="{{ '/Images/Pounce/Solitaire2.jpg' | url }}" alt="The same solitaire game completed: all four foundations topped by kings and every tableau column empty." loading="lazy"></li>
</ul>
</div>

<div class="update">
<p class="update-date">5/8/25 Update</p>

I have mostly finished the frontend. Now I will start on the routes, socketry, and actual game logic to handle
starting rounds, ending rounds, and ending the game.

<p class="project-media"><img src="{{ '/Images/Pounce/Pounce1.jpg' | url }}" alt="The Pounce board, with several players' solitaire layouts of face-up and face-down cards arranged around a shared centre area of empty foundation slots." loading="lazy"></p>
</div>

<div class="update">
<p class="update-date">8/1/25 Update</p>

It's finally done! After doing bits and pieces over a year (7/20/24 - 8/1/25), it is now deployed on
[pounce.onrender.com](https://pounce.onrender.com).
</div>
