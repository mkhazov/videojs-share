const ModalDialog = videojs.getComponent('ModalDialog');

/**
 * Share modal.
 */
class ShareModal extends ModalDialog {
  constructor(player, options) {
    super(player, options);

    this.playerClassName = 'vjs-videojs-share_open';
  }

  open() {
    var player = this.player();
    player.addClass(this.playerClassName);
    super.open();
    player.trigger('sharing:opened');
  }

  close() {
    var player = this.player();
    player.removeClass(this.playerClassName);
    super.close();
    player.trigger('sharing:closed');
  }
}

export default ShareModal;
