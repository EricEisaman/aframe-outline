# aframe-outline
____

![screenshot](https://cdn.glitch.com/4bcf2fe0-a91a-4620-8351-a4c042393de4%2Foutline.png?v=1577048918783)

____

## Schema

|Property|Type|Description|Default Value| 
|---|---|---|---|
|color|string|color name or value|'red'|


____

## Methods

### .setColor(<string>)
  
  ```
  entity.components.outline.setColor('purple');
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

<a-sphere outline="color:green"></a-sphere>


```

___

## Use dynamically in JavaScript

```

const s = document.createElement('a-sphere');
s.setAttribute('outline','color:orange');

setTimeout( _=>{

 s.components.outline.setColor('yellow');

} , 5000);

```


