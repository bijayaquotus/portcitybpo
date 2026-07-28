import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
//   keywords = "",
  image = "https://portcitybpo.lk/og-image.webp",
  url
}) => {
  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />
      {/* <meta name="keywords" content={keywords} /> */}
      <meta name="robots" content="index,follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;