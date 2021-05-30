# @pointotech/detect-browser-feature-webp

Detects browser support for WebP images.

WebP was invented by Google. This implementation is based on Google's official recommendations for WebP browser support detection.

## Installation

### Yarn installation

```bash
yarn add @pointotech/detect-browser-feature-webp
```

### NPM installation

```bash
npm install @pointotech/detect-browser-feature-webp
```

## Usage

```typescript
import { detectBrowserFeatureWebp } from "@pointotech/detect-browser-feature-webp"

const isWebpSupported = await detectBrowserFeatureWebp()

if (isWebpSupported) {
  console.log("This browser supports WebP images.")
} else {
  console.log("This browser does NOT support WebP images.")
}
```

## Webpack configuration

This library ships as plain TypeScript code. Apps that compile their code into JavaScript for the browser will need to include this library's code in the compilation process. Because most libraries ship as precompiled JavaScript code, the `node_modules` directory (and therefore this library) is excluded from the compilation process in a typical Webpack configuration.

Here's an example of how to include this library's code in the compilation process, while continuing to exclude other (presumably precompiled) libraries:

```typescript
// webpack.config.js

module.exports = {
  //...

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              allowTsInNodeModules: true,
              configFile: "tsconfig.webpack.json",
            },
          },
        ],
        exclude:
          /node_modules\/(?![@pointotech\/detect\-browser\-feature\-webp])/,
      },
    ],
  },

  //...
}
```

This example only applies to Webpack, and is only meant to show how to include a subset of `node_modules` in the compilation process when it would otherwise be ignored by the compiler. This is not a full example of a Webpack configuration file, and setting up Webpack is beyond the scope of this document.
