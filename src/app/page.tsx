import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section
  id="hero"
  className="relative flex items-center justify-center py-20 bg-gradient-to-b from-background via-background to-muted/30"
>
  <div className="mx-auto w-full max-w-3xl space-y-8 text-center">
    <div className="flex flex-col items-center gap-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Avatar className="size-32 border-4 border-background shadow-lg ring-4 ring-primary/20">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </BlurFade>
      <BlurFadeText
        delay={BLUR_FADE_DELAY}
        className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary via-pink-500 to-indigo-500 bg-clip-text text-transparent"
        yOffset={8}
        text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
      />
      <BlurFadeText
        className="max-w-[600px] text-lg text-muted-foreground"
        delay={BLUR_FADE_DELAY}
        text={DATA.description}
      />
    </div>
  </div>
</section>

      <section id="about" className="px-6">
  <BlurFade delay={BLUR_FADE_DELAY * 3}>
    <h2 className="text-xl font-bold mb-4">About</h2>
  </BlurFade>
  <BlurFade delay={BLUR_FADE_DELAY * 4}>
    <div className="rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur-sm">
      <Markdown className="prose prose-neutral dark:prose-invert max-w-none text-sm text-muted-foreground">
        {DATA.summary}
      </Markdown>
    </div>
  </BlurFade>
</section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2">
  {DATA.skills.map((skill, id) => (
    <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
      <Badge
        key={skill}
        className="rounded-full px-4 py-1 text-sm transition hover:scale-105 hover:bg-primary/20"
      >
        {skill}
      </Badge>
    </BlurFade>
  ))}
</div>

        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Achievement & Certification
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As the Head of the BEST Website Developer Team at SMK TI BAZMA, 
                  I led the development of the school’s official website. Collaborating 
                  with talented peers, we transformed ideas into a fully functional 
                  platform that represented our school. This experience not only 
                  strengthened my technical skills but also my ability to manage 
                  a team and deliver results under deadlines.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section
  id="contact"
  className="relative py-20 bg-gradient-to-t from-muted/30 via-background to-background"
>
  <div className="text-center space-y-6 max-w-2xl mx-auto px-6">
    <h2 className="text-3xl font-bold sm:text-5xl">
      Get in Touch
    </h2>
    <p className="text-muted-foreground text-lg">
      Want to chat? Just shoot me a{" "}
      <Link
        href={DATA.contact.social.LinkedIn.url}
        className="text-primary hover:underline"
      >
        DM on LinkedIn
      </Link>
      and I'll respond whenever I can.
    </p>
    <div className="flex justify-center gap-4 mt-6">
      {Object.entries(DATA.contact.social).map(([key, social]) => (
        <Link
          key={key}
          href={social.url}
          target="_blank"
          className="rounded-full p-3 bg-primary/10 hover:bg-primary/20 transition"
        >
          <social.icon className="h-6 w-6 text-primary" />
        </Link>
      ))}
    </div>
  </div>
</section>

    </main>
  );
}
