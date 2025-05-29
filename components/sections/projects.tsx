"use client"

import Link from "next/link"
import { Github, Calendar, MapPin, ExternalLink, Code2 } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function Projects() {
    const projects = [
        {
            title: "NOC System",
            company: "ViettelPost – Business Product",
            date: "03/2024 – Now",
            role: "Frontend Developer",
            techs: ["Angular 14", "Ant Design", "Highcharts", "Video.js", "Map"],
            responsibilities: [
                "Built new and extended product UI",
                "Reviewed code, wrote documentation",
                "Deployed dev/staging environments",
            ],
            direction: "up" as const,
            status: "In Progress",
            category: "Enterprise",
        },
        {
            title: "Hofuri-M",
            company: "FPT Software",
            date: "03/2023 – 03/2024",
            role: "Frontend Developer",
            techs: ["VueJS 3", "Vuex", "React", "Redux", "Jest"],
            direction: "scale" as const,
            status: "Completed",
            category: "Finance",
        },
        {
            title: "Myforex",
            company: "Rikkeisoft",
            date: "03/2022 – 03/2023",
            role: "Frontend Developer",
            techs: ["VueJS 2", "NuxtJS", "TypeScript", "MySQL"],
            direction: "rotate" as const,
            status: "Completed",
            category: "Finance",
        },
        {
            title: "Graduation Thesis",
            company: "Time Keeping Management",
            date: "10/2022 – 02/2023",
            techs: ["VueJS", "NuxtJS", "NestJS", "MySQL"],
            hasGithub: true,
            direction: "left" as const,
            status: "Completed",
            category: "Academic",
        },
        {
            title: "E-Commerce Website",
            company: "Personal Project",
            date: "06/2021 – 08/2021",
            techs: ["Angular", ".NET Core", "EF Core"],
            hasGithub: true,
            direction: "right" as const,
            status: "Completed",
            category: "E-commerce",
        },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case "In Progress":
                return "bg-blue-500/10 text-blue-600 border-blue-200"
            case "Completed":
                return "bg-green-500/10 text-green-600 border-green-200"
            default:
                return "bg-gray-500/10 text-gray-600 border-gray-200"
        }
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Enterprise":
                return "🏢"
            case "Finance":
                return "💰"
            case "Academic":
                return "🎓"
            case "E-commerce":
                return "🛒"
            default:
                return "💼"
        }
    }

    return (
        <section id="projects" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="left">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Projects</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="right">
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Highlighting my major projects and contributions across different domains.
                        </p>
                    </AnimatedSection>

                    <div className="mx-auto grid max-w-7xl gap-8 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {projects.map((project, index) => (
                            <AnimatedSection key={project.title} delay={400 + index * 150} direction={project.direction}>
                                <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Status badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <Badge className={`${getStatusColor(project.status)} border text-xs font-medium px-2 py-1`}>
                                            {project.status}
                                        </Badge>
                                    </div>

                                    <CardContent className="relative p-0 h-full flex flex-col">
                                        {/* Header section - Fixed height */}
                                        <div className="relative p-6 pb-4 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent flex-shrink-0 min-h-[140px] flex flex-col justify-between">
                                            <div>
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex items-center gap-2">
                                                        {/* <span className="text-2xl">{getCategoryIcon(project.category)}</span> */}
                                                        <Badge variant="outline" className="text-xs">
                                                            {project.category}
                                                        </Badge>
                                                    </div>
                                                </div>

                                                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                    {project.title}
                                                </h3>

                                                {project.company && (
                                                    <p className="text-sm text-muted-foreground font-medium mb-3 flex items-center gap-1 line-clamp-1">
                                                        <MapPin className="h-3 w-3 flex-shrink-0" />
                                                        {project.company}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="flex items-center text-xs text-muted-foreground">
                                                <div className="flex items-center gap-1">
                                                    <Calendar className="h-3 w-3" />
                                                    {project.date}
                                                </div>
                                            </div>
                                            <div className="flex items-center text-xs text-muted-foreground">
                                                {project.role && (
                                                    <div className="flex items-center gap-1">
                                                        <Code2 className="h-3 w-3" />
                                                        <span className="line-clamp-1">{project.role}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content section - Flexible height */}
                                        <div className="flex-1 p-6 pt-4 flex flex-col">
                                            {/* Tech stack */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                                                    Tech Stack
                                                </h4>
                                                <StaggeredContainer staggerDelay={30}>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {project.techs.map((tech) => (
                                                            <Badge
                                                                key={tech}
                                                                variant="secondary"
                                                                className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </StaggeredContainer>
                                            </div>

                                            {/* Responsibilities - Flexible content */}
                                            {project.responsibilities && (
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                                                        Key Achievements
                                                    </h4>
                                                    <ul className="space-y-2">
                                                        {project.responsibilities.map((resp, i) => (
                                                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                                                <span className="text-primary mt-1.5 text-xs flex-shrink-0">▸</span>
                                                                <span className="leading-relaxed">{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Footer section - Fixed height */}
                                        <div className="p-6 pt-0 mt-auto flex-shrink-0 min-h-[80px] flex items-end">
                                            <div className="flex items-center justify-between pt-4 border-t border-border/50 w-full">
                                                {project.hasGithub ? (
                                                    <Link href="https://github.com/chungTA0609" target="_blank" rel="noreferrer">
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="group/btn hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                                        >
                                                            <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                                                            View Code
                                                        </Button>
                                                    </Link>
                                                ) : (
                                                    <Button variant="ghost" size="sm" disabled className="text-muted-foreground">
                                                        <Github className="h-4 w-4 mr-2" />
                                                        Private Repo
                                                    </Button>
                                                )}

                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    <ExternalLink className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
