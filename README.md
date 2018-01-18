# markov.js
Just another Markov chain library.

## API

```javascript
var markovinstance = new Markov({
  input: "What ever string or array you want... I don't care.",
  regularity: 1
});
```

Pretty simple, just create a new instance. The input is either an array of elements or a sentence, I don't care.

## Methods

### generate

```javascript
markovinstance.generate(1000);
```

Just generate a string. If you want an array, just `.split()` it. I literally don't care. The only argument is the length. Either it will generate a string that length, or it will generate till it stops. In fact, you dont have to include the argument. I... definitely don't care.

## Notes
* This was intended to be used for a different project, so all the references to music in the source code is just for that

## License

You wan't to know what it says? It says I dont care wether you sell it or copy it. Do what you want. Teach you cats about this code if you want. In fact, you should write the next Harry Potter with this library. Just do it.
