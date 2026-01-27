import { useState, useEffect } from "react"

function ExcuseRotator() {
  const excuses = [
    "We can't afford it.",
    "It's not in this year's budget.",
    "We don't have anyone who knows how.",
    "Our security team is stretched thin.",
    "We'll get to it next quarter.",
    "We have too many vendors to even start."
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === excuses.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="excuse-container">
      <div className="excuse-label">
        LARRY SAYS:
      </div>

      <div key={currentIndex} className="excuse-text animate-excuse">
        "{excuses[currentIndex]}"
      </div>

    </div>
  )
}

export default ExcuseRotator
