/**
 * 公共工具函数
 * common.js
 */

/**
 * 生成固定位数的随机字符串
 * 不包括字符
 * 0-9,a-z,A-Z
 */
function getRandomStr(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
/**
 * 生成固定长度随机字符串
 * 包括字符
 * 0-9,a-z,A-Z,以及字符
 */
function getRandomStrWithSymbol(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&,()*+-./:;	<=>?@[]^_{|}";
  for (var i = 0; i < len; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}
 
module.exports = {
  getRandomStr: getRandomStr,
  getRandomStrWithSymbol: getRandomStrWithSymbol
 }