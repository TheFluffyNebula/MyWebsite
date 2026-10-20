// Directory data for project pages: give each one its own social preview
// image (its card thumbnail) so a shared link shows the project, not the
// generic site image. Falls back to the site default when a project has no
// thumbnail yet.
module.exports = {
  eleventyComputed: {
    ogImage: (data) => {
      const project = (data.projects || []).find((p) => p.slug === data.slug);
      return (project && project.thumb) || data.site.ogImage;
    },
    ogImageAlt: (data) => {
      const project = (data.projects || []).find((p) => p.slug === data.slug);
      return (project && project.thumb_alt) || `${data.site.name} — portfolio`;
    },
  },
};
