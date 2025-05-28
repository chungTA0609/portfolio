import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedSection } from "@/components/animated-section"
import { StaggeredContainer } from "@/components/staggered-container"
import { FloatingElements } from "@/components/floating-elements"
import { TypingText } from "@/components/typing-text"

export default function Portfolio() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <FloatingElements />

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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
          <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] max-w-7xl">
              <div className="flex flex-col justify-center space-y-4">
                <AnimatedSection delay={200} direction="right">
                  <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-muted/50 mb-4">
                    <span className="text-primary">⚡</span>
                    <span className="ml-2">Open to Work</span>
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

        {/* About Section */}
        <section id="about" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
          <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <AnimatedSection direction="down">
                <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">About Me</h2>
              </AnimatedSection>

              <AnimatedSection delay={200} direction="fade">
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                  Experienced Frontend Developer with 2+ years of hands-on experience in Angular, VueJS, and React.
                  Strong grasp of fullstack development using NestJS, MySQL, and Spring Boot. Passionate about building
                  robust systems with clean architecture and effective teamwork.
                </p>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <AnimatedSection delay={400} direction="left">
                  <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-4xl mb-2">👨‍🎓</span>
                      <p className="text-center text-sm">Graduated from Hanoi University of Science and Technology</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={600} direction="up">
                  <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-4xl mb-2">🌐</span>
                      <p className="text-center text-sm">TOEIC 600 – English CEFR B1</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection delay={800} direction="right">
                  <Card className="hover:scale-105 transition-transform duration-300 hover:shadow-lg">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <span className="text-4xl mb-2">🚀</span>
                      <p className="text-center text-sm">
                        Career Goal: Contribute to challenging projects and grow into a senior software engineer.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
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

        {/* Projects Section */}
        <section
          id="projects"
          className="w-full bg-muted/50 py-12 md:py-24 lg:py-32"
          style={{ justifyItems: "center" }}
        >
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

              <div className="mx-auto grid max-w-5xl gap-8 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {[
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
                ].map((project, index) => (
                  <AnimatedSection key={project.title} delay={400 + index * 150} direction={project.direction}>
                    <Card className="flex flex-col overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                      <div className="bg-primary/10 p-6">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        {project.company && <p className="text-sm text-muted-foreground mt-1">{project.company}</p>}
                        <div className="flex items-center mt-2 text-sm text-muted-foreground">
                          <span>📅 {project.date}</span>
                        </div>
                        {project.role && (
                          <div className="flex items-center mt-1 text-sm text-muted-foreground">
                            <span>📍 {project.role}</span>
                          </div>
                        )}
                      </div>
                      <CardContent className="flex-1 p-6">
                        <StaggeredContainer staggerDelay={30}>
                          {project.techs.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs m-1">
                              {tech}
                            </Badge>
                          ))}
                        </StaggeredContainer>
                        {project.responsibilities && (
                          <>
                            <h4 className="font-semibold mb-2 mt-4">Responsibilities:</h4>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              {project.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                              ))}
                            </ul>
                          </>
                        )}
                        <div className="mt-4">
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

        {/* Experience Section */}
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
                  {[
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
                  ].map((exp, index) => (
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32" style={{ justifyItems: "center" }}>
          <div className="container px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <AnimatedSection direction="scale">
                <h2 className="text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">Get in Touch</h2>
              </AnimatedSection>

              <AnimatedSection delay={200} direction="fade">
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
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
                  <Link href="https://github.com/chungTA0609" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                      <Github className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/chunglnt0609" target="_blank" rel="noreferrer">
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
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
      </main>

      <footer className="w-full border-t py-6">
        <AnimatedSection direction="up">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Lê Nguyễn Thành Chung. All rights reserved.
            </p>
          </div>
        </AnimatedSection>
      </footer>
    </div>
  )
}
