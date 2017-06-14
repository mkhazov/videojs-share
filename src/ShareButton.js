const Button = videojs.getComponent('Button');

/**
 * Share button.
 */
class ShareButton extends Button {
  constructor(player, options) {
    super(player, options);

    this.addClass('vjs-menu-button');
    this.addClass('vjs-share-control');
    this.addClass('vjs-icon-share');
    this.controlText(player.localize('Share'));
  }

  handleClick() {
    this.player().getChild('ShareOverlay').open();
  }
}

export default ShareButton;
