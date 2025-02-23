import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "node:util";

if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
  // console.log("TextEncoder polyfilled!");
}
