# BBC Grandstand

[BBC Grandstand](https://www.youtube.com/watch?v=HLHMxFGqhIs) is a collection of common CSS object abstractions and utility helper classes.

> Grandstand was a British television sport programme. Broadcast between 1958 and 2007, it was one of the BBC's longest running sports shows, alongside BBC Sports Personality of the Year.

The library is built and maintained by the BBC Sport team and used by components on the BBC Sport website and within the BBC Live product.

The idea behind setup is very much inspired by the great work of [Harry Roberts](http://www.csswizardry.com) and his Inverted Triangle CSS architecture and [Inuit CSS](github.com/inuitcss).

> The Inverted Triangle CSS architecture or ITCSS is specifically designed for managing CSS is scale. It is very much recommended [reading](https://speakerdeck.com/dafed/managing-css-projects-with-itcss)/[viewing](https://www.youtube.com/watch?v=1OKZOV-iLj4) that you take a look at him talking through the ideas.

Following this approach a component should be primarily constructed using common objects and abstractions, the GEL Foundations and utility classes. The purpose of this library is to manage these common styles.

A component should then only require a small amount of bespoke styling. This is packaged with the component and gets inlined on the page.

## Dependancies

- **Sport Sass Tools** - The Sport Sass Tools ([sp-sass-tools](https://github.com/bbc/sp-sass-tools)) package is a common collection of Sass Settings, Functions and Mixins used by the library and all Sport developed components.

- **GEL Foundations** - This is a flexible code implementation of the GEL foundational guidelines ([Typography](https://github.com/bbc/gel-typography), [Grid](https://github.com/bbc/gel-grid) & [Iconography](https://github.com/bbc/gel-iconography)).

## Prefixes

With sharing of code in mind, all classes and output within this library should be prefixed using the `gs-` prefix. This will help us mitigate any potential clash of classname within other products.

> In a perfect world every product would prefix its own styles to further mitigate this problem.

## Namespacing

The approach to writing and applying CSS we take very much promotes adding classes in the DOM. This creates two distinct problems for other developers working with this code:

- **Clarity** - which classes do what? which classes are related to each other (if at all)? which classes are optional? which classes can be reused? which classes can you delete? etc?
- **Confidence** - which class do I modify for my desired change? are there any side-effects to change this class? am I safe to remove this class?

There is loads more information about this in Harry Roberts post about: [More Transparent UI Code with Namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/)

As well as adding the prefix detailed above, we also want to add specific namespaces to our classes to help alleviate the problems details above and in Harry’s article.

### Our Namespaces

- `o-`: Signify that something is an [Object](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#object-namespaces-o-), and that it may be used in any number of unrelated contexts to the one you can currently see it in. Making modifications to these types of class could potentially have knock-on effects in a lot of other unrelated places. Tread carefully.
- `c-`: Signify that something is a [Component](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#component-namespaces-c-). This is a concrete, implementation-specific piece of UI. All of the changes you make to its styles should be detectable in the context you’re currently looking at. Modifying these styles should be safe and have no side effects.
- `u-`: Signify that this class is a [Utility](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#utility-namespaces-u-) class. It has a very specific role (often providing only one declaration) and should not be bound onto or changed. It can be reused and is not tied to any specific piece of UI.
- `t-`: Signify that a class is responsible for adding a [Theme](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/#theme-namespaces-t-) to a view. It lets us know that UI Components’ current cosmetic appearance may be due to the presence of a theme.

### Namespace Examples

Here are a few examples of what these namespaces might look like in practice:

```css
// our media object pattern
.gs-o-media {}
.gs-o-media__img {}
.gs-o-media__body {}

// a sample component
.gs-c-my-component {}
.gs-c-my-component—large {}
.gs-c-my-component__title {}

// visually hidden utility
.gs-u-vh {}

// apply the sport theme to a component
.gs-t-sport {}
```
