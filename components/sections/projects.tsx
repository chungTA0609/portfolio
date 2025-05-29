"use client"

import Link from "next/link"
import { Github } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
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
        },
        {
            title: "Hofuri-M",
            company: "FPT Software – Stock Comparison Platform",
            date: "03/2023 – 03/2024",
            role: "Frontend Developer",
            techs: ["VueJS 3", "Vuex", "React", "Redux", "Jest"],
            direction: "scale" as const,
        },
        {
            title: "Myforex",
            company: "Rikkeisoft – Forex Website",
            date: "03/2022 – 03/2023",
            role: "Frontend Developer",
            techs: ["VueJS 2", "NuxtJS", "TypeScript", "MySQL"],
            direction: "rotate" as const,
        },
        {
            title: "Time Keeping Management",
            company: "Graduation Thesis",
            date: "10/2022 – 02/2023",
            techs: ["VueJS", "NuxtJS", "NestJS", "MySQL"],
            hasGithub: true,
            direction: "left" as const,
        },
        {
            title: "E-Commerce Website",
            date: "06/2021 – 08/2021",
            techs: ["Angular", ".NET Core", "EF Core"],
            hasGithub: true,
            direction: "right" as const,
        },
    ]

    return (
        <section id="projects" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="left">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Projects</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="right">
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Highlighting my major projects and contributions.
                        </p>
                    </AnimatedSection>

                    <div className="mx-auto grid max-w-6xl gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
                        {projects.map((project, index) => (
                            <AnimatedSection key={project.title} delay={400 + index * 150} direction={project.direction}>
                                <Card className="flex flex-col h-full overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                    <div className="bg-primary/10 p-6 flex-shrink-0">
                                        <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
                                        {project.company && (
                                            <p className="text-sm text-muted-foreground mt-1 leading-tight">{project.company}</p>
                                        )}
                                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                                            <span>📅 {project.date}</span>
                                        </div>
                                        {project.role && (
                                            <div className="flex items-center mt-1 text-sm text-muted-foreground">
                                                <span>📍 {project.role}</span>
                                            </div>
                                        )}
                                    </div>
                                    <CardContent className="flex-1 p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <div className="mb-4">
                                                <StaggeredContainer staggerDelay={30}>
                                                    {project.techs.map((tech) => (
                                                        <Badge key={tech} variant="outline" className="text-xs m-1">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </StaggeredContainer>
                                            </div>
                                            {project.responsibilities && (
                                                <div className="mb-4">
                                                    <h4 className="font-semibold mb-2 text-sm">Responsibilities:</h4>
                                                    <ul className="list-disc pl-5 text-sm space-y-1">
                                                        {project.responsibilities.map((resp, i) => (
                                                            <li key={i} className="leading-relaxed">
                                                                {resp}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-border/50">
                                            {project.hasGithub ? (
                                                <Link
                                                    href="https://github.com/chungTA0609"
                                                    className="text-sm font-medium inline-flex items-center hover:underline transition-all hover:scale-105"
                                                >
                                                    <Github className="mr-1 h-3 w-3" /> GitHub
                                                </Link>
                                            ) : (
                                                <span className="text-sm text-muted-foreground">[GitHub N/A]</span>
                                            )}
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
