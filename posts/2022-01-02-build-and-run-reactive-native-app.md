---
title: Daily Tech Challenge \#4
subtitle: Build a React Native app and run it on your iPhone
date: 2022-01-02
author: Joe Taylor
---

<meta charset="utf-8">

<!-- article.css -->
<style>
    body {
        background-color: #303030;
        color: white;
        line-height: 1.6em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-right: 100px;
    }

    article {
        grid-column: 2;
        margin-left: 50px;
        font-size: 1.2em;
        max-width: 700px;
    }

    h1 {
        font-size: 5em;
        line-height: 1em;
        margin-bottom: 3rem;
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

<article>

# Build a React Native app and run it on your iPhone

I know I said I'd be working on Jekyll today, but there's been a change of
plans. For today's challenge, I'm going to build a simple React Native app, with
the measure for success being a more or less completely functional (if basic)
screen loaded up on my iPhone. I've never built a React Native app before, or an
iPhone app for that matter, so this should be interesting. I have however built
and extended normal apps using React, so with any luck, this prior experience
will lead to a successful day dabbling in mobile!

## Product objective

Out of a dirth of other inspiration, and to be kind to myself by not biting off
more than I can chew, I'm going to create a simple meditation timer. The goal is
to have 

## Game plan

Here are what I deem to be the components to success for tech challenges.

<div class="venn">
    <div>
        <div>Research</div>
        <div>Writing</div>
        <div>Development</div>
    </div>
    <div class="center">
    🎉
    </div>
</div>

If I'm to be successful, all three of these (research, writing, and development)
need to be in balance with one another. Said balance doesn't necessarily have to
be *even*, however; it is likely to vary from challenge to challenge. The
important thing is that I invest time in all three; the exact breakdown of how I
divvy up my attention, however, doesn't matter too much.

Today, I'm expecting to lean more on the research factor than most days. React
Native is totally unfamiliar territory for me, so I'd like to make use of the
tutorials and documentation and create the space needed to be successful.


## Thoughts on a bonus challenge

For a bonus challenge, perhaps I'll extend `mdserve` to transpile SCSS on the
fly as well, though to be honest, that's not so much a challenge as just a thing
I'd like to get done.

</article>
