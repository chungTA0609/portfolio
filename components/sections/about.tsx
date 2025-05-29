"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export function About() {
    return (
        <section id="about" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="down">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">About Me</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="fade">
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Experienced Frontend Developer with 2+ years of hands-on experience in Angular, VueJS, and React. Strong
                            grasp of fullstack development using NestJS, MySQL, and Spring Boot. Passionate about building robust
                            systems with clean architecture and effective teamwork.
                        </p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8 w-full max-w-4xl">
                        <AnimatedSection delay={400} direction="left">
                            <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[160px]">
                                    <span className="text-4xl mb-2">👨‍🎓</span>
                                    <p className="text-center text-sm leading-relaxed">
                                        Graduated from Hanoi University of Science and Technology
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        <AnimatedSection delay={600} direction="up">
                            <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[160px]">
                                    <span className="text-4xl mb-2">🌐</span>
                                    <p className="text-center text-sm leading-relaxed">TOEIC 600 – English CEFR B1</p>
                                </CardContent>
                            </Card>
                        </AnimatedSection>

                        <AnimatedSection delay={800} direction="right">
                            <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg h-full">
                                <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[160px]">
                                    <span className="text-4xl mb-2">🚀</span>
                                    <p className="text-center text-sm leading-relaxed">
                                        Career Goal: Contribute to challenging projects and grow into a senior software engineer.
                                    </p>
                                </CardContent>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    )
}
