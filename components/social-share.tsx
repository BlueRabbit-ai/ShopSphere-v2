import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialShare({ url, title }: { url: string; title: string }) {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  }

  return (
    <div className="flex space-x-2">
      <Button variant="outline" size="icon" asChild>
        <a href={shareUrls.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="h-4 w-4" />
          <span className="sr-only">Share on Facebook</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={shareUrls.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="h-4 w-4" />
          <span className="sr-only">Share on Twitter</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href={shareUrls.linkedin} target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-4 w-4" />
          <span className="sr-only">Share on LinkedIn</span>
        </a>
      </Button>
    </div>
  )
}

