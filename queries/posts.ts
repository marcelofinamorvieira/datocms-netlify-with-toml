export const postsQuery = `query MyQuery($locale: SiteLocale, $fallbackLocale: [SiteLocale!], $skip: IntType = "0")  {
  allPosts(filter: {title: {isBlank: "false"}}, orderBy: _createdAt_DESC, first: "9", locale: $locale, fallbackLocales: $fallbackLocale, skip: $skip) {
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
  _allPostsMeta(locale: $locale, filter: {title: {isBlank: "false"}}) {
    count
  }
}`;
