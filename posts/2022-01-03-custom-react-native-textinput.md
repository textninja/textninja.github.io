---
title: Daily Tech Challenge \#5
subtitle: Build a custom textinput in react native
date: 2022-01-03
author: Joe Taylor
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Public+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style>

body {
    margin: 20px;
    font-family: 'Public Sans', sans-serif;
    font-size: 20px;
    color: #444;
    margin: 40px;
}

h1, h2, h3, h4 {
    font-family: "Barlow Condensed", sans-serif;
    color: black;
}

article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

article header {
    grid-column: 2 / 4;
    max-width: 1200px;
}

article .max-width-wrapper {
    grid-column: 2;
}

article h1 {
    font-size: 32px;
    margin: 0;
    color: #999;
}

article h2:first-of-type {
    font-size: 100px;
    margin: 0;
}

.max-width-wrapper {
    max-width: 900px;
}

.post-date {
    grid-row: 1 / 3;
    text-transform: uppercase;
    font-size: 1.5em;
    text-orientation: sideways;
    writing-mode: vertical-rl;
    margin-right: 1em;
    color: #ccc;
}

.post-date span {
    display: inline-block;
    transform-origin: center center;
    transform: rotateZ(180deg);
}
</style>

<article markdown="1">

<div class="post-date"><span>Posted January 3rd, 2022 by Joe Taylor</span></div>

<header markdown="1">

# Daily Tech Challenge #5
## Build a custom TextInput using React Native

</header>

<div class="max-width-wrapper" markdown="1">

I had so much fun using React Native for yesterday's challenge that I decided to
stick with it, this time diving a little deeper into UI design by creating a
custom text input.

Today's custom text input is going to enforce formatting and add a few visual
bells and whistles. I may try a few different types of custom inputs, but one,
for example, could display a specially formatted dollar sign before any numbers
that are entered. While I could certainly build such a thing in a web context, I
understand there to be styling quirks in React Native inherent to the
environment components run in, so this could be a real challenge.

I should mention up front that I will make no attempt to build something that is
cross platform. I expect the styling to get a little hacky, so the text input
needs to work in iOS only, although I will take a screenshot in the Android
simulator for comparison purposes.

What I'll be going for, to start, looks something like this:

*Illustrator image goes here*

</div>

</article>

