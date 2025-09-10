import { Github, Twitter, Linkedin, Heart, Sparkles, Mail, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-gray-200/30 dark:border-gray-700/40 bg-gray-50/80 dark:bg-gray-900/90 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/40 dark:via-blue-400/30 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/15 to-purple-400/15 dark:from-blue-600/8 dark:to-purple-600/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-indigo-400/15 to-cyan-400/15 dark:from-indigo-600/8 dark:to-cyan-600/8 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-lg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white">Image2Text AI</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Transform your images into accurate text with our advanced AI technology. Fast, reliable, and secure.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Product</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                API
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Enterprise
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Support</h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Status
              </a>
              <a
                href="#"
                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Community
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/60 dark:bg-gray-800/60 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-500 border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Github className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/60 dark:bg-gray-800/60 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Twitter className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/60 dark:bg-gray-800/60 hover:bg-gradient-to-br hover:from-blue-600 hover:to-indigo-600 dark:hover:from-indigo-700 dark:hover:to-indigo-800 border border-gray-200/50 dark:border-gray-600/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin className="h-4 w-4 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors" />
              </Button>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
              <Mail className="h-3 w-3" />
              <span>hello@image2text.ai</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50 dark:border-gray-700/40">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4 text-blue-500 dark:text-blue-400" />
                <span className="font-medium">© 2025 Image2Text AI</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart className="h-3 w-3 text-red-500 fill-current animate-pulse" />
                <span>Made with love</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-xs">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium flex items-center space-x-1"
              >
                <Shield className="h-3 w-3" />
                <span>Privacy</span>
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                Terms
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-500 dark:text-gray-400 font-medium">All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
