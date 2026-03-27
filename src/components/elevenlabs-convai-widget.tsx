import { createElement, useEffect, useState, type CSSProperties } from "react"

const SCRIPT_ID = "elevenlabs-convai-widget-script"
const SCRIPT_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const MOBILE_MAX_WIDTH = 640
const MOBILE_MAX_HEIGHT = 480
const SHORT_MOBILE_MAX_HEIGHT = 700
type WidgetStyle = CSSProperties & Record<`--${string}`, string>

const desktopWidgetStyle = {
  "--el-base": "#ffffff",
  "--el-base-hover": "#f5f3ef",
  "--el-base-active": "#efebe5",
  "--el-base-border": "#d7d1c8",
  "--el-base-subtle": "#6b675f",
  "--el-base-primary": "#20262b",
  "--el-base-error": "#d1495b",
  "--el-accent": "#20262b",
  "--el-accent-hover": "#161c20",
  "--el-accent-active": "#2a3339",
  "--el-accent-primary": "#ffffff",
  "--el-overlay-padding": "24px",
  "--el-button-radius": "999px",
  "--el-input-radius": "16px",
  "--el-bubble-radius": "16px",
  "--el-sheet-radius": "24px",
  "--el-compact-sheet-radius": "24px",
  "--el-dropdown-sheet-radius": "20px",
} as WidgetStyle

const mobileWidgetStyle = {
  ...desktopWidgetStyle,
  "--el-overlay-padding": "max(12px, calc(env(safe-area-inset-bottom) + 6px))",
  "--el-button-radius": "999px",
  "--el-sheet-radius": "22px",
  "--el-compact-sheet-radius": "22px",
} as WidgetStyle

export function ElevenLabsConvaiWidget() {
  const [isMobile, setIsMobile] = useState(false)
  const [isShortMobile, setIsShortMobile] = useState(false)

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

    const updateVariant = () => {
      const mobile = window.innerWidth <= MOBILE_MAX_WIDTH || window.innerHeight <= MOBILE_MAX_HEIGHT
      setIsMobile(mobile)
      setIsShortMobile(mobile && window.innerHeight <= SHORT_MOBILE_MAX_HEIGHT)
    }

    updateVariant()
    window.addEventListener("resize", updateVariant)

    return () => {
      window.removeEventListener("resize", updateVariant)
    }
  }, [])

  const widgetStyle = isMobile
    ? {
        ...mobileWidgetStyle,
        "--el-overlay-padding": isShortMobile
          ? "max(12px, calc(env(safe-area-inset-top) + 6px))"
          : mobileWidgetStyle["--el-overlay-padding"],
      }
    : desktopWidgetStyle

  return createElement("elevenlabs-convai", {
    "agent-id": "agent_6401kmp8pjw0fc48j493nzkybmr0",
    variant: isMobile ? "tiny" : "compact",
    placement: isShortMobile ? "top-left" : "bottom-right",
    "avatar-orb-color-1": "#20262b",
    "avatar-orb-color-2": "#d9dfda",
    "show-avatar-when-collapsed": "true",
    "show-agent-status": "true",
    "collect-feedback": "true",
    dismissible: isMobile ? "false" : "true",
    style: widgetStyle,
    "aria-label": "Open Dr. Wong's AI concierge",
  })
}
