# Daily Tech Challenge #6
## Building a simple blog with Jekyll

Today, my challenge was to explore Jekyll and build a simple blog with it. I was
expecting it to be a rather easy challenge, and a change of pace after slogging
through uncharted territory in React Native. It is now the 11th hour, with no
time to spare, and I haven't much of a blog, or blog post, to show for it.

So what happened? Well, you see, I was fully aware that today's challenge was on
the easy side of things, so to really push my time management skills to the
limit, I decided to promise everyone lasagna for dinner. The lesson, it turns
out, is not to try to do too many things at once. One of the lasagnas came out
terribly.

I ran out of time to do anything visually or technologically impressive (is
something you can learn and do in a day ever that way?), but here's what I did
manage to do:

1. Got Jekyll running locally
2. Got Jekyll running on GitHub pages
3. Included the contents of a file in a **_data** folder in a nav template
4. Created two different layouts:
   - bare layout, which includes nothing
   - basic layout, which includes a header and a footer with navigation
5. Neither of the above layouts were styled, but I did load some scss, which
   Jekyll processed for me automatically.
6. Populated a practice blog with pages from a Project Gutenberg book.

Besides that, I was just faffing about, really. I probably ought to have made the
challenge success criteria more concrete, and probably scoped down. What is the
measure for success here? Just running Jekyll? Do I want something that looks
good?

## Tech process

To get up and running, I installed the latest Ruby with homebrew. That part's
not because I had to, but because I wanted to.

Then, I ran the following:

```console
$ gem install bundler jekyll
```

Finally, I created the scaffolding for a jekyll blog using `jekyl new blogname`.

At this point, I realized I had no posts for the blog. In retrospect, I could
have used the blog posts for my daily tech challenges, but I chose to split the 
chapters of a book I found on Project Gutenberg using the code shown below.

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
