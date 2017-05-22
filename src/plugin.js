import {version as VERSION} from '../package.json';

// Default options for the plugin.
import defaults from './defaults';

import ShareButton from './ShareButton';
import ShareOverlay from './ShareOverlay';

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const onPlayerReady = (player, options) => {
  player.addClass('vjs-videojs-share');
  player.getChild('controlBar').addChild('ShareButton', options);
  player.addChild('ShareOverlay', options);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function share
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const share = function(options) {
  onPlayerReady(this, videojs.mergeOptions(defaults, options));
};

videojs.registerComponent('ShareButton', ShareButton);
videojs.registerComponent('ShareOverlay', ShareOverlay);

// Register the plugin with video.js.
registerPlugin('share', share);

// Include the version number.
share.VERSION = VERSION;

export default share;
