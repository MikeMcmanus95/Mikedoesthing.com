---
path: "/project-two"
date: "2020-03-13"
title: "Stock Sim"
author: "Michael McManus"
image: "stocksim.png"
next: "/project-three"
prev: "/project-one"
---

<p align="center">
  A realtime public stock trading simulator that utilizes the IEX API.
  Check it out <a href="https://sim-stock.herokuapp.com" target="_blank" rel="noopener noreferrer">here!</a>
</p>
<p align="center">
  <img src="https://i.imgur.com/lq1teuW.png" width="500" alt="Portfolio"/>
</p>

This project was built as a submission for the NYC Tech Talent Pipeline assessment, and uses cool technologies like the IEX Stock API along with React, Redux, Node, Express and Sequelize to create a fullstack web application. You can take a look at my code and see how I sanitized the stock data to fit my needs in the front end, as well as how I managed to get <a href="https://github.com/MikeMcmanus95/StockSim/blob/master/client/store/stocks.js" target="_blank" rel="noopener noreferrer">realtime price updates</a> with the `useEffect` hook! Another design pattern I decided to follow was seperating the business logic and visual logic for my <a href="https://github.com/MikeMcmanus95/StockSim/tree/master/client/components" target="_blank" rel="noopener noreferrer">react components</a> I also wanted to ensure that my backend routes were <a href="https://github.com/MikeMcmanus95/StockSim/blob/master/server/api/users.js" target="_blank" rel="noopener noreferrer">secure</a>, so that a user cant open up the console and edit their cash balance! Overall, this was a fun project to work on, and gave me chance to sharpen my skills with the NERD stack.
