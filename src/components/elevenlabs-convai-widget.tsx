import { createElement, useEffect, useState } from "react"

const SCRIPT_ID = "elevenlabs-convai-widget-script"
const SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const MOBILE_QUERY = "(max-width: 640px)"

const desktopWidgetStyle = {
  "--el-base": "#ffffff",
  "--el-base-hover": "#f7f3ee",
  "--el-base-active": "#f2eae0",
  "--el-base-border": "#ddd1c1",
  "--el-base-subtle": "#6e6358",
  "--el-base-primary": "#22313a",
  "--el-base-error": "#d1495b",
  "--el-accent": "#4f8f88",
  "--el-accent-hover": "#447d77",
  "--el-accent-active": "#396b66",
  "--el-accent-primary": "#ffffff",
  "--el-overlay-padding": "24px",
  "--el-button-radius": "18px",
  "--el-input-radius": "18px",
  "--el-bubble-radius": "18px",
  "--el-sheet-radius": "26px",
  "--el-compact-sheet-radius": "28px",
  "--el-dropdown-sheet-radius": "22px",
} as React.CSSProperties

const mobileWidgetStyle = {
  ...desktopWidgetStyle,
  "--el-overlay-padding": "max(14px, calc(env(safe-area-inset-bottom) + 8px))",
  "--el-button-radius": "999px",
  "--el-sheet-radius": "24px",
  "--el-compact-sheet-radius": "24px",
} as React.CSSProperties

export function ElevenLabsConvaiWidget() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const loadScript = () => {
      if (document.getElementById(SCRIPT_ID)) {
        return
      }

      const script = document.createElement("script")
      script.id = SCRIPT_ID
      script.src = SCRIPT_SRC
      script.async = true
      script.type = "text/javascript"
      document.body.appendChild(script)
    }

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(loadScript)
      return () => window.cancelIdleCallback(idleId)
    }

    const timeoutId = globalThis.setTimeout(loadScript, 0)
    return () => globalThis.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const updateVariant = () => setIsMobile(mediaQuery.matches)

    updateVariant()
    mediaQuery.addEventListener("change", updateVariant)

    return () => mediaQuery.removeEventListener("change", updateVariant)
  }, [])

  return createElement("elevenlabs-convai", {
    "agent-id": "agent_6401kmp8pjw0fc48j493nzkybmr0",
    variant: isMobile ? "tiny" : "compact",
    placement: "bottom-right",
    "avatar-orb-color-1": "#4f8f88",
    "avatar-orb-color-2": "#d8efe9",
    "show-avatar-when-collapsed": "true",
    "show-agent-status": "true",
    "collect-feedback": "true",
    dismissible: "true",
    style: isMobile ? mobileWidgetStyle : desktopWidgetStyle,
    "aria-label": "Open Dr. Wong's AI concierge",
  })
}
