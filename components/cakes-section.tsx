"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Star, Heart, Sparkles, Award } from "lucide-react"

const cakes = [
  {
    id: 1,
    name: "Belgian Chocolate",
    description: "Dark chocolate ganache with Belgian cocoa layers",
    price: 549,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80",
    badge: "Best Seller",
    badgeIcon: Star,
    badgeColor: "bg-amber-500",
  },
  {
    id: 2,
    name: "Strawberry Dream",
    description: "Fresh cream with real strawberry compote",
    price: 599,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=80",
    badge: "Fan Favourite",
    badgeIcon: Heart,
    badgeColor: "bg-rose-500",
  },
  {
    id: 3,
    name: "Coffee Delight",
    description: "Rich espresso layers with mocha frosting",
    price: 549,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&auto=format&fit=crop&q=80",
    badge: "Refreshing",
    badgeIcon: Sparkles,
    badgeColor: "bg-amber-600",
  },
  {
    id: 4,
    name: "Butterscotch Bliss",
    description: "Classic butterscotch crunch with caramel swirls",
    price: 579,
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&auto=format&fit=crop&q=80",
    badge: "Classic Favourite",
    badgeIcon: Award,
    badgeColor: "bg-emerald-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function CakesSection() {
  const handleOrder = (cakeName: string, price: number) => {
    const message = encodeURIComponent(
      `Hi! I would like to order a ${cakeName} (₹${price}) from Cafe Nova.`
    )
    window.open(`https://wa.me/918219498963?text=${message}`, "_blank")
  }

  return (
    <section id="cakes" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Our Specialities
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Cakes That <span className="font-serif italic text-primary">Delight</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            All our cakes are freshly baked to order. Egg or eggless — just the way you want it.
          </p>
        </motion.div>

        {/* Cakes Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {cakes.map((cake) => (
            <motion.div
              key={cake.id}
              variants={itemVariants}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${cake.badgeColor} text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-medium shadow-lg`}>
                  <cake.badgeIcon className="h-3 w-3" />
                  {cake.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-foreground">{cake.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                  {cake.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-lg font-bold text-accent">
                    From ₹{cake.price}
                  </p>
                  <button
                    onClick={() => handleOrder(cake.name, cake.price)}
                    className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors group/btn"
                  >
                    Order
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-24 bg-muted rounded-3xl p-8 lg:p-12 text-center"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium">
            Custom Order
          </span>
          <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Build Your Dream Cake 🎨
          </h3>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">
            Customise every detail — we bake it fresh, just for you.
          </p>
          <button
            onClick={() => {
              const message = encodeURIComponent(
                "Hi! I would like to order a custom cake from Cafe Nova. Can you help me with the details?"
              )
              window.open(`https://wa.me/918219498963?text=${message}`, "_blank")
            }}
            className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Start Customizing
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
