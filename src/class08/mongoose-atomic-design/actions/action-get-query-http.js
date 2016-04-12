module.exports = (_url) => {
  // via get/querystring
  const url_parts = url.parse(_url);
  return querystring.parse(url_parts.query);
}
