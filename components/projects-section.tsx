"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, User, Briefcase } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"personal" | "client">("personal")

  const personalProjects = [
    {
      title: "Tutoring Management System ",
      description:
        "Managed entities such as tutors, students, appointments, qualifications, and administrators.",
      tech: ["Node.js", "SQL", "Object-Oriented Programming "],
      github: "https://github.com/tokiso/ecommerce-platform",
      demo: "https://ecommerce-demo.tokiso.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    /*
    {
      title: "Real-time Analytics Dashboard",
      description:
        "High-performance dashboard processing millions of events per second using Apache Kafka and real-time data streaming.",
      tech: ["Python", "Apache Kafka", "React", "WebSocket", "InfluxDB", "Grafana"],
      github: "https://github.com/tokiso/analytics-dashboard",
      demo: "https://analytics.tokiso.dev",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: "Container Orchestration Tool",
      description:
        "DevOps tool for managing containerized applications across multiple cloud providers with automated deployment.",
      tech: ["Go", "Docker", "Kubernetes", "Helm", "Azure", "GCP"],
      github: "https://github.com/tokiso/container-orchestrator",
      demo: "https://orchestrator.tokiso.dev",
      image: "/placeholder.svg?height=200&width=400",
    },*/
  ]

  const clientProjects = [
    {
      title: " Simple Clothing Brand E-Commerce Website",
      description:
        "Designed and deployed a responsive e-commerce website",
      tech: ["Next.js", "TailwindCSS", "Node.js"],
      github: null, // Private repository
      demo: "https://devol-heresy.vercel.app/",
      image: "/IMG_20250701_222402.jpg?height=200&width=400",
      client: "Major Financial Institution",
    },
    /*
    {
      title: "Healthcare Data Pipeline",
      description:
        "HIPAA-compliant data processing pipeline for patient records with real-time analytics and reporting.",
      tech: ["Python", "Apache Airflow", "PostgreSQL", "Redis", "Docker", "Terraform"],
      github: null,
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
      client: "Healthcare Technology Company",
    },
    {
      title: "E-learning Platform Backend",
      description:
        "Scalable backend infrastructure supporting 100K+ concurrent users with video streaming and real-time collaboration.",
      tech: ["Node.js", "MongoDB", "Redis", "WebRTC", "AWS S3", "CloudFront"],
      github: null,
      demo: "https://learning-platform-demo.com",
      image: "/placeholder.svg?height=200&width=400",
      client: "EdTech Startup",
    },
    {
      title: "IoT Device Management System",
      description:
        "Cloud-based system managing 50K+ IoT devices with real-time monitoring, firmware updates, and analytics.",
      tech: ["Python", "MQTT", "InfluxDB", "Grafana", "Docker", "Kubernetes"],
      github: null,
      demo: null,
      image: "/placeholder.svg?height=200&width=400",
      client: "Manufacturing Company",
    },
    */
  ]

  const currentProjects = activeTab === "personal" ? personalProjects : clientProjects

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my work across personal projects and client solutions, showcasing cloud architecture, backend
            development, and scalable systems.
          </p>
        </motion.div>

        {/* Project Type Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => setActiveTab("personal")}
              className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === "personal"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <User className="w-4 h-4 mr-2" />
              Personal Projects
            </button>
            <button
              onClick={() => setActiveTab("client")}
              className={`flex items-center px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === "client"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Client Projects
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <motion.div
              key={`${activeTab}-${project.title}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="group-hover:text-primary transition-colors flex-1">{project.title}</CardTitle>
                    {activeTab === "client" && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Client Work
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-sm">{project.description}</CardDescription>
                  {activeTab === "client" && "client" in project && (
                    <p className="text-xs text-muted-foreground mt-2">
                      <strong>Client:</strong> {project.client}
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.github ? (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        Private
                      </Button>
                    )}
                    {project.demo ? (
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          {activeTab === "client" ? "Case Study" : "Demo"}
                        </a>
                      </Button>
                    ) : (
                      <Button size="sm" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Confidential
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
