# Media Island

The media island is design to isolate media items from other elements.
It also has the ability to position things on top of the images
such as media icons

<div class="example">
    <div class="gs-o-media-island">
        <img src="https://placebear.com/200/200" alt="Bear"/>
        <div class="gs-o-media-island__icon">
            <span class="gel-icon gel-icon-play" style="height: 32px; width: 32px;">
                <svg>
                    <use xlink:href="#gel-icon-play"></use>
                </svg>
            </span>
        </div>
    </div>
</div>

```html
<div class="gs-o-media-island">
    <img src="https://placebear.com/200/200" alt="Bear"/>
    <div class="gs-o-media-island__icon">
        <span class="gel-icon gel-icon-play" style="height: 32px; width: 32px;">
            <svg>
                <use xlink:href="#gel-icon-play"></use>
            </svg>
        </span>
    </div>
</div>
```

<link rel="stylesheet" href="https://bbc.github.io/grandstand/assets/css/grandstand-latin-flexbox-4.1.0.enhanced.css">

<div style="display: none">
    <svg>
        <symbol viewBox="0 0 32 32" id="gel-icon-play">
            <path d="M3 32l26-16L3 0"/></symbol><symbol viewBox="0 0 32 32" id="gel-icon-pop-out"><path d="M20 30H2V12h6v-2H0v22h22v-8h-2"/><path d="M28 4v14H14V4h14m4-4H10v22h22V0z"/></symbol><symbol viewBox="0 0 121 32" id="gel-icon-premier"><path d="M31.5 11.3h-3.3v3.6h3.5c1.3 0 1.9-.7 1.9-1.9 0-1.1-.9-1.7-2.1-1.7zm-15.5 0h-2.8v4.1H16c1.3 0 2.2-.5 2.2-2s-1-2.1-2.2-2.1zm90.4 0h-3.3v3.6h3.5c1.3 0 1.9-.7 1.9-1.9 0-1.1-.9-1.7-2.1-1.7z"/><path d="M0 0v32h121V0H0zm16.6 18.7h-3.4V24H9V8h7.6c3 0 5.8 1.4 5.8 5.2 0 3.9-2.3 5.5-5.8 5.5zM34.2 24c-.4-.5-.4-2.1-.5-2.6-.1-1.6-.4-3.3-2.3-3.3h-3.2V24H24V8h8.2c2.8 0 5.6 1.3 5.6 4.5 0 1.7-.8 3.4-2.5 4 1.7.4 2.2 2.3 2.3 3.8 0 .7.1 3 .7 3.6h-4.1zm19.1 0h-13V8H53v3.3h-8.6v2.8h7.8v3.2h-7.8v3h8.8V24zm20.3 0h-3.9V11.9L66.2 24H63l-3.4-12.1V24h-3.9V8h6.1l2.8 10.7L67.4 8h6.1v16zm7.1 0h-4.2V8h4.2v16zm15.8 0h-13V8h12.7v3.3h-8.6v2.8h7.8v3.2h-7.8v3h8.8V24zm12.6 0c-.4-.5-.4-2.1-.5-2.6-.1-1.6-.4-3.3-2.3-3.3h-3.2V24h-4.2V8h8.2c2.8 0 5.6 1.3 5.6 4.5 0 1.7-.8 3.4-2.5 4 1.7.4 2.2 2.3 2.3 3.8 0 .7.1 3 .7 3.6h-4.1z"/>
        </symbol>
    </svg>
</div>
