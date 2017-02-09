# Bullet

Align an icon with some text. Similar to how a bullet point has an icon with some text.

<div class="example">
    <span class="gs-o-bullet">
        <span class="gs-o-bullet__icon gel-icon">
            <svg><use xlink:href="#gel-icon-duration"></use></svg>
        </span>
        <span class="gs-o-bullet__text">2:31</span>
    </span>
    <br>
    <span class="gs-o-bullet gs-o-bullet-">
        <span class="gs-o-bullet__icon gel-icon">
            <svg><use xlink:href="#gel-icon-duration"></use></svg>
        </span>
        <span class="gs-o-bullet__text">2:31</span>
    </span>
    <br>
    <span class="gs-o-bullet gs-o-bullet+">
        <span class="gs-o-bullet__icon gel-icon">
            <svg><use xlink:href="#gel-icon-duration"></use></svg>
        </span>
        <span class="gs-o-bullet__text">2:31</span>
    </span>
    <br>
    <span class="gs-o-bullet gs-o-bullet--reverse">
        <span class="gs-o-bullet__icon gel-icon">
            <svg><use xlink:href="#gel-icon-duration"></use></svg>
        </span>
        <span class="gs-o-bullet__text">2:31</span>
    </span>
    <div style="max-width: 200px;">
        <span class="gs-o-bullet gs-o-bullet+ gs-o-bullet--block">
            <span class="gs-o-bullet__icon gel-icon">
                <svg><use xlink:href="#gel-icon-duration"></use></svg>
            </span>
            <span class="gs-o-bullet__text">The `--block` modifier wraps the text around below the icon.</span>
        </span>
    </div>
</div>

```html
<span class="gs-o-bullet">
    <span class="gs-o-bullet__icon gel-icon">
        <svg><use xlink:href="#gel-icon-duration"></use></svg>
    </span>
    <span class="gs-o-bullet__text">2:31</span>
</span>

<span class="gs-o-bullet gs-o-bullet-">
    <span class="gs-o-bullet__icon gel-icon">
        <svg><use xlink:href="#gel-icon-duration"></use></svg>
    </span>
    <span class="gs-o-bullet__text">2:31</span>
</span>

<span class="gs-o-bullet gs-o-bullet+">
    <span class="gs-o-bullet__icon gel-icon">
        <svg><use xlink:href="#gel-icon-duration"></use></svg>
    </span>
    <span class="gs-o-bullet__text">2:31</span>
</span>

<span class="gs-o-bullet gs-o-bullet--reverse">
    <span class="gs-o-bullet__icon gel-icon">
        <svg><use xlink:href="#gel-icon-duration"></use></svg>
    </span>
    <span class="gs-o-bullet__text">2:31</span>
</span>

<span class="gs-o-bullet gs-o-bullet+ gs-o-bullet--block">
    <span class="gs-o-bullet__icon gel-icon">
        <svg><use xlink:href="#gel-icon-duration"></use></svg>
    </span>
    <span class="gs-o-bullet__text">The `--block` modifier wraps the text around below the icon.</span>
</span>
```

<link rel="stylesheet" href="https://bbc.github.io/grandstand/assets/css/grandstand-latin-flexbox-4.1.0.enhanced.css">

<div style="display: none;">
    <svg id="gel-icon-duration" viewBox="0 0 32 32"><polygon points="17,15.4 17,6 15,6 15,16.6 23.8,21.7 24.8,19.9"></polygon><path d="M16,4c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12S4,22.6,4,16C4,9.4,9.4,4,16,4 M16,0C7.2,0,0,7.2,0,16c0,8.8,7.2,16,16,16 s16-7.2,16-16C32,7.2,24.8,0,16,0L16,0z"></path></svg>
</div>
