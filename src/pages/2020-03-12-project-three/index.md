---
path: "/project-three"
date: "2020-03-12"
title: "NutriQ"
author: "Michael McManus"
image: "nutriq.png"
next: "/project-four"
prev: "/project-two"
---

<p align="center">
An iOS application that allows users to create a custom meal plan with recipes based on their fitness goals. Take a look at our code <a href="https://github.com/MikeMcmanus95/NutriQ" target="_blank" rel="noopener noreferrer">here!</a></p>
<p align="center">
  <img src="https://media.giphy.com/media/Y2hA1XITggC54e7lZx/giphy.gif" width="300" alt="nutriq"/>
</p>
<p>
NutriQ is an app that was built by myself and my friend <a href="https://github.com/albertgertskis" target="_blank" rel="noopener noreferrer">Albert Gertskis</a> as our final project submission
during our time at CodePath's iOS University. I've always been conscious about health and fitness, frequently using
apps such as MyFitnessPal and the like, but I found that these apps lacked any real meal planning advice.
As such, we decided to build NutriQ. We combined all of the functionality of your standard fitness app, including
the ability to track health data and goals, but packed together with a full fledged meal planner.

We <a href="https://github.com/MikeMcmanus95/NutriQ/blob/master/Nutriq/ViewControllers/HOME-ViewControllers/HomeViewController.swift" target="_blank" rel="noopener noreferrer">leveraged the Spoonacular API </a>to get our food data, and tailored each meal plan to the users
specific basal metabolic rate, which was <a href="https://github.com/MikeMcmanus95/NutriQ/blob/master/Nutriq/ViewControllers/SURVEY-ViewControllers/SurveyResultsViewController.swift" target="_blank" rel="noopener noreferrer">calculated in our backend</a>. We also took the users fitness
goals into account, as some people may want to lose, gain or maintain their weight. Our algorithm adjusts the users maintenance and goal calories accordingly, as well as the generated meal plan. What makes NutriQ different from other health apps on the market is that it allows you to view the recipe for each meal in your list, a feature that only the most premium of fitness apps can do, and one that's usually locked behind a paywall. I learned quite a lot about Swift during this time, and it was also my first exposure to working with an external API, as well as OAuth. Check out some of the screenshots of our app below!

</p>
<p align="center">
  <img src="https://i.imgur.com/GhjO4pA.png" width="300" alt="nutriq1"/>
  <img src="https://i.imgur.com/1wRLPSs.png" width="300" alt="nutriq2"/>

</p>
<p align="center">
  <img src="https://i.imgur.com/lVBZO5x.png" width="250" alt="nutriq3"/>
 <img src="https://i.imgur.com/EzhvvLW.png" width="250" alt="nutriq3"/>
 <img src="https://i.imgur.com/LMXkEc7.png" width="250" alt="nutriq4"/>
</p>
