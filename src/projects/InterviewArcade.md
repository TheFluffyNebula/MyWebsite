---
layout: project.njk
slug: InterviewArcade
permalink: /Projects/InterviewArcade.html
title: Interview Arcade
description: Technical interview practice tool that takes code and audio input, evaluates both, and returns spoken feedback. 1st place at HackNC 2025.
---

This project was made for the HackNC 2025 hackathon. Interview Arcade is a technical interview practice tool
that takes in both code and audio inputs, evaluates them, and provides comprehensive feedback on both. We used
React, FastAPI, Gemini, and ElevenLabs. React is used on the frontend to process the inputs. FastAPI allows
the frontend to call the backend services -- namely, using Gemini to evaluate code and ElevenLabs TTS for an AI
voiceover on the overall feedback. I'm proud to say that we won 1st place in the general track!

<p class="project-media"><img src="{{ '/Images/InterviewArcade/Us.jpg' | url }}" alt="us" loading="lazy"></p>

<ul class="shots">
  <li><img src="{{ '/Images/InterviewArcade/Intro.jpg' | url }}" alt="intro" loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Select.jpg' | url }}" alt="intro" loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Interview.jpg' | url }}" alt="intro" loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Loading.jpg' | url }}" alt="intro" loading="lazy"></li>
  <li><img src="{{ '/Images/InterviewArcade/Feedback.jpg' | url }}" alt="intro" loading="lazy"></li>
</ul>
