# Faux block link

The faux block link pattern allows you to make an entire block a link, whilst having links nested within in that block also clickable.

The main link (i.e. the faux block link) is absolutely positioned across the entire block, any nested links have a little z-index bump to lift them on top. Nice.

This implementation is not compatible with IE8 and below. On these browsers this falls back to being two standard anchors.

<div class="example">
    <div class="gs-o-faux-block-link">
        <a href="http://www.bbc.co.uk/news" class="gs-o-faux-block-link__overlay-link">
          <h3>Heading</h3>
        </a>
        <p>This is some summary <a href="http://www.bbc.co.uk/sport">text</a></p>
    </div>
</div>

```html
<div class="gs-o-faux-block-link">
    <a href="http://www.bbc.co.uk/news" class="gs-o-faux-block-link__overlay-link">
      <h3>Heading</h3>
    </a>
    <p>This is some summary <a href="http://www.bbc.co.uk/sport">text</a></p>
</div>
```

<link rel="stylesheet" href="https://bbc.github.io/grandstand/assets/css/grandstand-latin-flexbox-4.1.0.enhanced.css">
