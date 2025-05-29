"use client"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"

export function Skills() {
    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="rotate">
                        <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Skills</h2>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="scale">
                        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            My technical expertise and tools I work with.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={400} direction="up">
                        <div className="mx-auto max-w-4xl mt-8">
                            <Tabs defaultValue="frontend" className="w-full">
                                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
                                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                                    <TabsTrigger value="backend">Backend</TabsTrigger>
                                    <TabsTrigger value="devops">DevOps & Tools</TabsTrigger>
                                </TabsList>
                                <TabsContent value="frontend" className="mt-6">
                                    <StaggeredContainer staggerDelay={50}>
                                        {[
                                            "Angular 14",
                                            "VueJS 2/3",
                                            "NuxtJS",
                                            "React",
                                            "Redux",
                                            "TypeScript",
                                            "HTML5",
                                            "CSS3",
                                            "Frontend Security",
                                            "WebSocket",
                                            "Nginx",
                                        ].map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="text-sm py-1 px-3 hover:scale-110 transition-transform duration-200 m-1 inline-block"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </StaggeredContainer>
                                </TabsContent>
                                <TabsContent value="backend" className="mt-6">
                                    <StaggeredContainer staggerDelay={50}>
                                        {["NestJS", "Java Spring Boot", "MySQL", "Docker", "Communication Protocols"].map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="text-sm py-1 px-3 hover:scale-110 transition-transform duration-200 m-1 inline-block"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </StaggeredContainer>
                                </TabsContent>
                                <TabsContent value="devops" className="mt-6">
                                    <StaggeredContainer staggerDelay={50}>
                                        {["Git", "Jira", "Linux", "GitHub Actions", "GitLab CI/CD", "SonarQube"].map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant="secondary"
                                                className="text-sm py-1 px-3 hover:scale-110 transition-transform duration-200 m-1 inline-block"
                                            >
                                                {skill}
                                            </Badge>
                                        ))}
                                    </StaggeredContainer>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
