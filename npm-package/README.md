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
