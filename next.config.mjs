import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "d3jqtupnzefbtn.cloudfront.net",
          "content.andersenlab.com",
          "static.andersenlab.com",
          "cdn-gnpmp.nitrocdn.com",
          "prestashop.com",
          "andersenlab.com"
        ],
      },
};

export default withNextIntl(nextConfig);
