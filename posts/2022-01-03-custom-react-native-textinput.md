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

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body {
    background-color: #788491;
    font-family: 'Public Sans', sans-serif;
    font-size: 20px;
    color: #d9dedf;
    padding-top: 50px;
}

h1, h2, h3, h4 {
    font-family: "Barlow Condensed", sans-serif;
    color: white;
}

article {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;
    height: 100%;
}

article header {
    grid-column: 2 / 4;
    max-width: 1000px;
    padding: 20px 20px 0 0;
}

article .max-width-wrapper {
    grid-column: 2;
}

article h1 {
    font-size: 32px;
    margin: 0;
    color: white;
}

article h2:first-of-type {
    font-size: 140px;;
    line-height: 1em;
    margin: 0;
    margin-bottom: 2rem;
}

.max-width-wrapper {
    max-width: 900px;
}

.post-date {
    grid-row: 1 / 3;
    font-size: 1.2em;
    text-orientation: upright;
    writing-mode: vertical-rl;
    margin-right: 1em;
    padding: 20px;
    font-style: italic;
    letter-spacing: -0.15em;
    padding-top: 3rem;
}

.post-date span {
    display: inline-block;
}

p {
    text-indent: 1em;
}

</style>

<article markdown="1">

<div class="post-date"><span><span>January 3rd, 2022</span><br>By Joe Taylor</span></div>

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

What I'll be going for, to start, should resemble this sketch, where the parts
in grey are added automatically:

<img alt="Sketch of text input with enforced formatting" src="textinputsketch.svg"
    style="max-width: 200px; filter: invert(1) grayscale(1);" />

</div>

</article>

