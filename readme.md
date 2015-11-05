# Finger.js
Finger.js is a lightweight replacement for Hammer.js that utilizes a similar api.  Finger.js is a good replacement when you only need to support basic gestures in your mobile pages.

## Dependencies
Currently Finger.js depends on ```jQuery v1.7``` or higher.

## Usage
Instantiate a new instance of Finger with the element you wish to bind the listeners to.

```
var el = #("#myDiv");
var finger = new Finger(el);
```
### Events
Only basic events are currently supported (but pull requests are accepted!)

| Event         | Event Name      |
| ------------- |:---------------:|
| Swipe Left    | ```swipeleft``` |
| Swipe Right   | ```swiperight``` |

### Binding to events
Binding to events is similar to the Hammer.js and jQuery api

```
finger.on('swipeleft', function(){
	//do something cool
});
```

## License

The MIT License

Copyright (c) 2015 Scott Vehrenkamp, [scott@vehrenkamp.com](mailto:scott@vehrenkamp.com)


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.


THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


## Feedback
Feedback and pull requests are encouraged

Contact me directly: [scott@vehrenkamp.com](mailto:scott@vehrenkamp.com)

Cheers!