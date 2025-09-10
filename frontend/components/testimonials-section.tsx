"use client"

import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Content Creator",
      avatar: "/professional-woman-smiling.png",
      content: "Image2Text AI has revolutionized my workflow. I can extract text from screenshots in seconds!",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Research Assistant",
      avatar: "/professional-man-glasses.png",
      content:
        "The accuracy is incredible. It even handles handwritten notes perfectly. A game-changer for my research.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Digital Marketer",
      avatar: "/professional-woman-short-hair.png",
      content: "I use this daily for extracting text from images for social media. Fast, accurate, and reliable!",
      rating: 5,
    },
  ]

  return (
    <div className="mt-20 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Loved by Thousands</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          See what our users are saying about their experience with Image2Text AI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="group p-6 bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <div className="relative mb-6">
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
              <p className="text-card-foreground leading-relaxed pl-6">"{testimonial.content}"</p>
            </div>

            <div className="flex items-center space-x-3">
              <img
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
              <div>
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
