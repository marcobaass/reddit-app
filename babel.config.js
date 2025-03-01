const config = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

module.exports = {
  presets: ['@babel/preset-env'],
};

export default config;
