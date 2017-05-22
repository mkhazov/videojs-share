import ShareModal from './ShareModal';
import ShareModalContent from './ShareModalContent';

const Component = videojs.getComponent('Component');

/**
 * Share overlay.
 */
class ShareOverlay extends Component {
  constructor(player, options) {
    super(player, options);

    this.player = player;
    this.options = options;
  }

  _createModal() {
    const content = new ShareModalContent(this.player, this.options).getContent();

    this.modal = new ShareModal(this.player, {
      content,
      temporary: true
    });

    this.el = this.modal.contentEl();

    this.player.addChild(this.modal);
  }

  open() {
    this._createModal();
    this.modal.open();
  }
}

export default ShareOverlay;
