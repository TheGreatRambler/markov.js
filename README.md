# markov.js
Just another Markov chain library.

## API

```javascript
var markovinstance = new Markov({
  corpus: "What ever string or array you want... I don't care.",
  regularity: 1
});
```

Pretty simple, just create a new instance. The corpus is either an array of elements or a sentence, I don't care.

## Methods

### generate

```javascript
markovinstance.generate(1000);
```

Just generate a string. If you want an array, just `.split()` it. I don't care. The only argument is the length. Either it will generate a string that length, or it will generate till it stops.

## Notes
* This was intended to be used for a different project, so all the references to music in the source code is just for that
