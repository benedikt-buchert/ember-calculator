// config/head-content.js
module.exports = function(env, config) {
  var headContent = [
    '<meta name="viewport" content="width=device-width, user-scalable=no" />'
  ];

  if (env === 'production') {
    headContent.push();
  }

  return headContent;
};