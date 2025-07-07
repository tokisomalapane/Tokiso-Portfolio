"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-muted/30 py-8 border-t">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Tokiso. Built with Next.js + Tailwind CSS + Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
