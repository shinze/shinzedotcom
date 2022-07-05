const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPlugin(syntaxHighlight);

  // @TODO : Faire fonctionner ça
  eleventyConfig.addPlugin(PostCSSPlugin);

  /* Option MD */
  // @TODO : Voir ça pour des tag customs
  // https://www.11ty.dev/docs/languages/markdown/#why-cant-i-return-markdown-from-paired-shortcodes-to-use-in-a-markdown-file
  let mdoptions = {
    html: true,
    breaks: true,
    linkify: true,
    quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'],
  };
  eleventyConfig.setLibrary("md", markdownIt(mdoptions));


  // Simply copy css file to public
  eleventyConfig.addPassthroughCopy("./source/styles.css");
  

  // Return your Object options:
  return {
    dir: {
      input: "source",
      output: "public"
    }
  };

};
