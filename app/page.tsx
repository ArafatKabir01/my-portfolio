import { AuroraBackground } from "@/components/landing/aurora-background";
import { Particles } from "@/components/shared/particles";
import { LandingNav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { Stats } from "@/components/landing/stats";
import { About } from "@/components/landing/about";
import { FeaturedProject } from "@/components/landing/featured-project";
import { SkillsExperience } from "@/components/landing/skills-experience";
import { ActivitySocial } from "@/components/landing/activity-social";
import { ServicesContact } from "@/components/landing/services-contact";
import { LandingFooter } from "@/components/landing/footer";

// Fully static 2026 landing page — no database, all content from lib/landing-data.
export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Particles />
      <LandingNav />
      <main className="lp">
        <Hero />
        <Stats />
        <About />
        <FeaturedProject />
        <SkillsExperience />
        <ActivitySocial />
        <ServicesContact />
      </main>
      <LandingFooter />
    </>
  );
}
