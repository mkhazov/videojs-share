# videojs-share

Share plugin for [video.js][videojs]. Allows user to copy video url / embed code and share video to social networks.

[![npm](https://img.shields.io/npm/v/videojs-share.svg)](https://www.npmjs.com/package/videojs-share)
[![Build Status](https://travis-ci.org/mkhazov/videojs-share.svg?branch=master)](https://travis-ci.org/mkhazov/videojs-share)
[![David](https://david-dm.org/neuron-digital/videojs-share.svg)](https://david-dm.org/neuron-digital/videojs-share)
[![David](https://david-dm.org/neuron-digital/videojs-share/dev-status.svg)](https://david-dm.org/neuron-digital/videojs-share?type=dev)

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Installation

- [Installation](#installation)
- [Usage](#usage)
  - [`<script>` Tag](#script-tag)
  - [Browserify/CommonJS](#browserifycommonjs)
  - [RequireJS/AMD](#requirejsamd)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
## Installation

```sh
npm install --save videojs-share
```

## Usage

To include videojs-share on your website or web application, use any of the following methods.

### `<script>` Tag

This is the simplest case. Get the script in whatever way you prefer and include the plugin _after_ you include [video.js][videojs], so that the `videojs` global is available.

```html
<script src="//path/to/video.min.js"></script>
<script src="//path/to/videojs-share.min.js"></script>
<script>
  var player = videojs('my-video');

  player.share();
</script>
```

### Browserify/CommonJS

When using with Browserify, install videojs-share via npm and `require` the plugin as you would any other module.

```js
var videojs = require('video.js');

// The actual plugin function is exported by this module, but it is also
// attached to the `Player.prototype`; so, there is no need to assign it
// to a variable.
require('videojs-share');

var player = videojs('my-video');

player.share();
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['video.js', 'videojs-share'], function(videojs) {
  var player = videojs('my-video');

  player.share();
});
```


[videojs]: http://videojs.com/
[clipboardjs]: https://clipboardjs.com
[vanilla-sharing]: https://github.com/avdeev/vanilla-sharing
