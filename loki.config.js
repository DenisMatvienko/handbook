/**
 *    Loki config
 *
 *    @param target
 *    - Always change 'chrome.app' on 'docker', when push code on GitHub
 *      Reason in GitHub actions most likely their version of Loki does not support 'chrome.app'
 *      and test always fall with error.
 *    - When using local repo and use Loki change on 'chrome.app', cause docker on Windows
 *      with WSL2 overload system and memory. Loki were upgrade 'chrome.app' run successfully
 */

module.exports = {
  chromeSelector: '.wrapper > *, #root > *, .story-decorator > *',
  diffingEngine: 'pixelmatch',
  configurations: {
    'chrome.laptop': {
      target: 'docker', // When pushing change on 'chrome.app' on 'docker'
      width: 1366,
      height: 768,
    },
    'chrome.iphone7': {
      target: 'docker',
      preset: 'iPhone 7',
    },
  },
  fetchFailIgnore: 'localhost:1234/get',
};
