# Flag

The flag object is a design pattern similar to the media object, however it utilises `display: table[-cell];` to give us control over the vertical alignments of the text and image. Source: [csswizardry.com/2013/05/the-flag-object](https://csswizardry.com/2013/05/the-flag-object/).

<div class="example">
    <div class="gs-o-flag">
        <div class="gs-o-flag__img">
            <img src="https://placebear.com/200/200">
        </div>
        <div class="gs-o-flag__body">
            <p>Tūtira mai ngā iwi, tātou tātou e. Whaia te maramatanga, me te aroha e ngā iwi! Kia ko tapa tahi, kia kotahi rā. Tātou tātou e.</p>
        </div>
    </div>
</div>

```html
<div class="gs-o-flag">
    <div class="gs-o-flag__img">
        <img src="https://placebear.com/200/200">
    </div>
    <div class="gs-o-flag__body">
        <p>Tūtira mai ngā iwi, tātou tātou e. Whaia te maramatanga, me te aroha e ngā iwi! Kia ko tapa tahi, kia kotahi rā. Tātou tātou e.</p>
    </div>
</div>
```

<link rel="stylesheet" href="https://bbc.github.io/grandstand/assets/css/grandstand-latin-flexbox-4.1.0.enhanced.css">
