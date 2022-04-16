---
title: Hello Demo!
---
# Markdown Cheatsheet

<!--suppress ALL -->
<hr />

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Regular Text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Ut tempus purus at lorem. Aliquam ante. Donec quis nibh at felis congue commodo.

**Bold Text.** Etiam bibendum elit eget erat. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna.

*Italic text.* Etiam quis quam. Nullam rhoncus aliquam metus. Integer in sapien. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.

***Both bold and italic text.*** Pellentesque sapien. Praesent id justo in neque elementum ultrices.


> This is a quote by Leonardo da Vinci


1. List item 1
1. List item 2
1. List item 3
    1. List sub-item 3.1
    1. List sub-item 3.2
1. List item 4

    > This blockquote belongs to the list item above and should not interrupt ordering

1. List item 5

- Unordered List item 1
- Unordered List item 2
- Unordered List item 3
    - Unordered List sub-item 3.1
    - Unordered List sub-item 3.2
- Unordered List item 4

* Alternative unordered list item 1
* Alternative unordered list item 2
* Alternative unordered list item 3

Code block needs to be indented
    <html>
        <head>
        </head>
    </html>

Or used with backticks either `inline` or on multiple lines:
```javascript
var s = "just like this";
alert(s);
```

Horizontal line:
***

A regular link looks like this: [Duck Duck Go](https://duckduckgo.com).

It can also be shortened: <https://duckduckgo.com>

Email: <lehotsky@atlas.sk>

You can <strong>also use a regular</strong> <html\>

This is MDX, so it also allows us to import and use React Components. If you put the component into `MDXProvider` in `layout-mdx.js`, you don't even need to import it.

<DemoComponent name={"MDX!"} />

This is a video file: <Video src="/demo/video-demo.mp4" type="video/mp4" />

This is an audio file: <Audio src="/demo/audio-demo.mp3" type="audio/mp3" />

This is an image: <Image src="/demo/image-demo.svg" alt="Alternative text if the image fails to load" />

Image with relative path: <Image src="image-demo.svg" alt="If no absolute path is used, static files will have to be located under 'demo' folder (because this file is hosted at /demo and they will be referenced relatively)" />

This is an inline image: <ImageInline src="image-demo.svg" alt="If no absolute path is used, static files will have to be located under 'demo' folder (because this file is hosted at /demo and they will be referenced relatively)" />

And this is a Markdown image, which is also inline by default: ![Alternative text if the image fails to load](/demo/image-demo.svg "And this text is displayed on mouse hover")
