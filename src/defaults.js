const url = getUrl();

function getUrl() {
  return window.location.href;
}

function getRedirectUri() {
  return `${url}#close_window`;
}

function getEmbedCode() {
  return '<iframe src=\'' + url + '\' width=\'560\' height=\'315\' frameborder=\'0\' allowfullscreen></iframe>';
}

function getSocials() {
  return ['fbFeed', 'tw', 'reddit', 'gp', 'messenger', 'linkedin', 'vk', 'ok', 'mail', 'telegram', 'whatsapp', 'viber'];
}

export default {
  title: 'Video',
  url,
  socials: getSocials(),
  embedCode: getEmbedCode(),
  redirectUri: getRedirectUri()
};
