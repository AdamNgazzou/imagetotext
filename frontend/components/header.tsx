import { Sparkles, Zap, Menu } from "lucide-react"
import { DarkModeToggle } from "@/components/dark-mode-toggle"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 dark:border-gray-700/30 bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/70 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-white/20 to-indigo-50/30 dark:from-gray-900/50 dark:via-gray-800/30 dark:to-blue-900/20"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/60 dark:via-blue-400/40 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 dark:from-blue-600/10 dark:to-indigo-600/10 rounded-full blur-2xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="relative p-3 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Sparkles className="h-6 w-6 text-white animate-pulse" />
                </div>
              </div>

              <div className="space-y-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-700 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 dark:hover:from-blue-300 dark:hover:via-indigo-300 dark:hover:to-purple-300 transition-all duration-500">
                  Image2Text AI
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium flex items-center space-x-1 group">
                  <Zap className="h-3 w-3 text-yellow-500 dark:text-yellow-400 group-hover:animate-bounce" />
                  <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Turn your images into text instantly
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
            </nav>

            <DarkModeToggle />

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
