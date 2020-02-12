const { DateTime } = require('luxon');

module.exports = function(eleventyConfig) {
  // Layout aliases
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');

  // Combine and minify JS files
  eleventyConfig.addFilter('jsmin', require('./src/utils/minify-js.js'));

  // Minify the HTML in prod
  if (process.env.NODE_ENV == 'production') {
    eleventyConfig.addTransform(
      'htmlmin',
      require('./src/utils/minify-html.js')
    );
  }

  // Filters
  eleventyConfig.addFilter('dateformat', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'America/New_York',
    }).toFormat('LLLL d, y');
  });

  // Pass thru static files
  eleventyConfig.addPassthroughCopy('./src/site/fonts');
  eleventyConfig.addPassthroughCopy('./src/site/images');
  eleventyConfig.addPassthroughCopy('./src/site/css');

  return {
    dir: {
      input: 'src/site',
      output: 'dist',
    },
    templateFormats: ['njk', 'md'],
  };
};
