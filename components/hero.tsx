"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles, Coffee, Truck } from "lucide-react"

const stats = [
  { value: "10K+", label: "Happy Customers" },
  { value: "50+", label: "Menu Items" },
  { value: "100%", label: "Fresh Daily" },
]

export function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 lg:pt-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Crafted with love since 2015</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
              >
                Every Bite
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-primary"
              >
                Tells a Story
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed"
            >
              Custom cakes and coffee crafted with the finest ingredients. Egg or eggless, 
              we make every celebration taste like a fairytale.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <Link href="#booking">
                  <Coffee className="h-4 w-4" />
                  Order Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#cakes">Explore Menu</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 lg:gap-12 pt-4"
            >
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80"
                alt="Barista preparing coffee at Cafe Nova"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Badge - Eggless */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute top-4 right-4 lg:-right-4 bg-card rounded-lg px-4 py-2 shadow-lg border border-border"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🥚</span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Eggless</p>
                  <p className="text-xs text-muted-foreground">Available!</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge - Delivery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 left-4 lg:left-8 bg-card rounded-lg px-4 py-3 shadow-lg border border-border"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Available Today</p>
                  <p className="text-sm font-semibold text-foreground">Same Day Delivery 🚀</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="hidden lg:flex flex-col items-center justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-12 bg-foreground/20"
          />
          <span className="text-xs uppercase tracking-widest text-muted-foreground mt-2">Scroll</span>
        </motion.div>
      </div>
    </section>
  )
}
