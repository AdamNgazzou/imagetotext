import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageUpload } from "@/components/image-upload"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { ParticleBackground } from "@/components/particle-background"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-400/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-float dark-aurora"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-cyan-400/10 dark:from-indigo-500/20 dark:to-cyan-500/20 rounded-full blur-3xl animate-float-delayed dark-aurora"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-300/5 to-purple-300/5 dark:from-blue-400/15 dark:to-purple-400/15 rounded-full blur-3xl animate-pulse-slow dark-glow"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-pink-300/10 to-orange-300/10 dark:from-pink-400/15 dark:to-orange-400/15 rounded-full blur-2xl animate-float-slow dark-particle"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-green-300/10 to-teal-300/10 dark:from-green-400/15 dark:to-teal-400/15 rounded-full blur-2xl animate-float-reverse dark-particle"></div>
      </div>

      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 relative z-10">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm animate-bounce-in">
              <span className="text-sm font-medium text-primary">✨ Powered by Advanced AI</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-balance leading-tight animate-fade-in-up text-shadow-lg">
              <span className="text-foreground dark:text-white">Extract Text from Images</span>
              <span className="block text-4xl md:text-6xl text-primary dark:text-blue-400 mt-2">
                Instantly & Accurately
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up-delayed">
              Upload any image and get <span className="font-semibold text-primary">pixel-perfect text extraction</span>{" "}
              powered by cutting-edge OCR technology. Perfect for documents, screenshots, and handwritten notes.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-8 animate-fade-in-up-delayed-2">
              <div className="flex items-center space-x-2 px-4 py-2 bg-card backdrop-blur-sm rounded-full shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-card-foreground">99% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card backdrop-blur-sm rounded-full shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-card-foreground">Lightning Fast</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-card backdrop-blur-sm rounded-full shadow-sm border border-border hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-card-foreground">Privacy First</span>
              </div>
            </div>
          </div>
        </div>

        <ImageUpload />

        <StatsSection />

        <FeaturesSection />

        <TestimonialsSection />
      </main>

      <Footer />
    </div>
  )
}
