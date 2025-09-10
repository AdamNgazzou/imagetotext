export function FeaturesSection() {
  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description: "Process images in seconds with our optimized AI engine",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      title: "99% Accurate",
      description: "Industry-leading OCR technology for precise text extraction",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      description: "Your images are processed securely and never stored",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "📱",
      title: "Any Format",
      description: "Support for JPG, PNG, PDF, and handwritten text",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "🌐",
      title: "Multi-Language",
      description: "Extract text in 100+ languages with perfect accuracy",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "⚡",
      title: "Batch Processing",
      description: "Upload multiple images and process them simultaneously",
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <div className="mt-20 mb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Image2Text AI?</h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover the powerful features that make our OCR technology the best choice for text extraction
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 bg-card backdrop-blur-sm rounded-2xl shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="filter drop-shadow-sm">{feature.icon}</span>
            </div>
            <h4 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h4>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
