module.exports = function(eleventyConfig) {
  eleventyConfig.setNunjucksEnvironmentOptions({
    trimBlocks: true,
    lstripBlocks: true
  });

  eleventyConfig.addPassthroughCopy('project_images');
  eleventyConfig.addPassthroughCopy('icons');
  eleventyConfig.addPassthroughCopy('src/main.*')
  eleventyConfig.addPassthroughCopy({'dialog-polyfill/dist': 'dialog-polyfill'})
  eleventyConfig.addPassthroughCopy('tena_juhmer_resume.pdf');

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes',
      layouts: '_includes/_layouts'
    },
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    pathPrefix: 'AxiosDeminence.github.io'
  }
}