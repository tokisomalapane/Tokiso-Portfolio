"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Cloud, Server, Database, Code, Container, GitBranch, Shield, Zap } from "lucide-react"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud", "Vercel", "Netlify"],
      color: "text-blue-500",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "Java", "Go", "REST APIs", "GraphQL"],
      color: "text-green-500",
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "DynamoDB", "InfluxDB"],
      color: "text-purple-500",
    },
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
      color: "text-orange-500",
    },
    {
      title: "DevOps & Containers",
      icon: Container,
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"],
      color: "text-cyan-500",
    },
    {
      title: "Tools & Platforms",
      icon: GitBranch,
      skills: ["Git", "Linux", "Nginx", "Apache Kafka", "Elasticsearch"],
      color: "text-red-500",
    },
    {
      title: "Security",
      icon: Shield,
      skills: ["OAuth", "JWT", "SSL/TLS", "AWS IAM", "Security Auditing"],
      color: "text-yellow-500",
    },
    {
      title: "Performance",
      icon: Zap,
      skills: ["Load Balancing", "Caching", "CDN", "Monitoring", "Optimization"],
      color: "text-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <category.icon
                      className={`w-8 h-8 ${category.color} mr-3 group-hover:scale-110 transition-transform`}
                    />
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1 + skillIndex * 0.05 + 0.3,
                        }}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
