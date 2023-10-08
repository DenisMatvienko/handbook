/**
 *    Loki config
 *
 *    @param target
 *    - Always change 'chrome.app' on 'chrome.docker', when push code on GitHub
 *      Reason in GitHub actions most likely their version of Loki does not support 'chrome.app'
 *      and test always fall with error.
 *    - When using local repo and use Loki change on 'chrome.app', cause docker on Windows
 *      with WSL2 overload system and memory. Loki were upgrade 'chrome.app' run successfully
 *
 *    @note approve
 *    - If you approve tests passed on chrome.docker in the reference and vice versa, then in the
 *      future the reference image of a specific component made on the basis of chrome.docker can be
 *      saved in the reference. And when you pass the tests and approve it to chrome.app, and if
 *      no changes are made to this reference image, then there will be an error in the "actions",
 *      because it is still considered approved to chrome.docker.
 *      see more: https://github.com/oblador/loki/issues/318
 */

module.exports = {
  chromeSelector: '.wrapper > *, #root > *, .story-decorator > *',
  diffingEngine: 'pixelmatch',
  configurations: {
    'chrome.laptop': {
      target: 'chrome.docker', // When pushing on gh with actions change 'chrome.app' on 'chrome.docker'
      width: 1366,
      height: 768,
    },
    'chrome.iphone7': {
      target: 'chrome.docker',
      preset: 'iPhone 7',
    },
  },
  fetchFailIgnore: 'localhost:1234/get',
};
