const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const markdownIt = require("markdown-it");
const htmlmin = require('html-minifier');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(PostCSSPlugin);

  /* Option MD */
  // @TODO : Voir ça pour des tag customs
  // https://www.11ty.dev/docs/languages/markdown/#why-cant-i-return-markdown-from-paired-shortcodes-to-use-in-a-markdown-file
  // Ou ça : https://github.com/markdown-it/markdown-it-container
  // Ou encore ça : https://www.npmjs.com/package/markdown-it-attrs
  
  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'],
  };
  
  eleventyConfig.setLibrary("md", markdownIt(mdOptions));
  

  // Simply copy assets to public
  eleventyConfig.addPassthroughCopy("source/styles.css");
  eleventyConfig.addPassthroughCopy("img");
  
  eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    if (outputPath.endsWith('.html')) {
      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        html5: true,
        removeEmptyElements: true,
      });
      return minified;
    }

    return content;
  });

  // Return your Object options:
  return {
    dir: {
      input: "source",
      output: "public"
    },
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };

};
