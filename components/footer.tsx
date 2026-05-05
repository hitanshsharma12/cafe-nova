"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Coffee, Instagram, Facebook, MessageCircle, Phone, Mail, MapPin, Heart } from "lucide-react"

const footerLinks = {
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Our Cakes", href: "#cakes" },
    { label: "Menu", href: "#menu" },
    { label: "Visit Us", href: "#visit" },
    { label: "Book a Table", href: "#booking" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: MessageCircle, href: "https://wa.me/918219498963", label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-background">Cafe Nova</h3>
                <p className="text-[10px] uppercase tracking-widest text-background/60 -mt-0.5">
                  Bakery & Coffee
                </p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed mb-4">
              Freshly Brewed Aromatic Coffee. Food | Music | Cozy Vibes | Perfect Hangout Spot in Rohru, Himachal Pradesh.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+918219498963"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  +91 82194 98963
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@cafenova.in"
                  className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  hello@cafenova.in
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-background/70">
                  <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                  <span>
                    Near Fire Station, Upper Bazar,<br />
                    Rohru, Himachal Pradesh 171207
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base font-semibold text-background mb-4">Opening Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-background/70">Monday - Friday</span>
                <span className="text-background">8 AM - 8 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-background/70">Saturday</span>
                <span className="text-background">9 AM - 9 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-background/70">Sunday</span>
                <span className="text-background">9 AM - 9 PM</span>
              </li>
            </ul>
            {/* CTA */}
            <a
              href="https://wa.me/918219498963?text=Hi!%20I%20would%20like%20to%20make%20a%20reservation%20at%20Cafe%20Nova."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60 text-center md:text-left">
              © {new Date().getFullYear()} Cafe Nova. All rights reserved.
            </p>
            <p className="text-sm text-background/60 flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Hitansh Sharma
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
