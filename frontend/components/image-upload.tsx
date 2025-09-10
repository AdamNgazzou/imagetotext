"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, ImageIcon, Copy, Check, Loader2, Sparkles, Zap, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageUploadProps {
  onTextExtracted?: (text: string) => void
}

export function ImageUpload({ onTextExtracted }: ImageUploadProps) {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [extractedText, setExtractedText] = useState<string>("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [copied, setCopied] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (file) {
        const imageUrl = URL.createObjectURL(file)
        setUploadedImage(imageUrl)
        setIsProcessing(true)

        // Prepare form data
        const formData = new FormData()
        formData.append("file", file)

        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/extract-text`, {
            method: "POST",
            body: formData,
          })
          const data = await response.json()
          const text = data.extracted_text || data.error || "No text found."
          setExtractedText(text)
          setIsProcessing(false)
          onTextExtracted?.(text)
        } catch (err) {
          setExtractedText("Error extracting text.")
          setIsProcessing(false)
        }
      }
    },
    [onTextExtracted],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".bmp", ".webp"],
    },
    multiple: false,
  })

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(extractedText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text:", err)
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto space-y-8">
      {/* Upload Area */}
      <Card className="p-8 bg-card/80 backdrop-blur-sm border-0 shadow-2xl shadow-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 dark:from-primary/10 dark:to-primary/20"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>

        <div className="relative z-10">
          <div
            {...getRootProps()}
            className={cn(
              "border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition-all duration-300 group",
              "hover:border-primary hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10 hover:shadow-lg hover:shadow-primary/20",
              "hover:scale-[1.02] transform-gpu",
              isDragActive
                ? "border-primary bg-gradient-to-br from-primary/10 to-primary/20 shadow-lg shadow-primary/25 scale-[1.02]"
                : "border-border",
            )}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative p-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Upload className="h-10 w-10 text-white" />
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {isDragActive ? "Drop your image here" : "Upload an image"}
                </h3>
                <p className="text-lg text-muted-foreground font-medium">Drag & drop an image or click to browse</p>
                <p className="text-sm text-muted-foreground bg-muted/80 px-4 py-2 rounded-full inline-block">
                  Supports PNG, JPG, JPEG, GIF, BMP, WebP • Max 10MB
                </p>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Zap className="h-5 w-5 text-yellow-500" />
                  <span className="text-sm font-medium">Fast Processing</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Sparkles className="h-5 w-5 text-purple-500" />
                  <span className="text-sm font-medium">AI Powered</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Image Preview */}
      {uploadedImage && (
        <Card className="p-8 bg-card/90 backdrop-blur-sm border-0 shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600">
                <ImageIcon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Uploaded Image</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent"></div>
            </div>

            <div className="relative max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
              <img
                src={uploadedImage || "/placeholder.svg"}
                alt="Uploaded"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </Card>
      )}

      {/* Processing State */}
      {isProcessing && (
        <Card className="p-12 bg-card/80 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-300"></div>
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping animation-delay-700"></div>
          </div>

          <div className="flex flex-col items-center space-y-6 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50"></div>
              <Loader2 className="relative h-12 w-12 text-primary animate-spin" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-foreground">Processing Image</h3>
              <p className="text-lg text-muted-foreground">Our AI is extracting text from your image...</p>
              <div className="flex items-center justify-center space-x-1 mt-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-200"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay-400"></div>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* Extracted Text */}
      {extractedText && !isProcessing && (
        <Card className="p-8 bg-card/90 backdrop-blur-sm border-0 shadow-xl shadow-green-500/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600">
                  <Check className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Extracted Text</h3>
                <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                  ✓ Complete
                </div>
              </div>

              <Button
                onClick={copyToClipboard}
                className={cn(
                  "flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl",
                  copied
                    ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
                )}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Copy Text</span>
                  </>
                )}
              </Button>
            </div>

            <div className="bg-muted/50 rounded-2xl p-6 border border-border shadow-inner">
              <pre className="whitespace-pre-wrap text-sm text-foreground font-mono leading-relaxed">
                {extractedText}
              </pre>
            </div>
          </div>
        </Card>
      )}
    </div>
  )
}
