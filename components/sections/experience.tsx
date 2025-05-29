"use client"

import { AnimatedSection } from "@/components/animated-section"

export function Experience() {
    const experiences = [
        {
            company: "ViettelPost",
            period: "03/2024 – Now",
            role: "Software Engineer",
            tasks: ["Develop new UI for internal tools", "Code reviews, documentation, deployment"],
            direction: "right" as const,
        },
        {
            company: "FPT Software",
            period: "03/2023 – 03/2024",
            role: "Frontend Engineer",
            tasks: ["Implement client features, unit test with Jest"],
            direction: "left" as const,
        },
        {
            company: "Rikkeisoft",
            period: "03/2022 – 03/2023",
            role: "Frontend Developer",
            tasks: ["Build interfaces, mentor newcomers"],
            direction: "right" as const,
        },
        {
            company: "Internships",
            period: "2021 – 2022",
            role: "Fullstack Intern (Angular, .NET) at VTI & Trí Nam",
            direction: "left" as const,
        },
    ]

    return (
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="down">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Experience</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="fade">
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            My professional journey and work experience.
                        </p>
                    </AnimatedSection>

                    <div className="mx-auto max-w-4xl mt-12 w-full">
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

                            <div className="space-y-12">
                                {experiences.reverse().map((exp, index) => (
                                    <AnimatedSection key={exp.company} delay={400 + index * 200} direction={exp.direction}>
                                        <div
                                            className={`relative flex items-start ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                                } flex-col md:gap-8`}
                                        >
                                            {/* Timeline dot */}
                                            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 flex h-4 w-4 items-center justify-center rounded-full bg-primary border-4 border-background shadow-lg hover:scale-125 transition-transform z-10">
                                                <div className="h-2 w-2 rounded-full bg-background"></div>
                                            </div>

                                            {/* Content card */}
                                            <div
                                                className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8 md:text-right" : "md:ml-8 md:text-left"
                                                    } md:w-1/2 w-full`}
                                            >
                                                <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
                                                    <div className="space-y-2">
                                                        <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                                                        {exp.period && <p className="text-sm text-muted-foreground font-medium">{exp.period}</p>}
                                                        <p className="font-semibold text-primary">{exp.role}</p>
                                                        {exp.tasks && (
                                                            <div className="mt-3">
                                                                <ul
                                                                    className={`text-sm space-y-1 text-muted-foreground ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                                                        }`}
                                                                >
                                                                    {exp.tasks.map((task, i) => (
                                                                        <li key={i} className="leading-relaxed">
                                                                            • {task}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Spacer for the other side on desktop */}
                                            <div className="hidden md:block md:w-1/2"></div>
                                        </div>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
