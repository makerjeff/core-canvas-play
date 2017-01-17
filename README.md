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

## Notes
- When creating new buffers to transform encoding, be sure to input the type of data that it already is. That way, the buffer created will be properly interpreted.
- Use **"imageSmoothEnabled = false"** for pixelated images (think pixel art). [MDN ink](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled)
- Use steps() to animate CSS spritesheet animations in steps. [Treehouse Blog Tutorial](http://blog.teamtreehouse.com/css-sprite-sheet-animations-steps)
