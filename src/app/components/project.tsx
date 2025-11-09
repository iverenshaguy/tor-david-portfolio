import ProjectMockup from "app/components/ui/project-mockup";
import React from "react";
import { useRouter } from "next/navigation";
import { saveScrollProgress } from "app/sections/projects";

export function Project({
  project,
  ref,
  className,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    hasMobile?: boolean;
  };
  ref?: ((el: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement>;
  className?: string;
}) {
  const router = useRouter();

  const handleViewDesign = () => {
    // Save scroll progress before navigating
    saveScrollProgress();
    // Navigate to the portfolio page with the project slug
    router.push(`/portfolio/${project.id}`);
  };

  const handleMobileViewDesign = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      window.innerWidth < 768 &&
      !(e.target as HTMLElement).closest("button")
    ) {
      handleViewDesign();
    }
  };

  return (
    <div
      ref={ref}
      key={project.id}
      onClick={handleMobileViewDesign}
      className={`group h-[550px] w-full overflow-hidden md:h-[395px] lg:h-[494px] ${className} cursor-pointer rounded-[40px] bg-white p-4 md:cursor-default dark:bg-[#1A1A1A]`}
    >
      <div className="p-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-10">
          {/* Left side - Device mockups */}
          <div
            className="flex h-[220px] w-full items-center justify-center rounded-[40px] border border-solid border-gray-100 bg-cover bg-center md:h-[364px] md:max-w-[400px] lg:h-[464px] lg:max-w-[unset] lg:min-w-[725.7px]"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
            }}
          >
            <ProjectMockup id={project.id} hasMobile={project.hasMobile} />
          </div>

          {/* Right side - Project info */}
          <div className="flex w-full flex-col gap-4 bg-transparent md:gap-[30px]">
            <div className="flex flex-col gap-2.5 text-[#1A1A1A] dark:text-gray-400">
              <div className="flex flex-col gap-2.5 py-[5px]">
                <h3 className="w-full text-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="w-full text-sm leading-6 md:text-lg md:leading-normal">
                  {project.description}
                </p>
              </div>
            </div>

            <button
              onClick={handleViewDesign}
              className="flex h-auto cursor-pointer items-center justify-between rounded-full bg-[#4a3d7a] p-4 text-white transition-colors hover:bg-[#3d3264]"
            >
              <span className="left-6 hidden text-white md:block dark:text-gray-300">
                View Design
              </span>
              <span className="left-6 text-white md:hidden dark:text-gray-300">
                View Details
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.5 22.75H9.5C4.07 22.75 1.75 20.43 1.75 15V9C1.75 3.57 4.07 1.25 9.5 1.25H15.5C20.93 1.25 23.25 3.57 23.25 9V15C23.25 20.43 20.93 22.75 15.5 22.75ZM9.5 2.75C4.89 2.75 3.25 4.39 3.25 9V15C3.25 19.61 4.89 21.25 9.5 21.25H15.5C20.11 21.25 21.75 19.61 21.75 15V9C21.75 4.39 20.11 2.75 15.5 2.75H9.5Z"
                  fill="white"
                  className="dark:fill-gray-300"
                />
                <path
                  d="M11.2397 16.2802C11.0497 16.2802 10.8597 16.2102 10.7097 16.0602C10.4197 15.7702 10.4197 15.2902 10.7097 15.0002L13.7097 12.0002L10.7097 9.00016C10.4197 8.71016 10.4197 8.23016 10.7097 7.94016C10.9997 7.65016 11.4797 7.65016 11.7697 7.94016L15.2997 11.4702C15.5897 11.7602 15.5897 12.2402 15.2997 12.5302L11.7697 16.0602C11.6197 16.2102 11.4297 16.2802 11.2397 16.2802Z"
                  fill="white"
                  className="dark:fill-gray-300"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
