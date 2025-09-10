"use client"

import { useEffect, useState } from "react"

export function StatsSection() {
  const [counts, setCounts] = useState({ images: 0, users: 0, accuracy: 0 })

  useEffect(() => {
    const targets = { images: 12500, users: 4500, accuracy: 99 }
    const duration = 2000
    const steps = 60

    const increment = {
      images: targets.images / steps,
      users: targets.users / steps,
      accuracy: targets.accuracy / steps,
    }

    let step = 0
    const timer = setInterval(() => {
      step++
      setCounts({
        images: Math.min(Math.floor(increment.images * step), targets.images),
        users: Math.min(Math.floor(increment.users * step), targets.users),
        accuracy: Math.min(Math.floor(increment.accuracy * step), targets.accuracy),
      })

      if (step >= steps) clearInterval(timer)
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="mt-20 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            {counts.images.toLocaleString()}+
          </div>
          <div className="text-muted-foreground font-medium">Images Processed</div>
        </div>

        <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
            {counts.users.toLocaleString()}+
          </div>
          <div className="text-muted-foreground font-medium">Happy Users</div>
        </div>

        <div className="text-center p-8 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300">
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            {counts.accuracy}%
          </div>
          <div className="text-muted-foreground font-medium">Accuracy Rate</div>
        </div>
      </div>
    </div>
  )
}
