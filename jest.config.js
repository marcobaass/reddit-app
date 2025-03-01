import { createRequire } from "module";
const require = createRequire(import.meta.url);

const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.css$": require.resolve("jest-transform-css"),
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "swiper/css": "swiper/swiper.min.css"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(swiper|swiper/react)/)",
  ],
};

export default config;
