const url = getUrl();

function getUrl() {
  if (typeof window === 'undefined') {
    return '';
  }
  return window.location.href;
}

function getRedirectUri() {
  return `${url}#close_window`;
}

function getEmbedCode() {
  return '<iframe src=\'' + url + '\' width=\'560\' height=\'315\' frameborder=\'0\' allowfullscreen></iframe>';
}

function getSocials() {
  return ['fbFeed', 'tw', 'reddit', 'gp', 'messenger', 'linkedin', 'vk', 'ok', 'mail', 'email', 'telegram', 'whatsapp', 'viber'];
}

export default {
  mobileVerification: true,
  title: 'Video',
  url,
  socials: getSocials(),
  embedCode: getEmbedCode(),
  redirectUri: getRedirectUri()
};
