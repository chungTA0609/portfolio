"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"

export function Header() {
    return (
        <header
            className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            style={{ justifyItems: "center" }}
        >
            <AnimatedSection direction="down" duration={800}>
                <div className="container flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="mr-4 flex">
                        <Link href="/" className="mr-6 flex items-center space-x-2">
                            <span className="font-bold">Lê Nguyễn Thành Chung</span>
                        </Link>
                        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
                            <Link href="#about" className="transition-colors hover:text-foreground/80">
                                About
                            </Link>
                            <Link href="#skills" className="transition-colors hover:text-foreground/80">
                                Skills
                            </Link>
                            <Link href="#projects" className="transition-colors hover:text-foreground/80">
                                Projects
                            </Link>
                            <Link href="#experience" className="transition-colors hover:text-foreground/80">
                                Experience
                            </Link>
                            <Link href="#contact" className="transition-colors hover:text-foreground/80">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <ThemeToggle />
                        <nav className="flex items-center space-x-2">
                            <Link href="https://github.com/chungTA0609" target="_blank" rel="noreferrer">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </div>
                            </Link>
                            <Link href="https://linkedin.com/in/chunglnt0609" target="_blank" rel="noreferrer">
                                <div className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-background text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </div>
                            </Link>
                        </nav>
                    </div>
                </div>
            </AnimatedSection>
        </header>
    )
}
