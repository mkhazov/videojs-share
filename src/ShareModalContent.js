import Clipboard from 'clipboard';
import * as sharing from 'vanilla-sharing';

import { isTouchDevice, filterSocials } from './utils';

import fbFeed from './icons/fbFeed.svg';
import tw from './icons/tw.svg';
import reddit from './icons/reddit.svg';
import gp from './icons/gp.svg';
import messenger from './icons/messenger.svg';
import linkedin from './icons/linkedin.svg';
import vk from './icons/vk.svg';
import ok from './icons/ok.svg';
import mail from './icons/mail.svg';
import telegram from './icons/telegram.svg';
import whatsapp from './icons/whatsapp.svg';
import viber from './icons/viber.svg';

const icons = {
  fbFeed,
  tw,
  reddit,
  gp,
  messenger,
  linkedin,
  vk,
  ok,
  mail,
  telegram,
  whatsapp,
  viber
};

export default class ShareModalContent {
  constructor(player, options) {
    this.player = player;

    this.options = options;
    this.socials = filterSocials(options.socials);

    this.copyBtnTextClass = 'vjs-share__btn-text';
    this.socialBtnClass = 'vjs-share__social';

    this._createContent();
    this._initToggle();
    this._initClipboard();
    this._initSharing();
  }

  getContent() {
    return this.content;
  }

  get socialOptions() {
    const {
      url,
      title,
      description,
      image,
      fbAppId,
      isVkParse,
      redirectUri
    } = this.options;

    return {
      url,
      title,
      description,
      image,
      fbAppId,
      isVkParse,
      redirectUri
    };
  }

  _createContent() {
    const copyBtn = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20">
        <path fill="#FFF" fill-rule="evenodd" d="M10.07 20H1.318A1.325 1.325 0 0 1 0 18.67V6.025c0-.712.542-1.21 1.318-1.21h7.294l2.776 2.656v11.2c0 .734-.59 1.33-1.318 1.33zm6.46-15.926v9.63h-3.673v1.48h3.825c.727 0 1.318-.595 1.318-1.328v-11.2L15.225 0H7.93c-.776 0-1.318.497-1.318 1.21v2.123h1.47V1.48h5.877v2.594h2.57zm-.73-1.48l-.37-.357v.356h.37zM9.918 8.888v9.63H1.47V6.295h5.878V8.89h2.57zm-.73-1.483l-.372-.355v.355h.37z"></path>
      </svg>
      <span class="${this.copyBtnTextClass}">${this.player.localize('Copy')}</span>
    `;
    const wrapper = document.createElement('div');

    wrapper.innerHTML = `<div class="vjs-share">
      <div class="vjs-share__top hidden-sm">
        <div class="vjs-share__title">${this.player.localize('Share')}</div>
      </div>

      <div class="vjs-share__middle">
        <div class="vjs-share__subtitle hidden-xs">${this.player.localize('Direct Link')}:</div>
        <div class="vjs-share__short-link-wrapper">
          <input class="vjs-share__short-link" type="text" readonly="true" value="${this.options.url}">
          <div class="vjs-share__btn">
            ${copyBtn}
          </div>
        </div>

        <div class="vjs-share__subtitle hidden-xs">${this.player.localize('Embed Code')}:</div>
        <div class="vjs-share__short-link-wrapper hidden-xs">
          <input class="vjs-share__short-link" type="text" readonly="true" value="${this.options.embedCode}">
          <div class="vjs-share__btn">
            ${copyBtn}
          </div>
        </div>
      </div>

      <div class="vjs-share__bottom">
        <div class="vjs-share__socials">
          ${this._getSocialItems().join('')}
        </div>
      </div>
    </div>`;

    this.content = wrapper.firstChild;
  }

  _initClipboard() {
    const clipboard = new Clipboard('.vjs-share__btn', {
      target: (trigger) => trigger.previousElementSibling
    });

    clipboard.on('success', (e) => {
      const textContainer = e.trigger.querySelector(`.${this.copyBtnTextClass}`);
      const restore = () => {
        textContainer.innerText = this.player.localize('Copy');
        e.clearSelection();
      };

      textContainer.innerText = this.player.localize('Copied');

      if (isTouchDevice()) {
        setTimeout(restore, 1000);
      } else {
        textContainer.parentElement.addEventListener('mouseleave', () => {
          setTimeout(restore, 300);
        });
      }
    });
  }

  _initSharing() {
    const btns = this.content.querySelectorAll(`.${this.socialBtnClass}`);

    Array.from(btns).forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const social = e.currentTarget.getAttribute('data-social');

        if (typeof sharing[social] === 'function') {
          sharing[social](this.socialOptions);
        }
      });
    });
  }

  _initToggle() {
    const iconsList = this.content.querySelector('.vjs-share__socials');

    if (this.socials.length > 10 || (window.innerWidth <= 180 && this.socials.length > 6)) {
      iconsList.style.height = 'calc((2em + 5px) * 2)';
    } else {
      iconsList.classList.add('horizontal');
    }
  }

  _getSocialItems() {
    const socialItems = [];

    this.socials.forEach((social) => {
      if (icons[social]) {
        socialItems.push(`
          <button class="vjs-share__social vjs-share__social_${social}" data-social="${social}">
            ${icons[social]}
          </button>
        `);
      }
    });

    return socialItems;
  }
}
