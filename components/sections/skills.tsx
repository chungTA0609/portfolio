"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedSection } from "@/components/animated-section"
import { Code, Database, Settings, Palette } from "lucide-react"

export function Skills() {
    const skillCategories = [
        {
            id: "frontend",
            label: "Frontend",
            icon: <Palette className="h-5 w-5" />,
            color: "from-blue-500/20 to-cyan-500/20",
            borderColor: "border-blue-500/30",
            skills: [
                { name: "Angular 14", level: 80, category: "Framework" },
                { name: "VueJS 2/3", level: 85, category: "Framework" },
                { name: "React", level: 80, category: "Framework" },
                { name: "NuxtJS", level: 85, category: "Framework" },
                { name: "TypeScript", level: 80, category: "Language" },
                { name: "HTML5", level: 80, category: "Markup" },
                { name: "CSS3", level: 80, category: "Styling" },
                { name: "WebSocket", level: 50, category: "Protocol" },
                { name: "Nginx", level: 50, category: "Server" },
                { name: "Frontend Security", level: 65, category: "Security" },
            ],
        },
        {
            id: "backend",
            label: "Backend",
            icon: <Database className="h-5 w-5" />,
            color: "from-green-500/20 to-emerald-500/20",
            borderColor: "border-green-500/30",
            skills: [
                { name: "NestJS", level: 70, category: "Framework" },
                { name: "Java Spring Boot", level: 60, category: "Framework" },
                { name: "PostgreSQL", level: 60, category: "Database" },
                { name: "Docker", level: 60, category: "Container" },
                { name: "Communication Protocols", level: 60, category: "Protocol" },
            ],
        },
        {
            id: "devops",
            label: "DevOps & Tools",
            icon: <Settings className="h-5 w-5" />,
            color: "from-purple-500/20 to-pink-500/20",
            borderColor: "border-purple-500/30",
            skills: [
                { name: "Git", level: 80, category: "Version Control" },
                { name: "GitHub Actions", level: 60, category: "CI/CD" },
                { name: "Jira", level: 60, category: "Project Management" },
                { name: "Linux", level: 50, category: "OS" },
                { name: "SonarQube", level: 50, category: "Code Quality" },
            ],
        },
    ]

    const getSkillLevelColor = (level: number) => {
        if (level >= 85) return "bg-green-500"
        if (level >= 70) return "bg-blue-500"
        if (level >= 60) return "bg-yellow-500"
        return "bg-gray-500"
    }

    const getSkillLevelText = (level: number) => {
        if (level >= 85) return "Expert"
        if (level >= 70) return "Advanced"
        if (level >= 60) return "Intermediate"
        return "Beginner"
    }

    const getCategoryColor = (category: string) => {
        const colors = {
            Framework: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
            Language: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
            Database: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
            Tool: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
            Protocol: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
            "State Management": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
            Markup: "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
            Styling: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
            Security: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
            Server: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
            Container: "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
            "Version Control": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
            "CI/CD": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
            "Project Management": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
            OS: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
            "Code Quality": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
        }
        return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }

    return (
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
            <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
                    <AnimatedSection direction="rotate">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-8 w-8 text-primary" />
                            </div>
                            <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">
                                Skills & Expertise
                            </h2>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={200} direction="scale">
                        <p className="max-w-[100%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                            My technical expertise across frontend, backend, and DevOps technologies with proficiency levels.
                        </p>
                    </AnimatedSection>

                    <AnimatedSection delay={400} direction="up">
                        <div className="mx-auto max-w-6xl mt-12 w-full">
                            <Tabs defaultValue="frontend" className="w-full">
                                <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 mb-8 bg-muted/50 p-1 rounded-xl">
                                    {skillCategories.map((category) => (
                                        <TabsTrigger
                                            key={category.id}
                                            value={category.id}
                                            className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
                                        >
                                            {category.icon}
                                            {category.label}
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                {skillCategories.map((category) => (
                                    <TabsContent key={category.id} value={category.id} className="mt-8">
                                        <Card className={`border-0 bg-gradient-to-br ${category.color} backdrop-blur-sm`}>
                                            <CardContent className="p-6 md:p-8">
                                                {/* Category summary - Moved to top for better balance */}
                                                <div className="mb-8 p-6 rounded-xl bg-background/60 backdrop-blur-sm border border-border/30">
                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                                                        <div
                                                            className={`p-3 rounded-lg bg-gradient-to-br ${category.color} ${category.borderColor} border flex-shrink-0`}
                                                        >
                                                            {category.icon}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="font-semibold text-foreground text-xl">{category.label} Expertise</h3>
                                                            <p className="text-sm text-muted-foreground">
                                                                {category.skills.length} technologies • Average proficiency:{" "}
                                                                {Math.round(
                                                                    category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length,
                                                                )}
                                                                %
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                                        {["Expert", "Advanced", "Intermediate", "Beginner"].map((level) => {
                                                            const count = category.skills.filter(
                                                                (skill) => getSkillLevelText(skill.level) === level,
                                                            ).length
                                                            return (
                                                                <div key={level} className="p-3 rounded-lg bg-muted/50">
                                                                    <div className="text-2xl font-bold text-primary">{count}</div>
                                                                    <div className="text-xs text-muted-foreground">{level}</div>
                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>

                                                {/* Skills grid - Balanced layout */}
                                                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                                                    {category.skills.map((skill, index) => (
                                                        <div
                                                            key={skill.name}
                                                            className="group relative p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
                                                        >
                                                            {/* Skill header */}
                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex-1">
                                                                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                                        {skill.name}
                                                                    </h3>
                                                                    <Badge className={`${getCategoryColor(skill.category)} text-xs mt-1 border-0`}>
                                                                        {skill.category}
                                                                    </Badge>
                                                                </div>
                                                                <div className="text-right flex-shrink-0">
                                                                    <div className="text-sm font-medium text-muted-foreground">{skill.level}%</div>
                                                                    <div
                                                                        className={`text-xs px-2 py-1 rounded-full ${getSkillLevelColor(
                                                                            skill.level,
                                                                        )} text-white`}
                                                                    >
                                                                        {getSkillLevelText(skill.level)}
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {/* Progress bar */}
                                                            <div className="relative mt-auto">
                                                                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                                                    <div
                                                                        className={`h-full ${getSkillLevelColor(
                                                                            skill.level,
                                                                        )} rounded-full transition-all duration-1000 ease-out transform origin-left`}
                                                                        style={{
                                                                            width: `${skill.level}%`,
                                                                            animationDelay: `${index * 100}ms`,
                                                                        }}
                                                                    />
                                                                </div>
                                                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                            </div>

                                                            {/* Hover effect overlay */}
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                                        </div>
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </TabsContent>
                                ))}
                            </Tabs>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
