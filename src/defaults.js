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

export default {
  title: 'Video',
  url,
  embedCode: getEmbedCode(),
  redirectUri: getRedirectUri()
};
