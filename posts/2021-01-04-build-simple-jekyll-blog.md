<article>

<header>

<div class="maxwidth">

# Daily Tech Challenge #6
## Build a simple blog with Jekyll

<div class="author">By Joe Taylor</div>

<div class="blurb">With the pressure of time, and no Jekyll experience, I set out to build a basic blog in a day. Did I succeed or fail? You be the judge.</div>

<div class="postdate">January 4, 2022</div>

</div>

</header>

<section>
<div class="maxwidth cols">

Today, my challenge was to explore Jekyll and build a simple blog with it. I was
expecting it to be a rather easy challenge; a nice change of pace after slogging
through uncharted territory in React Native. It is now the 11th hour, with no
time to spare, and I haven't much of a blog, or blog post, to show for it.

So what happened? Well, you see, I was fully aware that today's challenge was on
the easy side of things, so to really push my time management skills to the
limit, I decided to promise everyone lasagna for dinner. The lesson, it turns
out, is not to try to do too many things at once. One of the lasagnas came out
terribly.

I ran out of time to do anything visually or technologically impressive, but
here's what I did manage to accomplish:

1. I got Jekyll running locally and on GitHub pages
2. I included the contents of a YAML file in the **_data** folder in a nav template
3. I created two different layouts:
   - A bare layout, which just imports content as-is into a blank page
   - A basic layout, which includes a header and a footer, with navigation and
     some really basic HTML boilerplate
4. Neither of the above layouts were styled, but I did try loading some SCSS.
   Jekyll processed that for me automatically - it works great.
5. Finally, I populated a practice blog with pages from a Project Gutenberg
   book.

Besides that (or in addition), I was just faffing about, really. I probably
ought to have made the challenge's success criteria more concrete, and scoped
down, because what is the measure for success here? Just running Jekyll? Dit it
need to look good?

## Technical process

To get up and running, I installed the latest Ruby with homebrew. I installed
the latest and greatest not because I had to, but because I wanted to.

Next, I ran the following:

```console
$ gem install bundler jekyll
```

Finally, I created the scaffolding for a Jekyll blog using

```console
$ jekyl new blogname
````

The blog was customized using YAML frontmatter in conjunction with magic folders
like **_layouts**, **_posts**, **_sass**, **_includes**, and **_data**.

I had no posts for the blog, but I wanted them. In retrospect, I could have used
the blog posts for my daily tech challenges, but I chose to split the chapters
of a book I found on Project Gutenberg using the code shown below.

```javascript
const path = require('path');
const fs = require('fs').promises;

(async () => {
    const file = await fs.readFile(path.join(__dirname, 'pg67104.txt'), 'utf8');

    let [book, extra] = file.split("*** END OF THE PROJECT GUTENBERG EBOOK THE A B C OF RELATIVITY ***");

    let chapterOneStart = book.match(/CHAPTER ONE:/);
    book = book.substring(chapterOneStadrt.index);
    let chapterHeadings = book.match(/^CHAPTER (ONE|[IXV]+: [A-Z]+)/gm);
    let chapterIndexes = chapterHeadings.map(heading => book.indexOf(heading));
    let chapters = chapterIndexes.map(
        (startIndex, i) => {
            return book.substring(startIndex, chapterIndexes[i+1]||book.length).trim();
        }
    );

    await Promise.all(chapters.map(chapter => {
        let chapNum = chapter.match(/CHAPTER (ONE|[IXV]+)/)[1];
        if (chapNum == "ONE") chapNum = "I";
        return fs.writeFile(
            path.join(__dirname, "posts/2022-01-04-chapter-" + chapNum + ".md"),
`---
name: Chapter ${chapNum}
date: 2022-01-04
author: Bertrand Russell
---
${chapter}`
        );
    }));
})();
```

It was an ad hoc script. I split on chapters, and generated a bunch of files
that are very nearly valid markdown. It worked. I chose to use async promises to
generate the files for some reason. I guess I was pretending it was a lot of
work that needed to be fanned out for parallel processing or something.

Anyhow, all told, I have a Jekyll blog. It is a bad blog, but it's my bad blog.
I feel like I should have had more to show for my effort, but there was a real
paucity of time to build today so we've got what we've got.

## Conclusion

I should have chosen something more specific for today's challenge. This was a
chance to play with Jekyll, yes, but most aspects of blog configuration and
creation are not technically interesting, and writing a blog is something that
takes a lot longer than a day. Maybe building a Jekyll theme would have been a
better challenge.

I did get something running in Jekyll, but it feels weird to call that a success
since it's not really a challenge at all. I'd say I failed today's challenge
because I did a half-assed job on the writeup, and because I didn't define the
problem well enough to claim success.

Today's repo, as always, is on GitHub. <a
href="https://github.com/textninja/dtc0006">Here's the link.</a>

## How to do better next time

Next time, I'll stick to making one lasagna.
</div>
</section>

</article>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

<style>

.maxwidth {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
}

.maxwidth.cols {
    columns: 2;
    column-fill: balance;
    column-gap: 70px;
    padding-top: 50px;
    font-size: 1.1em;
    height: 1300px;
}

:root {
    font-family: Lato, sans-serif;
}

html, body, article {
    min-height: 100%;
    margin: 0; padding: 0;
}

article header {
    background-color: #e1e1e1;
}

article header, article section {
    padding: 100px;
}

article section {
    padding-top: 0;
}

h1 {
    font-size: 18px;
    margin: 0;
    margin-bottom: 1em;
    color: #050605;
}

article header h2 {
    font-size: 48px;
    margin: 0;
    margin-left: -4px;
    max-width: 500px;
}


article section p:first-child {
    margin-top: 0;
}

pre {
    width: 100%;
    display: block;
    overflow: auto;
    break-inside: avoid;
}

.author {
    margin-top: 20px;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 18px;
    color: #050605;
}

.blurb {
    font-size: 20px;
    max-width: 700px;
    color: #050605;
}

.postdate {
    margin-top: 30px;
    font-style: italic;
    color: #74786d;
}

h2 {
    break-after: avoid;
}

article section p,
article section h2 {
    margin-left: 0;
}

article section h2 {
    margin-top: 1.5em;
    font-size: 1.1em;
}

pre {
    background-color: #2f402f;
    color: white;
    padding: 10px;
    box-sizing: border-box;
}
</style>
