/* 
  TinyURL是一种URL简化服务， 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，它将返回一个简化的URL http://tinyurl.com/4e9iAk.

  要求：设计一个 TinyURL 的加密 encode 和解密 decode 的方法。你的加密和解密算法如何设计和运作是没有限制的，你只需要保证一个URL可以被加密成一个TinyURL，并且这个TinyURL可以用解密方法恢复成原本的URL。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/encode-and-decode-tinyurl
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 定义
 * 0 - 25 对应 a - z
 * 26 - 51 对应 A - Z
 * 52 - 61 对应 0 - 9
 */
function transform(num) {
  const n = num % 62;
  if (n < 26) return n + 'a';
  if (n < 52) return n - 26 + 'A';
  return n - 52+ '0';
}

const map = new Map();

/**
 * 生成随机字符串 
 */
function randomString(n) {
  let str = '';
  for (let i = 0; i < n; i += 1) {
    str += transform(~~(Math.random() * 100))
  }
  return str;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  let str;
  do {
    str = randomString(5);
  } while (!map.has(str));
  map.set(str, longUrl)
  return str;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return map.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */