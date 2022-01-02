---
title: Daily Tech Challenge \#4
subtitle: Build a React Native app and run it on your iPhone
date: 2022-01-02
author: Joe Taylor
---

<meta charset="utf-8">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Monoton&family=Source+Serif+Pro:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">





<!-- article.css -->
<style>

    :root {
        --content-width: 700px;
    }


    html, body {
        margin: 0; padding: 0;
    }

    body {
        background-color: #222;
        color: #bbb;
        line-height: 1.6em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        font-family: helvetica neue;
        padding: 30px;
        font-weight: 300;
    }

    header {
        padding-top: 70px;
        padding-bottom: 0px;
        grid-column-start: 1;
        grid-column-end: 3;
        display: grid;
        margin-bottom: 50px;
        border-bottom: solid #2a2a2a 3px;
        grid-template-columns: repeat(2, 1fr);
    }

    header * {
        font-family: helvetica neue;
        font-weight: 100;
    }
        

    article, header > div {
        padding-right: 50px;
    }

    header > div {
        grid-column: 2;
        max-width: var(--content-width);

    }

    h1, h2, h3, h4 {

    }

    h1 {
        color: white;
    }

    h2, h3, h4 {
        color: #d9d9d9;
        font-weight: 400;
    }

    article {
        grid-column: 2;
        font-size: 1.2em;
        max-width: var(--content-width);
    }

    h1 {
        font-size: 5em;
        line-height: 1em;
        margin-bottom: 3rem;
    }

    h2#tech-challenge-indicator {
        margin-bottom: -1rem;
        color: #e5ed7e;
    }

    .authorship {
        margin-bottom: 3em;
        color: #777;
        font-weight: 300;
    }

    article h2 {
        margin-top: 1.5em;
        color: #e5ed7e;
    }

    p, li, td, th {
        letter-spacing: 0.03em;
    }

    .side {
        float: left;
        margin-left: -550px;
        margin-top: -30px;
    }


    aside {
        background-color: #2c2c2c;
        color: #bdeaff;
        text-align: left;
        padding: 10px;
        margin-left: -10px;
        display: table;
    }

    aside p {
        margin: 0;
    }

    aside a {
        color: inherit;
        text-decoration: underline;
    }    
</style>

<!-- venn-diagram.css -->
<style>
    .venn {
        width: calc(var(--venn-size) * 1); height: calc(var(--venn-size) * 1);
        position: relative;
        --venn-size: 250px;
        margin-bottom: calc(var(--venn-size) * 0.9);
    }

    .venn > div {
        position: absolute; top: 50%; left: 50%;
        width: 0;
    }

    .venn > div > div {
        position: absolute; left: 0; top: 0;
        width: var(--venn-size); height: var(--venn-size);
        line-height: var(--venn-size);
        text-align: center;
        border-radius: 100%;
        background-blend-mode: color;
        color: white;
    }


    .venn > div > div:nth-of-type(1) {
        top: calc(-1 * var(--venn-size) * 0.33); 
        left: calc(-1 * var(--venn-size) * 0.33);
        background-color: #A1876755;
    }

    .venn > div > div:nth-of-type(2) {
        top: calc(-1 * var(--venn-size) * 0.33); 
        left: calc(1 * var(--venn-size) * 0.33);
        background-color: #4D4F7055;
    }

    .venn > div > div:nth-of-type(3) {
        top: calc(1 * var(--venn-size) * 0.23); 
        background-color: #47705D55;
    }

    .venn .center {
        font-size: 2em;
        position: absolute;
        top: calc(var(--venn-size) - var(--venn-size) * 0.22);
        left: calc(var(--venn-size) - 15px);
    }

</style>

<header>
<div>
<h2 id="tech-challenge-indicator">Daily tech challenge #4</h2>

# Build a React Native app and run it on your iPhone

<p class="authorship">Written by Joe Taylor on January 2nd, 2022</p>
</div>
</header>

<article>

<aside><p>Today's repo can be found <a href="https://github.com/textninja/dtc0004">here</a>, in the usual place on GitHub.</p></aside>

I know I said I'd be working on Jekyll today, but there's been a change of
plans. For today's challenge, I'm going to build a simple React Native app, with
the measure for success being a more or less completely functional (if basic)
screen loaded up on my iPhone. I've never built a React Native app before, or an
iPhone app for that matter, so this should be interesting. I have however built
and extended normal apps using React, so with any luck, this prior experience
will lead to a successful day dabbling in mobile!

## Product objective

Out of a dirth of options, having in little in the way of inspiration today, and
to be kind to myself by not biting off more than I can chew, I'm going to create
a simple meditation timer. The goal is to have a big button in the middle of the
screen which, when pressed, makes a bell sound and replaces itself with a
countdown from 10 minutes. When the timer finishes, another bell resonates and
the button returns.

## Game plan


<div class="venn side">
    <div>
        <div>Research</div>
        <div>Writing</div>
        <div>Development</div>
    </div>
    <div class="center">
    🎉
    </div>
</div>


There are three key ingredients to success in these daily tech challenges. They
are research, writing, and development.

If I'm to be successful, all three of these activities need to be performed in
balance with one another. Said balance doesn't necessarily have to be *even* in
order to be harmonious, however; it is likely to vary from challenge to
challenge. The important thing is that I invest time in all three. The exact
breakdown of how I divvy up my attention doesn't matter too much.

Today, I'm expecting to lean more on the research factor than most days. React
Native is totally unfamiliar territory for me, so I'd like to make use of the
tutorials and documentation and create the space needed to be successful.

So, I'll spend several hours (4+) researching React Native or following
tutorials, and then, when I'm ready, I'm expecting it get a meditation timer
coded in an hour or so.

## Research undertaken

At the very least, I need to practice using the following core components:

1. View
2. Text
3. Image

I don't need to, but I'm probably going to practice using `ScrollView` and
`TextInput` as well.

I doubt the end product will look very pretty, but I'll do my best with the time
I have. Or what time I have left, I should say, as my priority is functionality
over beauty.



## Thoughts on a bonus challenge

For a bonus challenge, perhaps I'll extend `mdserve` to transpile SCSS on the
fly as well, though to be honest, that's not so much a challenge as just a thing
I'd like to get done.

</article>
