"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Company Dashboard",
    description: `Master Control is an issues-intelligence system. Upload Excel files, share links with employees and explore live KPIs, maps and charts.`,
    link: "https://github.com/Amit-bott",
    images: [
      "/assets/projects-screenshots/company-dashboard/dashboard.webp",
      "/assets/projects-screenshots/company-dashboard/upload.webp",
      "/assets/projects-screenshots/company-dashboard/map.webp",
      "/assets/projects-screenshots/company-dashboard/analysis.webp",
    ],
  },
  {
    id: 2,
    name: "MotionSites",
    description: `A premium motion design library with Three.js and motion templates. Browse the gallery, copy the prompt and ship.`,
    link: "https://github.com/Amit-bott",
    images: [
      "/assets/projects-screenshots/motionsites/home.webp",
      "/assets/projects-screenshots/motionsites/gallery.webp",
      "/assets/projects-screenshots/motionsites/prompts.webp",
    ],
  },
  {
    id: 3,
    name: "Pear.io",
    description: `A scroll-driven agency website with painted scenes and a blueprint grid, built around a share-of-the-upside model.`,
    link: "https://github.com/Amit-bott",
    images: [
      "/assets/projects-screenshots/pear-io/hero.webp",
      "/assets/projects-screenshots/pear-io/model.webp",
      "/assets/projects-screenshots/pear-io/build.webp",
      "/assets/projects-screenshots/pear-io/apply.webp",
    ],
  },
  {
    id: 4,
    name: "Seijaku",
    description: `A private Kyoto residence shown as one continuous 3D walk, from the entrance garden to the onsen and back garden.`,
    link: "https://github.com/Amit-bott",
    images: [
      "/assets/projects-screenshots/seijaku/entrance.webp",
      "/assets/projects-screenshots/seijaku/tea-room.webp",
      "/assets/projects-screenshots/seijaku/pond-view.webp",
      "/assets/projects-screenshots/seijaku/onsen.webp",
    ],
  },
  {
    id: 5,
    name: "Venom UI",
    description: `Next-gen UI interactions: hover effects, animated tooltips and scroll-driven layouts, installable with the shadcn CLI.`,
    link: "https://github.com/Amit-bott",
    images: [
      "/assets/projects-screenshots/venom-ui/landing.webp",
      "/assets/projects-screenshots/venom-ui/library-map.webp",
      "/assets/projects-screenshots/venom-ui/generate-button.webp",
      "/assets/projects-screenshots/venom-ui/wave-grid.webp",
    ],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
