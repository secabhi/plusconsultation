function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(require.context("./libs/", true, /\.js$/));

function openUrl(url) {
  window.open(url, "_blank");
}
