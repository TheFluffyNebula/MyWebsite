---
layout: project.njk
slug: TheWritePlace
permalink: /Projects/TheWritePlace.html
title: The Write Place
description: Android app and companion website where students upload essays, exchange feedback and search by tag.
last_updated: 2026-10-20
---

<aside class="callout">
  <h2 class="callout-title">Note</h2>
  <p>
    There's no live demo here on purpose. This was a 2022 school project and it was never
    hardened — the authentication and storage are wide open by today's standards — so pointing
    people at a running copy that still accepts sign-ups didn't seem right. The source is still
    up if you want to see how it worked.
  </p>
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

<ul class="shots">
  <li><img src="{{ '/Images/TheWritePlace/TheWritePlace1.jpg' | url }}" alt="The Write Place logo, a pencil drawn inside a house outline, beside the sign-in form with email, username and password fields and a summary of the review and feedback cycles." loading="lazy"></li>
  <li><img src="{{ '/Images/TheWritePlace/TheWritePlace2.jpg' | url }}" alt="The Firebase console showing the app's Firestore database: a collection of uploaded test essays on the left, with one document's fields open on the right — completion flag, date, reviewer, submitter and tag." loading="lazy"></li>
</ul>
