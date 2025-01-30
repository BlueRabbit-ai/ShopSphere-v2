import { NewsletterForm } from "@/components/newsletter-form"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4 text-primary">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/women" className="hover:text-primary">
                  Women
                </Link>
              </li>
              <li>
                <Link href="/category/men" className="hover:text-primary">
                  Men
                </Link>
              </li>
              <li>
                <Link href="/category/kids" className="hover:text-primary">
                  Kids
                </Link>
              </li>
              <li>
                <Link href="/category/accessories" className="hover:text-primary">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-primary">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-primary">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-primary">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
            <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 text-center text-sm">© {new Date().getFullYear()} Acme Inc. All rights reserved.</div>
      </div>
    </footer>
  )
}

