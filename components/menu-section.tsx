"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = ["All", "Coffee", "Pastries", "Beverages", "Snacks"]

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 150,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Cold Brew",
    description: "Smooth, cold-steeped coffee",
    price: 180,
    category: "Coffee",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Croissant",
    description: "Buttery, flaky French pastry",
    price: 120,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Blueberry Muffin",
    description: "Fresh blueberries in soft muffin",
    price: 100,
    category: "Pastries",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Matcha Latte",
    description: "Premium matcha with oat milk",
    price: 200,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Fresh Orange Juice",
    description: "Freshly squeezed oranges",
    price: 120,
    category: "Beverages",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "Avocado Toast",
    description: "Smashed avocado on sourdough",
    price: 220,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Club Sandwich",
    description: "Triple-decker with chicken",
    price: 250,
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&auto=format&fit=crop&q=80",
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const handleOrder = (itemName: string, price: number) => {
    const message = encodeURIComponent(
      `Hi! I would like to order ${itemName} (₹${price}) from Cafe Nova.`
    )
    window.open(`https://wa.me/918219498963?text=${message}`, "_blank")
  }

  return (
    <section id="menu" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-accent font-medium">
            Our Menu
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Taste the <span className="font-serif italic text-primary">Difference</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From aromatic coffees to delicious pastries — something for everyone.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-medium text-foreground">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="mt-0.5 text-sm text-muted-foreground line-clamp-1">
                        {item.description}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-primary whitespace-nowrap">
                      ₹{item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => handleOrder(item.name, item.price)}
                    className="mt-3 w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground py-2.5 rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors group/btn"
                  >
                    Order via WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
