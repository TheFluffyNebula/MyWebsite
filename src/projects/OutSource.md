---
layout: project.njk
slug: OutSource
permalink: /Projects/OutSource.html
title: OutSource
description: Weather-aware activity planning — live forecasts and AI recommendations that tell you when to get outside, and a way to organise it with friends.
last_updated: 2026-10-20
---

OutSource was built at Hack_NCState 2026. The idea is simple enough to say in one line: outdoor
plans live and die by the weather, so the app watches the forecast and tells you when to go.

Open it and the first thing you see is the current forecast, then a list of suggested activities
that reference the weather directly — "take advantage of Wednesday or Thursday's perfectly sunny
and warm weather to enjoy a rewarding hike on a local trail." Those come from Gemini, prompted
with live National Weather Service data for your location plus the interests on your profile, so
a cyclist who likes clear skies and a runner who prefers early mornings get different answers
from the same forecast.

The rest of the app is about doing those things with other people. You can create circles, invite
friends, see who's in them, chat, and keep a shared schedule of upcoming events. Recommendations
work at both levels — personal ones for you, and group ones generated for a circle based on what
its members collectively like.

## How it's built

The frontend is Flutter. The backend is a Python API built with FastAPI in a layered
controller / service / repository structure, with Pydantic DTOs and MySQL behind it, using JWT
for authentication. Gemini 2.5 Flash handles the recommendations and parses free-text interests
into structured preferences; forecasts come from the National Weather Service API.

Everything runs in Docker, with the API and database as separate containers. For the hackathon we
deployed that on AWS — ECS and Fargate running the containers, an Application Load Balancer in
front, and RDS for the database. Architecting it that way inside a hackathon window was the point:
we wanted something genuinely distributed rather than one box that happens to survive demo day.

<ul class="shots">
  <li><img src="{{ '/Images/OutSource/Recommendations.png' | url }}" alt="The OutSource home screen. An orange Current Forecast card reads 45 degrees, clear, with a low around 45 and a north wind around 3 mph, followed by a Recommendations list: a Day Hike and a Park Visit and Picnic, each citing Wednesday or Thursday's sunny weather." loading="lazy"></li>
  <li><img src="{{ '/Images/OutSource/Schedule.png' | url }}" alt="The My Schedule tab listing two upcoming events — a Morning Hike at the local trail on 20 February at 7am, and a group Weekend Run through the city on 15 February at 8am." loading="lazy"></li>
  <li><img src="{{ '/Images/OutSource/Friends.png' | url }}" alt="The Friends tab with a search box, one incoming request shown with accept and decline buttons, an empty friends list, and one sent request marked Pending." loading="lazy"></li>
  <li><img src="{{ '/Images/OutSource/Group.png' | url }}" alt="A group profile page for a public circle called Saturday Hikers, listing its three members above an Open Group Chat button." loading="lazy"></li>
</ul>

<!-- TODO: the AWS deployment is gone — the load balancer hostname no longer resolves, so
     there is no live demo to link. If you redeploy, set live_url on the OutSource entry. -->
