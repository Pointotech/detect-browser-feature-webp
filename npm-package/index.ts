type WebpFeatureName = "lossy" | "lossless" | "alpha" | "animation"

const testImages = {
  lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
  lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
  alpha:
    "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
  animation:
    "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
}

/**
 * Detects whether the browser supports a WebP feature.
 *
 * WebP was invented by Google. This implementation is based on Google's
 * official recommendations for WebP browser support detection:
 * https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp
 */
const _detectBrowserFeatureWebp = async (featureName: WebpFeatureName) => {
  return new Promise<boolean>((resolve, _) => {
    const image = new Image()
    image.onload = () => {
      const result = image.width > 0 && image.height > 0
      resolve(result)
    }
    image.onerror = () => {
      resolve(false)
    }
    image.src = "data:image/webp;base64," + testImages[featureName]
  })
}

const featuresDetected: { [key in WebpFeatureName]: boolean | null } = {
  lossy: null,
  lossless: null,
  alpha: null,
  animation: null,
}

export const detectBrowserFeatureWebp = async (
  featureName: WebpFeatureName = "lossy"
) => {
  let isFeatureDetected: boolean | null = featuresDetected[featureName]

  if (isFeatureDetected === null) {
    isFeatureDetected = await _detectBrowserFeatureWebp(featureName)
    featuresDetected[featureName] = isFeatureDetected
  }

  return isFeatureDetected
}
