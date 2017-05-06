# Lslider - An ultra-simple jQuery slider plugin

[![GitHub version](https://badge.fury.io/gh/e-lLess%2Flslider.svg)](https://badge.fury.io/gh/e-lLess%2Flslider)

Lslider is an ultra-simple jQuery slider plugin
        
## Demo

http://plugins.e-lless.be/lslider/

## Installation

Obvious install with [Bower](http://bower.io) :

> $ bower install lslider --save

## How to use ?

In your HTML page, between <head> tags, retrieve styles:

``` html 
<link href="path_to_lslider_css" rel="stylesheet" type="text/css" />
```

In your HTML page, between <head> tags, retrieve jQuery and lslider :

``` html 
<script src="directory_of_your_jquery/jquery.js"></script>
<script src="directory_of_your_completer/jquery.lslider.js"></script>
```

Into your HTML code, place the following code and replace/add your own images :

``` html 
<ul class="lslider">
    <li class="active"><img src="img/item-1.jpg" alt="Item 1" /></li>
    <li><img src="img/item-2.jpg" alt="Item 2" /></li>
    <li><img src="img/item-3.jpg" alt="Item 3" /></li>
    <li><img src="img/item-4.jpg" alt="Item 4" /></li>
</ul>
```
 
Invoke the plugin :

``` javascript
$('.lslider').lslider({});
```

## Options

Following options are available :

* **animationSpeed**: int, speed of the animation (ms)
* **pause**: int, duration of one slide transition (ms)
* **beforeDisplay**: function(e, hiddenElement), function, callback fired before display of image
* **afterDisplay**: function(e, visibleElement), function, callback fired after display of image
                
