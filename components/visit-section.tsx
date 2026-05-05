"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Harish Himta",
    review: "Good food, service and atmosphere.",
    rating: 5,
  },
  {
    name: "Ankush Sharma",
    review: "Super cozy vibe, great coffee (the cold brew is 🔥), and delicious food.",
    rating: 5,
  },
  {
    name: "Abhinav Pai",
    review: "Food service ambience is just perfect to unwind. Kudos to the host!",
    rating: 5,
  },
]

export function VisitSection() {
  return (
    <section id="visit" className="py-20 lg:py-28 bg-muted/50">
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
            Find Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Visit <span className="font-serif italic text-primary">Cafe Nova</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Located in the heart of Rohru, Himachal Pradesh — your perfect escape for coffee and conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.2948779013727!2d77.7559137!3d31.201970000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905fbc61154a5ab%3A0xff72c0134171ed5c!2sCafe%20Nova!5e1!3m2!1sen!2sin!4v1777966360368!5m2!1sen!2sin"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Cafe Nova Location"
  className="absolute inset-0"
/>
            {/* Map Overlay Button */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-center">
              <Button
                asChild
                className="bg-card text-foreground hover:bg-card/90 shadow-lg gap-2"
              >
                <a
                  href="https://www.google.com/maps/dir//Cafe+Nova,+Upper+Bazar,+Rohru,+Himachal+Pradesh+171207"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Info & Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Info Card */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Near Fire Station, Upper Bazar,<br />
                      Rohru, Himachal Pradesh 171207
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+918219498963" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7018796714
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Open Daily · 8:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Rating Badge */}
              <div className="mt-6 flex items-center gap-3 p-4 bg-muted rounded-xl">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <span className="font-bold text-foreground">4.9</span>
                  <span className="text-sm text-muted-foreground ml-1">Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="font-semibold text-lg text-foreground mb-4">What People Say</h3>
              
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="pb-4 border-b border-border last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-sm font-medium text-primary">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-medium text-foreground text-sm">{review.name}</span>
                      <div className="flex items-center gap-0.5 ml-auto">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground pl-10">&quot;{review.review}&quot;</p>
                  </motion.div>
                ))}
              </div>

              <a
                href="https://www.google.com/maps/place/Cafe+Nova/@31.2,77.85,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d31.2!4d77.85!9m1!1b1!16s%2Fg%2F11c1p7_1l9"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                View all reviews on Google →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
