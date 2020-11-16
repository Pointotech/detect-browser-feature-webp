import { detectBrowserFeatureWebp } from "@pointotech/detect-browser-feature-webp"
import Head from "next/head"
import { useEffect, useState } from "react"

import styles from "../styles/Home.module.css"

export default function Home() {
  const [isWebpSupported, setIsWebpSupported] = useState<boolean | null>(null)

  useEffect(() => {
    ;(async () => {
      setIsWebpSupported(await detectBrowserFeatureWebp())
    })()
  })

  return (
    <div className="container">
      <Head>
        <title>@pointotech/detect-browser-feature-webp Usage Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>@pointotech</h2>
        <h1 className={styles.title}>detect-browser-feature-webp</h1>
        <h2>Usage Example</h2>

        {isWebpSupported === true ? (
          <p className={styles["alert-success"]}>
            This browser supports WebP images.
          </p>
        ) : isWebpSupported === false ? (
          <p className={styles["alert-warning"]}>
            This browser does NOT support WebP images.
          </p>
        ) : (
          <p className={styles["alert-warning"]}>
            Checking if this browser supports WebP images...
          </p>
        )}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
