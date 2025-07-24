"use client"

import { useEffect, useState } from "react"

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isText, setIsText] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show cursor after component mounts
    setIsVisible(true)

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updateCursorType = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for text input elements
      const isTextInput =
        target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.contentEditable === "true"

      setIsText(isTextInput)

      // Check for clickable elements
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick !== null ||
        target.style.cursor === "pointer" ||
        target.closest("button") !== null ||
        target.closest("a") !== null ||
        target.hasAttribute("data-cursor-hover") ||
        target.classList.contains("cursor-pointer") ||
        // Check for any element with click handlers
        target.getAttribute("role") === "button"

      setIsPointer(isClickable && !isTextInput)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mouseover", updateCursorType)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mouseover", updateCursorType)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <>
      {/* Main cursor dot - significantly increased size */}
      <div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 bg-purple-500 rounded-full pointer-events-none transition-all duration-150 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isPointer ? 1.5 : isText ? 0.6 : 1})`,
          zIndex: 9999,
          opacity: isVisible ? 0.9 : 0,
        }}
      />

      {/* Trailing cursor ring - significantly increased size */}
      <div
        className="custom-cursor-ring fixed top-0 left-0 w-16 h-16 border-3 border-purple-400 rounded-full pointer-events-none transition-all duration-200 ease-out"
        style={{
          transform: `translate(${position.x - 32}px, ${position.y - 32}px) scale(${isPointer ? 1.3 : isText ? 1.2 : 1})`,
          zIndex: 9998,
          opacity: isVisible ? 0.4 : 0,
          borderWidth: "3px",
        }}
      />

      {/* Text cursor indicator - increased size */}
      {isText && (
        <div
          className="fixed top-0 left-0 w-1 h-8 bg-cyan-400 pointer-events-none transition-all duration-150 ease-out"
          style={{
            transform: `translate(${position.x - 2}px, ${position.y - 16}px)`,
            zIndex: 9999,
            opacity: isVisible ? 0.8 : 0,
          }}
        />
      )}

      {/* Pointer indicator for better visibility on clickable elements - increased size */}
      {isPointer && (
        <div
          className="fixed top-0 left-0 w-12 h-12 border-3 border-cyan-400 rounded-full pointer-events-none transition-all duration-150 ease-out"
          style={{
            transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
            zIndex: 9997,
            opacity: isVisible ? 0.3 : 0,
            borderWidth: "3px",
          }}
        />
      )}
    </>
  )
}
