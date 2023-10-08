const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
    images: {
      domains: [
        "assets.website-files.com", 
        "cdn.sanity.io",
        "source.unsplash.com",
        "i.ibb.co",
        "svgrepo.com",
      ],
   
    },
  };
  
  module.exports = nextConfig;
  