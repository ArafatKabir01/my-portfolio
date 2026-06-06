import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CASE_STUDIES } from "@/lib/data";
import { TopBar } from "@/components/case-study/top-bar";
import { SideTOC } from "@/components/case-study/side-toc";
import { BodyClass } from "@/components/case-study/body-class";
import { ScrollProgress } from "@/components/shared/progress-bar";
import {
  Hero,
  Overview,
  Info,
  Goals,
  Challenge,
  Motivate,
  Process,
  Strategy,
  Tech,
  Build,
  Solved,
  Impact,
  UX,
  Features,
  Feedback,
} from "@/components/case-study/sections";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (!data) return { title: "Case study" };
  return {
    title: `${data.title} — ${data.titleSuffix} · Case Study`,
    description: data.overview,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  if (!data) notFound();

  return (
    <>
      <BodyClass value="case-study" />
      <ScrollProgress />
      <TopBar slug={slug} />
      <SideTOC items={data.toc} />
      <main className="page cs-page">
        <Hero data={data} />
        <Overview data={data} />
        <Info data={data} />
        <Goals data={data} />
        <Challenge data={data} />
        <Motivate data={data} />
        <Process data={data} />
        <Strategy data={data} />
        <Tech data={data} />
        <Build data={data} />
        <Solved data={data} />
        <Impact data={data} />
        <UX data={data} />
        <Features data={data} />
        <Feedback data={data} />
      </main>
    </>
  );
}
