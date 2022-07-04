const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
module.exports = function(eleventyConfig) {

  // https://www.11ty.dev/docs/plugins/syntaxhighlight/
  eleventyConfig.addPlugin(syntaxHighlight);

  // Simply copy css file to public
  eleventyConfig.addPassthroughCopy("./source/styles.css");
  // Return your Object options:
  return {
    dir: {
      input: "source",
      output: "public"
    }
  }
};
