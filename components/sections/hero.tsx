"use client"

import Image from "next/image"
import Link from "next/link"
import { Download, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"
import { TypingText } from "@/components/typing-text"

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] max-w-7xl">
                    <div className="flex flex-col justify-center space-y-4">
                        <AnimatedSection delay={200} direction="right">
                            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50 mb-4">
                                <span className="text-primary">⚡</span>
                                <span className="ml-2">Ready to Innovate</span>
                            </div>
                        </AnimatedSection>

                        <div className="space-y-2">
                            <AnimatedSection delay={400} direction="left">
                                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl/none">
                                    Hi, I'm Lê Nguyễn Thành Chung
                                </h1>
                            </AnimatedSection>

                            <AnimatedSection delay={600} direction="right">
                                <h2 className="text-xl font-semibold text-muted-foreground sm:text-2xl">
                                    Software Engineer | Fullstack Developer
                                </h2>
                            </AnimatedSection>

                            <AnimatedSection delay={800} direction="fade">
                                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                    <TypingText
                                        text="Delivering scalable, performant web apps with Angular, VueJS, and NestJS."
                                        delay={1000}
                                        speed={50}
                                    />
                                </p>
                            </AnimatedSection>
                        </div>

                        <AnimatedSection delay={1200} direction="up">
                            <div className="flex flex-col space-y-2 text-muted-foreground">
                                <div className="flex items-center">
                                    <MapPin className="mr-2 h-4 w-4" />
                                    <span>Hanoi, Vietnam</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="mr-2 h-4 w-4" />
                                    <a href="mailto:chung.lnt20062000@gmail.com" className="hover:underline">
                                        chung.lnt20062000@gmail.com
                                    </a>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Link href="https://linkedin.com/in/chunglnt0609" className="hover:underline">
                                        LinkedIn
                                    </Link>
                                    <span>|</span>
                                    <Link href="https://github.com/chungTA0609" className="hover:underline">
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </AnimatedSection>

                        <StaggeredContainer staggerDelay={150} baseDelay={1400}>
                            <div className="flex" style={{ gap: "10px" }}>
                                <Link href="#projects">
                                    <Button className="hover:scale-105 transition-transform">View Projects</Button>
                                </Link>
                                <Link href="#contact">
                                    <Button variant="outline" className="hover:scale-105 transition-transform">
                                        Contact Me
                                    </Button>
                                </Link>
                                <Button variant="outline" className="flex items-center hover:scale-105 transition-transform">
                                    <Download className="mr-2 h-4 w-4" />
                                    Download Resume
                                </Button>
                            </div>
                        </StaggeredContainer>
                    </div>

                    <AnimatedSection delay={1000} direction="scale">
                        <div className="flex items-center justify-center">
                            <Image
                                src="/profile-image.png"
                                alt="Lê Nguyễn Thành Chung"
                                width={400}
                                height={400}
                                className="rounded-full object-cover border-4 border-border w-full h-auto max-w-[400px] max-h-[400px] hover:scale-105 transition-transform duration-300"
                                priority
                            />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
