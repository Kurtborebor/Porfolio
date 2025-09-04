import { ArrowDown, Download } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Replace this with your actual Google Drive file ID
    // Instructions: 
    // 1. Upload your resume to Google Drive
    // 2. Right-click the file and select "Get shareable link"
    // 3. Make sure it's set to "Anyone with the link can view"
    // 4. Copy the file ID from the URL (the long string between /d/ and /view)
    // 5. Replace 'YOUR_GOOGLE_DRIVE_FILE_ID' below with your actual file ID
    
    const googleDriveFileId = '1RjwSyaPsG6II5N-9nB9yXPhOcvNdr75b';
    const downloadUrl = `https://drive.google.com/file/d/1RjwSyaPsG6II5N-9nB9yXPhOcvNdr75b/view?usp=sharing`;
    
    // Open the download link in a new tab
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
                Creative
                <span className="block text-muted-foreground">Graphic Designer</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Passionate about creating meaningful visual experiences that connect brands with their audiences. 
                Specializing in modern, minimalist design that tells your story.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToPortfolio} className="group">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" onClick={downloadResume}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto lg:max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
              {/* 
                GOOGLE DRIVE IMAGE SETUP - UPDATED INSTRUCTIONS:
                
                Method 1 (Recommended - works better with CORS):
                1. Upload your profile image to Google Drive
                2. Right-click the image file and select "Get shareable link"
                3. Make sure it's set to "Anyone with the link can view"
                4. Copy the file ID from the URL (the long string between /d/ and /view)
                   Example: https://drive.google.com/file/d/1ABC123DEF456GHI789JKL/view?usp=sharing
                   The file ID is: 1ABC123DEF456GHI789JKL
                5. Use this URL format: https://lh3.googleusercontent.com/d/YOUR_FILE_ID
                
                Method 2 (Alternative if Method 1 doesn't work):
                - Use: https://drive.google.com/uc?export=view&id=YOUR_FILE_ID
                
                Method 3 (If Google Drive keeps failing):
                - Upload to a free image hosting service like Imgur, Cloudinary, or your web host
                - Use the direct image URL
                
                Current file ID: 1RHZOh6n7lSozc-bUv-Umksuq7sXdwkXh
                
                TROUBLESHOOTING:
                - If image shows a gray placeholder, the URL might be blocked by CORS
                - Make sure the Google Drive file permissions are set to "Anyone with the link can view"
                - Try opening the image URL directly in a new browser tab to test
                - The image file should be a common format (JPG, PNG, WEBP)
              */}
              <ImageWithFallback
                src="https://lh3.googleusercontent.com/d/1RHZOh6n7lSozc-bUv-Umksuq7sXdwkXh"
                alt="Kurt Borebor - Graphic Designer"
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
    </section>
  );
}