# aframe-outline
v0.0.2

based upon an [example](https://stemkoski.github.io/Three.js/Outline.html) by [Lee Stemkoski](https://github.com/stemkoski).

____

![screenshot](https://cdn.glitch.com/4bcf2fe0-a91a-4620-8351-a4c042393de4%2Faframe-outline.gif?v=1577054663540)

____

## Schema

|Property|Type|Description|Default Value| 
|---|---|---|---|
|color|string|color name or value|'red'|
|scale|number|relative size to entity|1.05|
|pulse|boolean|whether to pulse|false|
|frequency|number|rate of pulse|1|

____

## Methods

### .setColor(<string>)
  
  ```
  entity.components.outline.setColor('purple');
  ```
### .pulse(<frequency>)
  ```
  entity.components.outline.pulse(1.5);
  ```
### .stopPulse()
  ```
  entity.components.outline.stopPulse();
  ```
  
  ____


## Include Component in Head after AFRAME library:

```
<script src="aframe-outline.min.js"></script>

```
___

## Use default in HTML

```

<a-sphere outline></a-sphere>

```
___

## Use custom in HTML

```

<a-sphere outline="color:green ; pulse:true"></a-sphere>


```

___

## Use dynamically in JavaScript

```

const s = document.createElement('a-sphere');
s.setAttribute('outline','color:orange');

setTimeout( _=>{

 s.components.outline.setColor('yellow');
 s.components.outline.pulse();

} , 5000);

```


