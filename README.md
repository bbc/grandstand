<h1 align="center">Grandstand</h1>
<p align="center">
    A collection of common CSS abstractions and utility helper classes.<br />
    <a href="http://bbc.github.io/bbc-grandstand" target="_blank"><b>BBC Grandstand</b></a>
</p>

## What is this?

Grandstand a collection of common CSS abstractions and utility helper classes

This library is built and maintained by the BBC Sport team and used by various components on BBC Sport website and within the BBC Live product.


## Contents

- [Installation](#installation)
- [Grandstand](#grandstand)
    - [GS Sass Tools](#gs-sass-tools)
    - [GEL Foundations](#gel-foundations)
    - [Objects](#objects)
    - [Utilities](#utilities)
    - [Why Grandstand?](#why-grandstand)

## Installation

Grandstand can be installed using Bower:

```bash
$ bower install --save bbc-grandstand
```

```sass
// your-app/main.scss
@import 'bower_components/bbc-grandstand/grandstand';
```

## Grandstand

Grandstand is a scalable front end architecture and a lightweight Sass framework. Consisting of a collection of common CSS abstractions and utility helper classes, Grandstand allows you to quickly development components in a reusable, performant manner.

### GS Sass Tools

Grandstand is built on top of [Grandstand Sass Tools](https://github.com/bbc/gs-sass-tools), a collection of common Sass variables, functions and mixins. This component has no CSS output, it exists purely to expose a number of tools for you to use when developing components following the Grandstand architecture.

If you are building your own component with component specific CSS then you should include the Sass Tools within your component to expose the tools contained within.

### GEL Foundations

The GEL Foundations are an un-opinionated code implementation of the GEL Foundational guidelines. Grandstand is built on top of these foundations adding a layer of opinion about how they should be used.

Grandstand outputs helper utility classes for both the [GEL Typography](https://github.com/bbc/gel-typography) and [GEL Grid](https://github.com/bbc/gel-grid) libraries. For more information on either of these libraries refer to their respective README files.

### Objects

Grandstand include a number of CSS abstractions allowing you to solve common layout and structural problems in a consistent way without duplicating code throughout your codebase.

Grandstand includes the following abstractions:

- [Bullet](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_bullet.scss) - aligns an icon with an piece of descriptive text. The icon will automatically scale to match the size of the text
- [Button](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_button.scss) - a basic pattern for creating consistent buttons
- [Faux Block Link](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_faux-block-link.scss) - make an entire block a link, whilst having nested links also clickable, see: [http://bit.ly/1q8E3Q3xw](http://bit.ly/1q8E3Q3xw)
- [Flag](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_flag.scss) - similar to the media object in design pattern but control over the vertical alignments of the text and image
- [Icon](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_icons.scss) - standardise the use of icons, inherit size from parent and cascades the `color` property to `fill`  
- [List Inline](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_list-inline.scss) - simply displays a list of items in line, items can be optional spaced, comma seperated or divided with a line
- [List UI](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_list-ui.scss) - creates blocky list items with a keyline separator between items
- [Media Island](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_media-island.scss) - creates an island around media, allowing content to be positioned on top of media
- [Media](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_media.scss) - an implementation of Nicole Sullivan's media object to align a piece of media with some text
- [Responsive Image](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_responsive-image.scss) - reserves space on the page before whilst images are being lazy loaded in
- [Table](https://github.com/bbc/bbc-grandstand/blob/master/lib/objects/_table.scss) - a generic abstraction with some basic table styling

#### Usage recommendations

These abstractions are designed to follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/) and the [open/closed principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/). Where possible you should separate the concerns of objects and your components. This allows your styles to become much more predicable and less prone to bugs caused by as a result of trying to combine object styles with component specific style.

For example, instead of this:

```html
<div class="my-component gs-o-media">
    <div class="my-component__image gs-o-media__img">

    </div>
    <div class="my-component__text gs-o-media__body">

    </div>
</div>
```

You could separate the concerns between your component specific styles and the objects:

```html
<div class="my-component">
    <div class="gs-o-media">
        <div class="gs-o-media__img">
            <div class="my-component__image" />
        </div>
        <div class="gs-o-media__body">
            <div class="my-component__text" />
        </div>
    </div>
</div>
```

Whilst this does introduce slightly more markup the effect it would have on performance is negligible and the value you this brings you for a maintainability point of view is massive.

### Utilities

Utilities are low level helper classes designed to solve common problems which do not warrant full object abstractions.

Commonly they will only apply a single declaration e.g. *align text to the right: gs-u-align-right*, or simple multiline patterns: e.g. *hide an element visually: gs-u-vh*.

The scope of utility classes is only ever one element i.e. utilities can't affect any child elements of the element they're being applied too.

As with Objects, utilities follow the [single responsibility principle](http://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/) and the [open/closed principle](http://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/).

Grandstand includes the following helper utilities:

- [Box Size](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_box-size.scss) - a simple utility to apply `box-sizing: border-box;` to an element
- [Clearfix](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_clearfix.scss) - a lightweight clearfix utility
- [Display](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_display.scss) - a collection of classes to vary the `display` property at different breakpoints
- [Spacing](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_spacing.scss) - a suite of `margin` and `padding` utility classes to control the spacing of elements
- [Text Alignment](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_text-alignment.scss) - a set of classes to control the alignment of text both horizontally or vertically
- [Visibility](https://github.com/bbc/bbc-grandstand/blob/master/lib/utilities/_visibility.scss) - various ways to control the visibility of an element. e.g. making an element only visible to screen-readers

#### !important

All utility classes carry the `!important` tag on every property to ensure our utility classes always work.

Utility classes are very specific in their intentions. For example if you applied a utility class to add 8px margin on the bottom of an element you never want to override this. If you didn't want this behaviour, you should not have used the class in the first place.

The [pro-active use of `!important`](http://cssguidelin.es/#important) guarantees this way of thinking.

## Why Grandstand?!?

This framework is named after [Grandstand](https://www.youtube.com/watch?v=HLHMxFGqhIs), a British television sport programme. Broadcast between 1958 and 2007, it was one of the BBC's longest running sports shows, alongside BBC Sports Personality of the Year.

## License

> The MIT License (MIT)
>
> Copyright 2016 British Broadcasting Corporation
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
