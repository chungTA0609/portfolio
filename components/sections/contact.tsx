"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function Contact() {
    return (
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="scale">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Get in Touch</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="fade">
                        <p className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            Feel free to reach out if you're looking for a developer or just want to connect.
                        </p>
                    </AnimatedSection>
                </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 mt-8 grid-cols-1 md:grid-cols-2 px-4 sm:px-6 lg:px-8">
                <AnimatedSection delay={400} direction="left">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Contact Information</h3>
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5" />
                            <a href="mailto:chung.lnt20062000@gmail.com" className="hover:underline">
                                chung.lnt20062000@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-5 w-5" />
                            <span>Hanoi, Vietnam</span>
                        </div>
                        <StaggeredContainer staggerDelay={100} baseDelay={600}>
                            <span><Link href="https://github.com/chungTA0609" target="_blank" rel="noreferrer">
                                <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                                    <Github className="h-5 w-5" />
                                </Button>
                            </Link>
                                <Link href="https://linkedin.com/in/chunglnt0609" target="_blank" rel="noreferrer">
                                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                                        <Linkedin className="h-5 w-5" />
                                    </Button>
                                </Link></span>
                        </StaggeredContainer>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={600} direction="right">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Send a Message</h3>
                        <form className="flex flex-col gap-4">
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50 focus:scale-105"
                                placeholder="Your Name"
                            />
                            <input
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50 focus:scale-105"
                                placeholder="Your Email"
                                type="email"
                            />
                            <textarea
                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:border-primary/50 focus:scale-105"
                                placeholder="Your Message"
                            />
                            <Button type="submit" className="hover:scale-105 transition-transform">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    )
}
