import { createRequire } from "module";
const require = createRequire(import.meta.url);

const config = {
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mjs$': 'babel-jest',
    "^.+\\.css$": require.resolve("jest-transform-css"),
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/"],
  moduleFileExtensions: ["js", "jsx", "json", "node", "mjs"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
    "swiper/css": "identity-obj-proxy",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
  extensionsToTreatAsEsm: [".jsx"],
};

export default config;
