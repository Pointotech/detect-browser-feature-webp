var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const testImages = {
    lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
    lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
    alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
    animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
};
/**
 * Detects whether the browser supports a WebP feature.
 *
 * WebP was invented by Google. This implementation is based on Google's
 * official recommendations for WebP browser support detection:
 * https://developers.google.com/speed/webp/faq#how_can_i_detect_browser_support_for_webp
 */
const _detectBrowserFeatureWebp = (featureName) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, _) => {
        const image = new Image();
        image.onload = () => {
            const result = image.width > 0 && image.height > 0;
            resolve(result);
        };
        image.onerror = () => {
            resolve(false);
        };
        image.src = "data:image/webp;base64," + testImages[featureName];
    });
});
const featuresDetected = {
    lossy: null,
    lossless: null,
    alpha: null,
    animation: null,
};
export const detectBrowserFeatureWebp = (featureName = "lossy") => __awaiter(void 0, void 0, void 0, function* () {
    let isFeatureDetected = featuresDetected[featureName];
    if (isFeatureDetected === null) {
        isFeatureDetected = yield _detectBrowserFeatureWebp(featureName);
        featuresDetected[featureName] = isFeatureDetected;
    }
    return isFeatureDetected;
});
