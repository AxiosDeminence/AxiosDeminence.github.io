const dialogPolyfillCss = require.resolve('dialog-polyfill/dist/dialog-polyfill.css');
const dialogPolyfillJs = require.resolve('dialog-polyfill/dist/dialog-polyfill.js');

module.exports = function(eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true
  });

  eleventyConfig.addPassthroughCopy('public');
  eleventyConfig.addPassthroughCopy('src/main.*')
  eleventyConfig.addPassthroughCopy({
    [dialogPolyfillCss]: 'dialog-polyfill/dialog-polyfill.css',
    [dialogPolyfillJs]: 'dialog-polyfill/dialog-polyfill.js',
  });
  eleventyConfig.addPassthroughCopy('src/polyfiller.js');
  eleventyConfig.addPassthroughCopy('src/vite.config.js');

  eleventyConfig.addCollection('sortedProjects', function(collectionApi) {
    return collectionApi.getFilteredByTag('project').sort(function (a, b) {
      return a.data.rank - b.data.rank;
    });
  });

  return {
    dir: {
      input: 'src',
      output: 'eleventy-output',
      includes: '_includes',
      layouts: '_includes/_layouts'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  }
}