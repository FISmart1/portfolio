import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { HeroSection } from "@/components/hero-section-6";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { Marquee } from "@/components/magicui/marquee";
import { Particles } from "@/components/magicui/particles";
import { Confetti } from "@/components/magicui/confetti";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Instagram } from 'lucide-react';
import { Highlighter } from "@/components/magicui/highlighter";
import { TestimonialsColumn, Testimonial } from "@/components/testimoni";
import CircularGallery from '@/components/CircularGallery'

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const data: Testimonial[] = [
    {
      name: "M. Dzikri Fauzan, S.Kom",
      role: "Ketua Program Studi SIJA SMK TI BAZMA",
      text: "Bangga banget sama Nur Yusuf Ferdiansyah, siswa SIJA SMK TI BAZMA, yang telah berhasil membuat sistem katalog talent ini. Semoga terus semangat menciptakan karya-karya yang berdampak, baik untuk sekolah maupun lingkungan sekitar. Terima kasih juga kepada Bu Bila yang telah membimbing.",
      image: "/avatars/alice.jpg",
    },
    {
      name: "Ristina Eka Salsabila, S.Kom",
      role: "Designer",
      text: "Creative and innovative solutions.",
      image: "/avatars/bob.jpg",
    },
    {
      name: "Fatimah Azzahra, S.Si",
      role: "Designer",
      text: "Yusuf ngerjain BEST tuh gak main-main. Akhirnya ada tempat keren buat nampilin talent anak-anak SMK TI BAZMA—dan bukan cuma buat pamer, tapi beneran bisa nyambung ke dunia professional. Real project, real impact. Proud of you guys!",
      image: "/avatars/bob.jpg",
    },
  ];
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">

      <ScrollProgress />

      <SmoothCursor />

      <Confetti
        className="absolute inset-0 w-full h-full"
        options={{
          particleCount: 80,
          spread: 70,
          startVelocity: 30,
          colors: ["#facc15", "#ec4899", "#6366f1"], // kuning, pink, indigo
        }}
      />
      <Particles
        className="fixed inset-0 -z-10"
        quantity={150}
        color="#60a5fa" // biru
        staticity={40}
        ease={60}
        size={1}
      />
      <HeroSection />

      <section id="about" className="px-6">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold mb-4">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="rounded-2xl border bg-card/50 p-6 shadow-sm backdrop-blur-sm">
            <p className="prose prose-neutral dark:prose-invert max-w-none text-lg text-black dark:text-white text-center">
              <Highlighter action="highlight" color="#60a5fa">
                As a vocational high school student in Information Technology
              </Highlighter>, I have developed skills in <Highlighter color="#ec4899" action="underline">
                web application
                development, database management, and system integration
              </Highlighter>. Through <Highlighter action="underline" color="#6366f1">school projects</Highlighter> and <Highlighter action="underline" color="#6366f1">independent practice</Highlighter>,
              I am experienced in creating <Highlighter action="underline" color="#60a5fa">efficient and user-friendly digital solutions</Highlighter>. I am committed to continuously
              improving my abilities to make the <Highlighter action="underline" color="#ec4899">best contribution to organizations and teams</Highlighter>.
            </p>




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

          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
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
                  As Head of the BEST Website Developer
                  Team at SMK TI BAZMA, I led the creation of
                  the school’s official website. Working with peers,
                  we turned ideas into a functional platform, while I
                  sharpened both my technical and leadership skills.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-dashed border-l">
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
      <section id="testimonials" className="px-6">
        <div className="p-5 text-center mb-8">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Review
          </h2>
          <p className="text-muted-foreground text-lg">
            The comments and feedback I received reminded me: every project, no matter how small, has the potential to make an impact. This is not the end, but rather the beginning of continued improvement.
          </p>
        </div>
        <div className="h-[400px] overflow-hidden relative flex gap-6 px-6 py-8 mt-8 w-[90%]">
          <TestimonialsColumn testimonials={data} duration={12} />
        </div>
      </section>
      <section className=" w-full py-12" id="gallery">
        <h1 className="text-center text-3xl font-bold sm:text-5xl">Gallery</h1>
        <div style={{ height: '600px', position: 'relative' }}>
          <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </section>

      <section
        id="contact"
        className="relative py-20  to-background"
      >
        <div className="text-center space-y-6 max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold sm:text-5xl">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Want to chat? Just shoot me a{" "}
            <Link
              href={DATA.contact.social.instagram.url}
              className="text-primary hover:underline"
            >
              DM on Instagram
            </Link>{" "}
            and I&apos;ll respond whenever I can.
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
