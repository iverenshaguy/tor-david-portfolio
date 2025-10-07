import { notFound } from "next/navigation";
import { baseUrl } from "app/sitemap";
import React from "react";
import { PortfolioNavbar } from "app/components/portfolio-navbar";
import { projects } from "app/portfolio/projects/data";
import ProjectMockup from "app/components/ui/project-mockup";
import Image from "next/image";
import Section from "app/components/ui/section";
import Content from "app/components/ui/content";
import Heading from "app/components/ui/heading";
import BackToTop from "app/components/back-to-top";
import ReactLenis from "lenis/react";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return null;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
  } = project.metadata;
  const ogImage = `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/portfolio/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Portfolio({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const images = [
    {
      src: "portfolio-image",
      alt: "portfolio-image",
      caption: "portfolio-image",
      backgroundColor: "transparent",
      hasBorder: false,
    },
    ...project.content.images,
  ];

  return (
    <body className="scroll-smooth antialiased">
      <main className="flex min-w-0 flex-auto flex-col">
        <ReactLenis root>
          <Section
            className="bg-stone-100 px-4 py-4 pt-0! sm:px-6 lg:px-8 dark:bg-neutral-800"
            dataSection="hero"
          >
            <PortfolioNavbar />
            <Content className="pt-4 sm:pt-8">
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-100">
                  {project.metadata.title}
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 md:text-xl dark:text-gray-400">
                  {project.metadata.summary}
                </p>
              </div>
            </Content>
          </Section>

          {/* Background Section */}
          <Section dataSection="background">
            <Content className="flex flex-col items-center gap-4 sm:gap-8">
              <Heading>Background</Heading>
              <div className="flex max-w-full items-center gap-8 lg:gap-12 lg:px-20">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {project.content.background.intro}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {project.content.background.role}
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {project.content.background.achievementsIntro}
                  </p>

                  {/* Key Achievements as subsection */}
                  <div className="mt-8">
                    <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Key Achievements
                    </h3>
                    <ol className="space-y-3">
                      {project.content.achievements.map(
                        (achievement, index) => (
                          <li
                            key={index}
                            className="text-lg text-gray-700 dark:text-gray-300"
                          >
                            <strong>{achievement.title}.</strong>{" "}
                            {achievement.description}
                          </li>
                        ),
                      )}
                    </ol>
                  </div>
                </div>
              </div>
            </Content>
          </Section>

          {/* Project Images Gallery */}
          <Section className="bg-stone-100 dark:bg-neutral-800">
            <Content className="flex flex-col gap-4 sm:gap-8">
              {/*<Heading>Project Showcase</Heading>*/}
              <div className="w-full space-y-8">
                {images.map((image, index) => (
                  <div
                    className={`flex w-full items-center justify-center rounded-[40px] border border-solid border-gray-200 bg-white bg-cover bg-center p-10 transition-all duration-300 md:p-[60px] lg:p-[75px] dark:bg-neutral-900 ${image.src === "portfolio-image" ? "aspect-[370/444] md:aspect-[1350/897]" : "aspect-[1350/897]"}`}
                    key={index}
                  >
                    {image.src === "portfolio-image" ? (
                      <ProjectMockup
                        id={project.slug}
                        hasMobile={project.content.hasMobile}
                        className="flex-col gap-10! md:flex-row md:gap-2!"
                        laptopMockupClassName="w-auto h-[calc(100%_*_0.4)] md:h-[calc(100%_*_0.8)] flex-none"
                        mobileMockupClassName="w-auto h-[calc(100%_*_0.4)] md:h-[calc(100%_*_0.8)]"
                      />
                    ) : (
                      <Image
                        alt={`${project.slug} mobile mockup`}
                        src={image.src}
                        className={`box-border aspect-[1200/748] w-full rounded-[10px] object-contain ${image.backgroundColor} ${image.hasBorder ? "border border-solid border-gray-200" : ""}`}
                        sizes="100%"
                        width="1200"
                        height="748"
                      />
                    )}
                  </div>
                ))}
              </div>
            </Content>
          </Section>

          {/* Conclusion Section */}
          <Section className="mb-20">
            <Content className="flex flex-col items-center gap-4 sm:gap-8">
              <Heading>Conclusion</Heading>
              <div className="flex w-full max-w-full flex-col items-center gap-8 space-y-6 lg:gap-12 lg:px-20">
                <p className="mb-0 text-lg text-gray-700 dark:text-gray-300">
                  {project.content.conclusion}
                </p>

                {/* Key Learnings as subsection */}
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                    Key Learnings
                  </h3>
                  <ol className="space-y-3">
                    {project.content.learnings.map((learning, index) => (
                      <li
                        key={index}
                        className="text-lg text-gray-700 dark:text-gray-300"
                      >
                        <strong>{learning.title}.</strong>{" "}
                        {learning.description}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Content>
          </Section>

          {/* Back to Top Button */}
          <BackToTop />
        </ReactLenis>
      </main>
    </body>
  );
}

export const dynamicParams = false;
