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
                </div>

                <AnimatedSection delay={400} direction="left">
                    <div className="mx-auto max-w-3xl mt-8">
                        <div className="relative border-l border-muted-foreground/20 pl-6 pb-6">
                            {experiences.map((exp, index) => (
                                <AnimatedSection key={exp.company} delay={600 + index * 200} direction={exp.direction}>
                                    <div className="mb-10 last:mb-0">
                                        <div
                                            className={`absolute left-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary -translate-x-1/2 hover:scale-125 transition-transform`}
                                            style={{ top: `${index * 120}px` }}
                                        >
                                            <div className="h-2 w-2 rounded-full bg-background"></div>
                                        </div>
                                        <h3 className="text-xl font-bold">{exp.company}</h3>
                                        {exp.period && <p className="text-sm text-muted-foreground">{exp.period}</p>}
                                        <p className="font-medium mt-2">{exp.role}</p>
                                        {exp.tasks && (
                                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                                                {exp.tasks.map((task, i) => (
                                                    <li key={i}>{task}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
