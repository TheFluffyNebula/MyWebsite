---
layout: project.njk
slug: TheWritePlace
permalink: /Projects/TheWritePlace.html
title: The Write Place
description: Android app and companion website where students upload essays, exchange feedback and search by tag.
last_updated: 2026-10-20
---

<aside class="callout callout-warning">
  <h2 class="callout-title">Before you try the demo</h2>
  <p>
    This was a school project from 2022 and it was never hardened. Authentication and storage are
    wide open by today's standards. Please don't enter a real password or upload anything you
    wouldn't post publicly.
  </p>
  <!-- TODO: consider taking the live demo link down altogether. It's a Firebase app with weak auth
       still accepting sign-ups. If you'd rather remove it, clear live_url on the TheWritePlace
       entry in src/_data/projects.json and the button disappears. -->
</aside>

This is by far and away the largest project I've ever been a part of.
In May 2022, we pitched the idea for the Ready, Set, App! Contest, of which we got 3rd place.
My best friend Eric Wang and I wanted to see how far we could take the app,
We worked on the Android side during the summer, and I made the website side during the school
year which can be seen in the repo. We used webpack to put it all together. I was actually
planning to submit the Builder Base Guide Website for my final project for my Web
Development class but my professor and I decided it was too simple. Thus, I went with
this instead, and 200+ commits later, the result is beautiful but not secure at all.

The app and website can create users that can interact with each other and give feedback
on essays. They can also query based on tags. There's a review, upload, and feedback section.
The authentication and database are done through firebase.
I hope to learn enough about cybersecurity to go back one day and make it secure enough for schools to use.

<p class="project-media"><img src="{{ '/Images/TheWritePlace/TheWritePlace1.jpg' | url }}" alt="The Write Place logo, a pencil drawn inside a house outline, beside the sign-in form with email, username and password fields and a summary of the review and feedback cycles." loading="lazy"></p>

<!-- TODO: if you want a database screenshot here, take a fresh one against dummy data. The
     previous one was removed - see the handover notes. -->
