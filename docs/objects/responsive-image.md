# Responsive Image

The responsive image object automatically reserves the space needed for an image to be inserted with a grey BBC placeholder.

Here you can see it when the image is broken:

<div class="example">
    <div class="gs-o-responsive-image">
        <img src="" alt="BBC background">
    </div>
</div>

```html
<div class="gs-o-responsive-image">
    <img src="https://placebear.com/200/200" alt="">
</div>
```

## 1 by 1 ratio
<div class="example">
    <div class="gs-o-responsive-image gs-o-responsive-image--1by1">
        <img src="https://placebear.com/200/200" alt="Bear">
    </div>
</div>

```html
<div class="gs-o-responsive-image">
    <img src="https://placebear.com/200/200" alt="">
</div>
```
## 16 by 9 ratio

<div class="example">
    <div class="gs-o-responsive-image gs-o-responsive-image--16by9">
        <img src="https://placebear.com/355/200" alt="Bear">
    </div>
</div>

```html
<div class="gs-o-responsive-image gs-o-responsive-image--16by9">
    <img src="https://placebear.com/355/200" alt="Bear">
</div>
```

<link rel="stylesheet" href="https://bbc.github.io/grandstand/assets/css/grandstand-latin-flexbox-4.1.0.enhanced.css">

## No placeholder

<div class="example">
    <div class="gs-o-responsive-image gs-o-responsive-image--16by9 .gs-o-responsive-image--no-placeholder">
        <img src="https://placebear.com/355/200" alt="Bear">
    </div>
</div>

```html
<div class="gs-o-responsive-image gs-o-responsive-image--16by9 .gs-o-responsive-image--no-placeholder">
    <img src="https://placebear.com/355/200" alt="Bear">
</div>
```
