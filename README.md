# jQuery-Concat
## String concatenation made easy.

jQuery-Concat is an elegant way to concatenate strings in jQuery. With over 5 unit tests, string concatenation has never been more easy or reliable*.

### Example

```js
var x = 'http://www.xyzftp/myservice/service1.svc';
var y = '/logincheck';
var z = $.concat(x, y);

console.log(z); // "http://www.xyzftp/myservice/service1.svc/logincheck"
```

### Documentation

#### `jQuery.concat(...)`

Concatenates all of its arguments and returns the result as a string.