export const tagQuery = `query MyQuery($slug: String, $locale: SiteLocale, $fallbackLocale: [SiteLocale!], $skip: IntType = "0") {
  tag(filter: {slug: {eq: $slug}}, locale: $locale) {
    tag
    _allReferencingPosts(
      filter: {title: {isBlank: "false"}}
      orderBy: _createdAt_DESC
      first: "100"
      locale: $locale
      fallbackLocales: $fallbackLocale
      skip: $skip
    ) {
      _publishedAt
      slug
      id
      title
      tags {
        tag
      }
      seoTags {
        description
        image {
          responsiveImage {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
          }
        }
      }
      author {
        name
        bio
        picture {
          responsiveImage(imgixParams: {w: "64", h: "64", fit: crop}) {
            srcSet
            webpSrcSet
            sizes
            src
            width
            height
            aspectRatio
            alt
            title
            bgColor
            base64
          }
        }
      }
    }
    _allReferencingPostsMeta(locale: $locale, filter: {title: {isBlank: "false"}}) {
      count
    }
  }
}`;
