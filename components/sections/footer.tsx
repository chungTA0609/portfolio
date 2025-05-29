"use client"

import { AnimatedSection } from "@/components/animated-section"

export function Footer() {
    return (
        <footer className="w-full border-t py-6">
            <AnimatedSection direction="up">
                <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2024 Lê Nguyễn Thành Chung. All rights reserved.
                    </p>
                </div>
            </AnimatedSection>
        </footer>
    )
}
