module.exports = function(eleventyConfig) {
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
