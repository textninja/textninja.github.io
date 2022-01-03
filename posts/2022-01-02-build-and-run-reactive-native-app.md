---
title: Daily Tech Challenge \#4
subtitle: Build a React Native app and run it on your iPhone
date: 2022-01-02
author: Joe Taylor
outcome: Success
---
<div id="challenge-outcome"><span>Challenge outcome: success</span></div>

<meta charset="utf-8">





<!-- article.css -->
<style>

    #challenge-outcome {
        position: fixed;
        top: 0; right: 0; left: 0;
        height: 40px;
        line-height: 40px;
        vertical-align: middle;
        background-color: #aaffaa;
        color: #1e232c;
        font-size: 20px;
        font-weight: bold;
        display: grid;
        grid-template-columns: 1fr 1fr 200px;
    }

    #challenge-outcome > span {
        max-width: 700px;
        display: block;
        grid-column-start: 2;
        grid-column-end: 3;
    }

    :root {
        --content-width: 700px;
    }


    html, body {
        margin: 0; padding: 0;
    }

    body {
        background-color: #1e232c;
        color: #bbb;
        line-height: 1.6em;
        display: grid;
        grid-template-columns: 1fr 1fr 200px;
        font-family: helvetica neue;
        padding: 30px;
        font-weight: 400;
    }

    header {
        padding-top: 70px;
        padding-bottom: 0px;
        grid-column-start: 1;
        grid-column-end: 3;
        display: grid;
        margin-bottom: 2rem;
        /*border-bottom: solid #2a2a2a 3px;*/
        grid-template-columns: repeat(2, 1fr);
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
        font-weight: 400;
        margin-bottom: 3rem;
        line-height: 1.1em;
        margin-bottom: 3rem;
    }

    h2#tech-challenge-indicator {
        margin-bottom: 0;
        color: #e5ed7e;
        font-size: 2.5em;
    }

    .authorship {
        margin-bottom: 3em;
        color: #535c6a;
        font-size: 1.2em;
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
        margin-left: -800px;
        margin-top: -30px;
    }


    aside {
        background-color: #3a4352;
        color: white;
        text-align: left;
        padding: 10px;
        margin-left: -10px;
        display: table;
        margin-bottom: 2.5em;
    }

    aside p {
        margin: 0;
    }

    a {
        color: #ed7e7e;
        display: inline-block;
        padding-bottom: 0;
        border-bottom: solid 1px currentColor;
        text-decoration: none;
    }

    .whodis {
        writing-mode: vertical-rl;
        text-orientation: sideways;
        display: inline;
        position: fixed;
        top: 160px; left: 0px;
        transform-origin: center center;
        transform: rotateZ(180deg);
        font-size: 4em;
        direction: rtl;
        color: #3a4352;
        user-select: none;
    }

    .snack-left {
        width: 700px;
        margin-left: -750px;
        float: left;
    }
</style>

<!-- venn-diagram.css -->
<style>
    .venn {
        width: calc(var(--venn-size) * 1); height: calc(var(--venn-size) * 1);
        position: relative;
        --venn-size: 400px;
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
        background-color: #A1876799;
    }

    .venn > div > div:nth-of-type(2) {
        top: calc(-1 * var(--venn-size) * 0.33); 
        left: calc(1 * var(--venn-size) * 0.33);
        background-color: #4D4F7099;
    }

    .venn > div > div:nth-of-type(3) {
        top: calc(1 * var(--venn-size) * 0.23); 
        background-color: #47705D99;
    }

    .venn .center {
        font-size: 2em;
        position: absolute;
        top: calc(var(--venn-size) - var(--venn-size) * 0.22 + 5px);
        left: calc(var(--venn-size) - 15px);
        color: white;
    }

</style>

<p class="whodis">A textninja tech challenge<p>

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

Out of a dirth of other options on this uninspired day, and also to be kind to
myself by not biting off more than I can chew, I'm going to create a simple
meditation timer. The goal is to have a big button in the middle of the screen
which, when pressed, makes a bell sound and replaces itself with a countdown
from 10 minutes. When the timer finishes, another bell resonates and the button
returns.

## On balance


<div class="venn side" style="user-select: none">
    <div>
        <div style="background-color: #e5ed7e99;"><span style="font-weight: 500; display: inline-block; transform: translate(-20px, -10px);">Research</span></div>
        <div style="background-color: #ed7e7e99;"><span style="font-weight: 500; display: inline-block; transform: translate(20px, -10px);">Write</span></div>
        <div  style="background-color: #7ed9ed99;"><span style="font-weight: 500; display: inline-block; transform: translate(0, 20px);">Develop</span></div>
    </div>
    <div class="center" style="font-weight: 500; font-size: inherit;">
    Win
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
tutorials, and then, when I'm ready, I'll hopefully code a meditation in an hour
or so.

## Research to undertake

At the very least, I need to practice using the following core components:

1. View
2. Text
3. Image

I don't need to, but I'm probably going to practice using `ScrollView` and
`TextInput` as well.

I doubt the end product will look very pretty, but I'll do my best with the time
I have. Or what time I have left, I should say, as my priority is functionality
over beauty.


## Getting started

<!-- Embed inlined Snack -->
<div class="snack-left">
<div
  data-snack-dependencies="expo-constants%2Clodash%404"
  data-snack-name="My%20Snack"
  data-snack-description="My%20Amazing%20Snack"
  data-snack-preview="true"
  data-snack-platform="My Device"
  style="overflow:hidden;background:#fafafa;border:1px solid rgba(0,0,0,.08);border-radius: 0;height:505px;width:100%">
</div>

<script type="snack-code">
const { React } = require('react');
const { View, Text } = require('react-native');

const App = () => {

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Have a snack.</Text>
        </View>
    );

};

export default App;
</script>
<script>
    let snackScript = [...document.querySelectorAll("script[type=snack-code]")].pop().textContent;
    [...document.querySelectorAll("div")].pop().dataset.snackCode = snackScript;
</script>
</div>

<!-- Load the embed.js script -->
<script async src="https://snack.expo.dev/embed.js"></script>

To bootstrap my React Native project, I picked the easiest possible method
available, Expo.

```console
$ npm install --global expo-cli
$ expo init appname
```

Expo allows me to embed code on my blog, too, so running snippets on an
Expo-enabled iPhone is as easy as scanning a QR code.

## Approach

 - I'm using [Expo](https://expo.dev) and making use of its "snacks" feature for
   rapid prototyping.
 - I'm working through the examples in the [React Native Docs](https://reactnative.dev/docs/getting-started).
 - Since I can get a native screen to display on my iPhone without it, I'm not
   even bothering to eject my expo app and bundle it ad hoc. 
 

## Outcome

I spent the lion's share of my time researching and practicing. I may even have
overdone it. The final result is something I'm happy with, however, although it
is quite basic.



Most of the work is done by expo when I run `expo init meditationtimer` ,
because when that finishes and I run `yarn start`, I have all the scaffolding
written, and a working app on my device; with this kind of a head start, a
meditation timer feels like a paint by numbers project.

Mostly, developing this app was like developing any other app, although the
components and build system were different, and there are differences when it
comes to playing sounds and styling.

I am happy to say, Expo made it easy to play sounds. I installed `expo-av` and
then used the snippet shown. In conjunction with a free wav file of a Tibetan
singing bowl being struck, the audio functionality was taken care of.

```javascript
import { Audio } from 'expo-av';

async function ding() {
  const ding = await Audio.Sound.createAsync(
    require("./assets/ding.wav")
  );

  ding.sound.playAsync();
}
```

I worked with a library called React Navigation to get a native screen with a
title bar and a basic dark color scheme, and wrote a few styles for a
TouchableOpacity (what you or I might call a "button"), using React Native's
StyleSheet feature. This is not an exact replica of web-based CSS, but it does
the job. It might be difficult to get complicated styling with layers of
overlays working in a native context, so that's a challenge I'd like to take on
some time in the future, if not for my next challenge.

I enjoyed working with React Native. I don't tend to use many apps on my phone,
so I'm not exactly a font of knowledge when it comes to what makes a great app
or what the market needs, but if I do come up with some cool new idea then I'll
probably reach for React Native first. Unless I want to challenge myself...
Which, admittedly, I probably do.


## Extras

<details markdown="1">
<summary>Extra scrawlings, loosely related to the above</summary>

## Thoughts on a bonus challenge

For a bonus challenge, perhaps I'll extend `mdserve` to transpile SCSS on the
fly, though to be honest, that's not so much a challenge as just a thing
I'd like to get done.

## Future challenges this may spawn

 - Create a React Native text input with custom functionality, like enforced formatting, for
   example.
 - Create a native iOS app using XCode tools
 - Deploy an app to Apple Store
</details>
</article>
