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
    this.player().addClass(this.playerClassName);
    super.open();
    this.player().trigger('sharing:opened');
  }

  close() {
    this.player().removeClass(this.playerClassName);
    super.close();
    this.player().trigger('sharing:closed');
  }
}

export default ShareModal;
