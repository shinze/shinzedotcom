// https://www.aleksandrhovhannisyan.com/blog/useful-11ty-filters/#custom-filters-for-any-11ty-project
// https://www.aleksandrhovhannisyan.com/tags/11ty/

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const PostCSSPlugin = require("eleventy-plugin-postcss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require('markdown-it-anchor');
const markdownItContainer = require('markdown-it-container');
const markdownItAttrs = require('markdown-it-attrs');
const htmlmin = require('html-minifier');
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const { DateTime } = require("luxon");
const pluginTOC = require('eleventy-plugin-toc');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(PostCSSPlugin);
  eleventyConfig.addPlugin(pluginTOC);

  eleventyConfig.addPlugin(syntaxHighlight, {
    // alwaysWrapLineHighlights: true,
  });
  

  /* Option MD */
  // @TODO : Voir ça pour des tag customs
  // https://www.11ty.dev/docs/languages/markdown/#why-cant-i-return-markdown-from-paired-shortcodes-to-use-in-a-markdown-file
  // Ou ça : https://github.com/markdown-it/markdown-it-container
  // Ou encore ça : https://www.npmjs.com/package/markdown-it-attrs

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_FULL);
  });

  // Codepen embeds
  // Multiline Content with Parameter
  eleventyConfig.addShortcode("livecode", function(href, defaultTab) {
    const cpUrl = `https://codepen.io/shinze/embed/preview/${href}?default-tab=${defaultTab}%2Cresult&editable=true`;
    const alternative = `
    <a href="https://codepen.io/shinze/pen/${href}">Accéder au document sur codepen</a>
    `
    return `
    <div className="livecode">
      <iframe src="${cpUrl}" frameborder="no" loading="lazy" allowtransparency="true"
          allowfullscreen="true"
          height="500"
          class="livecode-iframe"
          scrolling="no">
        ${alternative}
      </iframe>
    </div>
    `;
  });

  /**
   * Flatten a navigation object into an array, and add "next" and "prev"
   * properties.
   * More : https://github.com/11ty/eleventy-navigation/issues/22
   */
  eleventyConfig.addFilter('flattenNavigationAndAddNextPrev', (nav) => {
    const flat = [];
    const visit = (items) => {
      for (const item of items) {
        flat.push(item);
        visit(item.children);
      }
    };
    visit(nav);
    for (let i = 0; i < flat.length; i++) {
      const item = flat[i];
      item.prev = flat[i - 1];
      item.next = flat[i + 1];
    }
    return flat;
  });

  

  let mdOptions = {
    html: true,
    breaks: true,
    linkify: true,
    quotes: ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'],
  };

  eleventyConfig.setLibrary("md", markdownIt(mdOptions)
    .use(markdownItAttrs)
    .use(markdownItAnchor)
    // https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/
    // Callout
    .use(markdownItContainer, 'dynamic', {
      validate: function () { return true; },
      render: function (tokens, idx) {
        const token = tokens[idx];
        if (token.nesting === 1) {
          return '<div class="' + token.info.trim() + '">';
        } else {
          return '</div>';
        }
      }
    })
  );


  // Simply copy assets to public
  eleventyConfig.addPassthroughCopy("source/styles.css");
  eleventyConfig.addPassthroughCopy("source/img");
  eleventyConfig.addPassthroughCopy("source/js");
  
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
