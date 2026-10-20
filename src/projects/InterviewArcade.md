---
layout: project.njk
slug: InterviewArcade
permalink: /Projects/InterviewArcade.html
title: Interview Arcade
description: Technical interview practice tool that takes code and audio input, evaluates both, and returns spoken feedback. 1st place at HackNC 2025.
last_updated: 2026-10-20
---

This project was made for the HackNC 2025 hackathon. Interview Arcade is a technical interview practice tool
that takes in both code and audio inputs, evaluates them, and provides comprehensive feedback on both. We used
React, FastAPI, Gemini, and ElevenLabs. React is used on the frontend to process the inputs. FastAPI allows
the frontend to call the backend services -- namely, using Gemini to evaluate code and ElevenLabs TTS for an AI
voiceover on the overall feedback. I'm proud to say that we won 1st place in the general track!

You can read the full write-up on
[our Devpost page](https://devpost.com/software/interview-arcade).

<!-- TODO: add the demo video. Once you have a URL, set video_url on the InterviewArcade entry in
     src/_data/projects.json and the "Watch video" button appears on the page and the card. -->

<p class="project-media"><img src="{{ '/Images/InterviewArcade/Us.jpg' | url }}" alt="The four-person Interview Arcade team standing together in a classroom after the hackathon." loading="lazy"></p>

<ul class="shots">
  <li><img src="{{ '/Images/InterviewArcade/Intro.jpg' | url }}" alt="The welcome screen, reading &quot;Welcome to Interview Arcade!&quot; above Company, Random and Category buttons and a Confirm button." loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Select.jpg' | url }}" alt="A &quot;Select Company&quot; screen in neon arcade styling, offering a grid of sixteen company names to draw interview questions from." loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Interview.jpg' | url }}" alt="The interview screen: the problem &quot;Longest Substring Without Repeating Characters&quot; with examples and constraints on the left, a Python code editor on the right, and a five-minute countdown running." loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Loading.jpg' | url }}" alt="A loading screen styled as a game of Breakout, with coloured brick rows, a ball and a paddle above the word &quot;LOADING&quot;." loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Feedback.jpg' | url }}" alt="The feedback screen, with separate Code Review and Audio Review panels scoring the attempt out of ten and listing strengths and areas for improvement, plus an audio player and transcript of the spoken feedback." loading="lazy"></li>
</ul>
