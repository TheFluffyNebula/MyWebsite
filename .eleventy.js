module.exports = function (eleventyConfig) {
  // Images/ is copied verbatim so every existing image URL keeps working.
  eleventyConfig.addPassthroughCopy("Images");
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // public/ holds files cleared for publishing (the resume), mirroring
  // private/ which is gitignored. Deliberately PDF-only rather than copying
  // the whole folder: editable sources like base.docx live there too and must
  // never reach the site. Drop a new file type in and it will NOT publish
  // until you add it here on purpose.
  eleventyConfig.addPassthroughCopy({ "public/*.pdf": "/" });

  // Projects look up their own metadata in projects.json by slug.
  eleventyConfig.addFilter("bySlug", (projects, slug) =>
    (projects || []).find((p) => p.slug === slug)
  );

  eleventyConfig.addFilter("byGroup", (projects, group) =>
    (projects || []).filter((p) => p.group === group)
  );

  // Newest first. Entries without `sort` fall to the end.
  eleventyConfig.addFilter("newestFirst", (projects) =>
    [...(projects || [])].sort((a, b) => (b.sort || "").localeCompare(a.sort || ""))
  );

  // Absolute URL for Open Graph tags, which cannot use relative paths.
  eleventyConfig.addFilter("absoluteUrl", (path, base) => {
    try {
      return new URL(path, base).href;
    } catch {
      return path;
    }
  });

  // YYYY-MM-DD for the <time datetime> attribute. YAML parses an unquoted
  // 2026-10-20 into a Date, whose toString() is not a valid datetime value.
  eleventyConfig.addFilter("isoDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("readableDate", (value) => {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) return value;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
  });

  return {
    // The repo publishes as a GitHub Pages *project* site at /MyWebsite/,
    // so every internal link must go through the `url` filter.
    pathPrefix: "/MyWebsite/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
