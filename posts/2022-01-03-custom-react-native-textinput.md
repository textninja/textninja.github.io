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

article header h2 {
    font-size: 140px;;
    line-height: 1em;
    margin: 0;
    margin-bottom: 2rem;
}


.max-width-wrapper {
    max-width: 900px;
}

section h2 {
    padding-left: 1.2rem;
    margin-bottom: 2rem;
    font-size: 2em;
}

img {
    margin-left: auto;
    margin-right: auto;
    display: block;
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

section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 1fr;    
    grid-column: 1 / 4;
    padding-bottom: 2rem;
}

section:nth-of-type(4n + 2) {
    background-color: #4f5b6a;
}

section:nth-of-type(4n + 3) {
    background-color: #637389;
}

section:nth-of-type(4n + 4) {
    background-color: #323c4e;
}

p {
    text-indent: 1em;
}

a {
    color: #3c434c;
}

</style>

<article markdown="1">



<div class="post-date"><span><span>January 3rd, 2022</span><br>By Joe Taylor</span></div>

<header markdown="1">

# Daily Tech Challenge #5
## Build a custom TextInput using React Native

</header>

<section>
<div class="max-width-wrapper" markdown="1">

I had so much fun using React Native for <a href="2022-01-02-build-and-run-reactive-native-app.md">yesterday's challenge</a> that I decided to
stick with it, this time diving a little deeper into UI design by creating a
custom text input.

This plan for this text input is to have it enforce formatting and add a few
visual bells and whistles. I may try a few different types of custom inputs, but
one of the inputs should display a specially formatted dollar sign before any
numbers that are entered. While I could certainly build such a thing in a web
context, there are styling quirks in React Native which are inherent to the
environment components run in, so this could be a real challenge.

I should mention up front that I will make no attempt to build something that is
cross platform. I expect the styling to get a little hacky, so the text input
needs to work in iOS only, although I will take a screenshot of the final input
in the Android simulator for comparison's sake.

What I'll be going for, to start, should resemble this sketch, where the parts
emphasized are added automatically:

<div style="
    padding: 5px;
    border: solid #d9dedf 4px;
    width: 100px; margin-left: 1.2rem;
"><span style="color: #d9dedf; font-weight: bold;">$</span>256<span style="color: #d9dedf; font-weight: bold;">.00</span></div>

Let's get started. The journey begins, as before, with `expo init`.

<!--
<div style="padding: 20px; border: solid #30353a 8px;padding-right: 40px; text-transform: uppercase; text-align: center; color: #30353a; margin: 1.2rem;">
<strong>Today's repo</strong>

<ul style="padding: 0; margin: 0; margin-top: 20px;">
<li style="list-style-type: none; padding: 0; margin: 0;"><a href="https://github.com/textninja/dtc0005" style="text-decoration: none; color: #30353a;"><img src="GitHub-Mark-32px.png" style="display: inline; vertical-align: middle;"> dtc0005</a></li>
</ul>
</div>
-->


</div>
</section>

<section>
<div class="max-width-wrapper" markdown="1">

## Some preliminary setup

Before I'm able to render a custom **TextInput**, I need to be able to render a
regular **TextInput**. I'll start by creating a custom component called
**DollarInput** which acts as a thin wrapper around **TextInput**. That will be
the base I build on.

```javascript
export default function DollarInput(props) {
    return (
        <TextInput {...props} />
    );
}
```

</div>
</section>

<section>
<div class="max-width-wrapper" markdown="1">

## Attempt number 1 - state rewrite

For a first kick at the can, let's try  changing the state on the fly to lock in
all the extra visuals. We need a dollar sign and the number of cents, with the
latter being uneditable.

First, let's figure out how to reformat arbitrary input to look like money. The
only type of input that's really relevant for this purpose is digits, so we can
replace non numeric values in the user input, and then add a dollar sign to the
beginning, and the number of cents (.00) to the end.


```javascript
function moneyFormat(input) {
    let amt = parseInt(input.replace(/[^0-9.]/g, ""), 10);
    if (isNaN(amt)) amt = 0;
    return "$" + amt.toFixed(2);
}
```

Let's hook that into the **DollarInput** component we created.

```javascript
function moneyFormat(input) {
    let amt = parseInt(input.replace(/[^0-9.]/g, ""), 10);
    if (isNaN(amt)) amt = 0;
    return "$" + amt.toFixed(2);
}

export default function DollarInput(props) {
    const [val, setVal] = useState("0");
    const shownValue = moneyFormat(val);

    return (
        <TextInput
            style={styles.bigText}
            {...{...props, value: shownValue}}
            onChangeText={t => setVal(t)}
        />
    );
}
```

Right away we have issues. First of all, we can't click backspace from the end
of the input. Second, there's a flicker when we enter invalid input.  Clearly
this isn't going to work. Let's try faking out the input with a **Text**
component and hidden **TextInput** instead.

</div>
</section>

<section>

<div class="max-width-wrapper" markdown="1">

<h2>Attempt number 2 - overlay</h2>

```javascript
import styles from '../styles';

export default function DollarInput(props) {
    const [dollars, setDollars] = useState(0);
    const hiddenInputRef = useRef();

    const formattedDollars = dollars && !isNaN(dollars)
        ? (
            <>
                <Text style={{color:'#c0c0c0'}}>$</Text>{
                 dollars
                }<Text style={{color:'#c0c0c0'}}>.00</Text>
            </>
          )
        : (<Text style={{color:'#c0c0c0'}}>$</Text>);

    return (
        <View>
            <TouchableOpacity
                    style={styles.input}
                    onPress={() => hiddenInputRef.current.focus()}>
                <TextInput
                    style={{display: 'none'}}
                    value={String(dollars)}
                    keyboardType="numeric"
                    ref={hiddenInputRef}
                    onChangeText={updateDollars}
                    maxLength={5}
                />
                <Text style={styles.bigText}>{formattedDollars}</Text>
            </TouchableOpacity>
        </View>
    );

    function updateDollars(text) {
        let d = parseInt(text.replace(/[^0-9]/g), 10);
        setDollars(isNaN(d) ? 0 : d);
    }
}
```

<img src="dtc0005-attempt-2.jpeg" style="float: right; margin-left: 20px; margin-right: -330px; width: 300px; margin-top: -340px;">

For this attempt, I positioned a **TouchableOpacity** where the text input would
go, added an *invisible* **TextInput**, and rigged up the **TouchableOpacity**
to focus on the invisible input whenever it's pressed.

This very nearly works, except now there's no caret, and no way to select text
like in a normal input.

At this point, I'm nearly ready to give up. We cannot possibly build all the
native features for inputs, like text selection, keyboards, and so on, from
scratch - at least not with React Native, or if we can, certainly not in a few
hours.

</div>
</section>


<section>
<div class="max-width-wrapper" markdown="1">

<h2>Attempt number 3 - flex input</h2>

<img src="dtc0005-attempt-3.jpeg" style="float: right; margin-left: 20px; margin-right: -330px;">

It turns out there's a straightforward way to achieve our goal. With a
flexbox-based container, much like the  **TouchableOpacity** used above, we can
mimic the boundaries of a text input, but instead of hiding the input, we can
actually display it in-between the fixed pieces of text.

This method takes advantage of the fact that the static text is at the beginning
and end of our control. It would not work if the generated text or formatting
was in the middle, as is the case with a formatted credit card number (which
should have spaces in it), for example.

```javascript
export default function DollarInput(props) {
    const [isFocused, setFocused] = useState(false);
    const [textValue, setValue] = useState("");
    const inputRef = useRef();

    return (
        <View>
            <TouchableWithoutFeedback
                    onPress={() => isFocused || inputRef.current.focus()}>
                <View
                        style={
                            {...styles.input, flexDirection: "row"}
                        }>
                    <Text style={styles.bigText}>$</Text>
                    <TextInput
                        style={styles.bigText}
                        value={textValue}
                        keyboardType="numeric"
                        ref={inputRef}
                        onChangeText={updateAmt}
                        maxLength={5}
                        onPress={e => e.stopPropagation()}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                    />
                    { textValue ? <Text style={styles.bigText}>.00</Text> : null }
                </View>
            </TouchableWithoutFeedback>
        </View>
    );

    function updateAmt(text) {
        setValue(text.toString().replace(/[^0-9]/g, "").replace(/^0+/, ""));
    }
}
```

We finally have something that shows the caret, restricts the input, and
includes text automatically at the beginning and the end. All in a day's work!

</div>
</section>


<section style="background-color: #2b262e; padding-bottom: 50vh;">
<div style="grid-column: 2 / all; text-align: left;">
<h2 style="font-size: 120px; margin-left: 0; padding-left: 0;">Challenge successful.</h2>

<p style="text-indent: 0; font-size: 1.5em; margin-left: 0; font-style: italic; margin-right: 50px;">It has its flaws, but we built a custom text input, just like we said we would.</p>

</div>
</section>

</article>

<!-- highlight section with #e5deab, black -->

<link rel="stylesheet" type="text/css" href="https://unpkg.com/prism-themes@1.9.0/themes/prism-one-light.min.css">
<style>
    pre[class*=language-] {
        font-size: 0.8em;
        border-radius: 0;
    }
    code[class*=language-], pre[class*=language-] {
        background-color: #cdd9eb;
    }
</style>
<script src="https://unpkg.com/prismjs@1.25.0/components/prism-core.min.js"></script>
<script src="https://unpkg.com/prismjs@1.25.0/plugins/autoloader/prism-autoloader.min.js"></script>
