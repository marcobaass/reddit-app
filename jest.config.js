const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules"],
};

export default config;
