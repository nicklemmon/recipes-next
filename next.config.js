module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    // See: https://github.com/vercel/next.js/issues/7755
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
}
