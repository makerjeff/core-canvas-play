# core-canvas-play

## Links
- [Core HTML5 Canvas Book Example Code](https://github.com/corehtml5canvas/code/blob/master/ch04/example-4.1/example.js)
- [Node.JS Base64 string conversion](http://stackoverflow.com/questions/23097928/node-js-btoa-is-not-defined-error) Use this method to convert to and from base64.
- [Math.round() trick to convert anything to 2 decimal places](http://stackoverflow.com/questions/11832914/round-to-at-most-2-decimal-places-in-javascript)
- [When to use Base64 images and when not to](http://davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)
- [Basic CSS Sprite Usage](https://www.nczonline.net/blog/2010/07/06/data-uris-make-css-sprites-obsolete/)
- [Node.js / IO.js Stream Primer (Youtube)](https://www.youtube.com/watch?v=yOSNQZm3Trw): Streams, Piping, stdout.
- [W3Resource: Using Buffers in Node.js](http://www.w3resource.com/node.js/nodejs-buffer.php)
- [Allen's Adventure in Tech: Node.JS Buffer Tutorial](https://allenkim67.github.io/2016/05/17/nodejs-buffer-tutorial.html)
- [Save Canvas as JPG to Desktop](http://stackoverflow.com/questions/17397319/save-canvas-as-jpg-to-desktop): Use an anchor element.
- [Facebook Login API](https://developers.facebook.com/docs/facebook-login/web)
- [Facebook Graph API: Posting to wall (verified works)](https://developers.facebook.com/docs/javascript/reference/FB.api)
- [Facebook User Feed Posting: Options, etc](https://developers.facebook.com/docs/graph-api/reference/v2.8/user/feed)
- [Stackoverflow: Uploading a Canvas Image to Facebook as Blob of MultiPart Form Data Type](http://stackoverflow.com/questions/35845623/uploading-a-canvas-image-to-facebook-as-blob-of-multipart-form-data-type)
- [Intro to CSS 3D Transforms](https://desandro.github.io/3dtransforms/)
- [Removing Git Commit History](http://stackoverflow.com/questions/13716658/how-to-delete-all-commit-history-in-github)
- [XHR Blob Request to preload entire html5 video](http://dinbror.dk/blog/how-to-preload-entire-html5-video-before-play-solved/)
- [XHR Progress MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [Promisify XHR](http://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr)
- [Switch is faster than If-Else chains](http://stackoverflow.com/questions/767821/is-else-if-faster-than-switch-case)
- [Chrome Developer: userAgent strings](https://developer.chrome.com/multidevice/user-agent): Regex for finding if device is mobile.
- [NPM Serial Port Library](https://www.npmjs.com/package/serialport)
- [ITP Labs: Serial Communication with Node.js](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-serial-communication-with-node-js/)
- [Github: Stream-Handbook](https://github.com/substack/stream-handbook)


## Notes
- When creating new buffers to transform encoding, be sure to input the type of data that it already is. That way, the buffer created will be properly interpreted.
- Use **"imageSmoothEnabled = false"** for pixelated images (think pixel art). [MDN ink](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
- Use steps() to animate CSS spritesheet animations in steps. [Treehouse Blog Tutorial](http://blog.teamtreehouse.com/css-sprite-sheet-animations-steps)

## Paper.JS Notes
- [Using Javascript Directly](http://paperjs.org/tutorials/getting-started/using-javascript-directly/)
    - Pure JS (non paperscript) differences:
        - Register a handler for DOM ready, since we can't work with Canvas before then.
        - Manually setup a Project and View for the canvas.
        - Access Paper.js classes and objects through 'paper' object, since it's no longer global.
        - Use Math functions (add(), etc) instead of operators and __Point__ and __Size__.
        - Draw view at the end. It's now only auto-handled when a view.onFrame handler is installed.
        
    - Special Handlers
        - onFrame (belongs to View class)
        - onResize (belongs to View class)
        
- Methods to Note:
    - tool.minDistance = \<number\>: sets the minimum distance / segment length.
    - paper.project.activeLayer.removeChildren();   : Clear active layer.
    - path.segments[0].point = use this to access the first segment point (closing the path, etc)
    - __path.closed = true;__  : Use this for closing arcs, lines, etc.
    - __path.clone()__ : clone a path
    - __path.fullySelected = true__ : Select all handles (displaying handles as well);
    - __\<item\>.remove()__ : Removes current item.
    - __event.delta__ : the vector of the mouse movement between frames. Use this to control width using speed.
    - __event.middlePoint__ : Middle of a 'section'. part of mouse events for Paper.js.
    - __path.insert(index, segment)__ : to add a point to the start of path. Makes the ladder thing.
    - __path.fillColor = {hue: number, saturation: 1, brightness: 1}__ : colorize using HSL.
    - __event.point__: (returned from mouse events) Where the user has clicked.
    - Animation:
        - __event.count__: number of times the frame event has fired.
        - __event.time__: total time since first frame was fired.
        - __event.delta__: time passed in seconds since the last frame event.
        - __paper-tut-animation-play-3.html__: Working paper.js animation, using javascript and not paper script.
    - Hit Tests:
        - [item.getItems(options)](http://paperjs.org/reference/project/#getitems-options): Use this to search for items during HitTests.
        
   

        
