import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiPandas,
  SiPlotly,
  SiStreamlit,
  SiGreensock,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: <SiGreensock />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  streamlit: {
    title: "Streamlit",
    bg: "black",
    fg: "white",
    icon: <SiStreamlit />,
  },
  plotly: {
    title: "Plotly",
    bg: "black",
    fg: "white",
    icon: <SiPlotly />,
  },
  pandas: {
    title: "Pandas",
    bg: "black",
    fg: "white",
    icon: <SiPandas />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "company-dashboard",
    category: "Analytics dashboard",
    title: "Company Dashboard",
    src: "/assets/projects-screenshots/company-dashboard/dashboard.webp",
    screenshots: ["dashboard.webp"],
    live: "https://github.com/Amit-bott",
    github: "https://github.com/Amit-bott",
    skills: {
      frontend: [PROJECT_SKILLS.streamlit, PROJECT_SKILLS.plotly],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.pandas],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Upload an Excel file. Get an executive dashboard.
          </TypographyP>
          <TypographyP className="font-mono ">
            Master Control is an issues-intelligence system for companies. An
            admin uploads Excel sheets, generates share links, assigns them to
            employees, and everyone sees live KPIs and charts built from their
            data.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Secure Login</TypographyH3>
          <p className="font-mono mb-2">
            A master login gates the admin area, so only authorised people can
            manage data and users.
          </p>
          <SlideShow images={[`${BASE_PATH}/company-dashboard/login.webp`]} />
          <TypographyH3 className="my-4 mt-8">Upload &amp; Share</TypographyH3>
          <p className="font-mono mb-2">
            Drop in one or many Excel files, label the dashboard, assign it to
            users and generate a shareable link in one click.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/company-dashboard/upload.webp`,
              `${BASE_PATH}/company-dashboard/links.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">User Management</TypographyH3>
          <p className="font-mono mb-2">
            Create employees with full or restricted access and keep track of
            who can see what.
          </p>
          <SlideShow images={[`${BASE_PATH}/company-dashboard/users.webp`]} />
          <TypographyH3 className="my-4 mt-8">Executive Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Total, closed and open issue counts, progress bars per category and
            a full set of filters for continent, country, milestone and date
            range.
          </p>
          <SlideShow
            images={[`${BASE_PATH}/company-dashboard/dashboard.webp`]}
          />
          <TypographyH3 className="my-4 mt-8">Maps &amp; Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Issues by country on an interactive map, top countries, milestone
            distribution and category breakdowns, all as Plotly charts.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/company-dashboard/map.webp`,
              `${BASE_PATH}/company-dashboard/analysis.webp`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "motionsites",
    category: "Motion library",
    title: "MotionSites",
    src: "/assets/projects-screenshots/motionsites/home.webp",
    screenshots: ["home.webp"],
    live: "https://github.com/Amit-bott",
    github: "https://github.com/Amit-bott",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            MotionSites is a premium motion design library: a gallery of
            Three.js and motion-driven website templates and prompts you can
            copy, tweak and ship.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Landing</TypographyH3>
          <p className="font-mono mb-2">
            A cinematic hero with an animated intro, glowing headline and quick
            stats on prompts and 3D animations.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/motionsites/intro.webp`,
              `${BASE_PATH}/motionsites/home.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Motion Prompt Gallery</TypographyH3>
          <p className="font-mono mb-2">
            Browse hero sections, full pages and landing pages as cards, filter
            by type, then copy the prompt or view the code.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/motionsites/gallery.webp`,
              `${BASE_PATH}/motionsites/prompts.webp`,
              `${BASE_PATH}/motionsites/templates.webp`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "pear-io",
    category: "Agency website",
    title: "Pear.io",
    src: "/assets/projects-screenshots/pear-io/hero.webp",
    screenshots: ["hero.webp"],
    live: "https://github.com/Amit-bott",
    github: "https://github.com/Amit-bott",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Pear.io is a scroll-driven website for a software and SEO
            partnership agency that earns a share of the upside instead of
            charging fees. Renaissance-style art, a blueprint grid and smooth
            storytelling carry the pitch from first scroll to the application.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Story Hero</TypographyH3>
          <p className="font-mono mb-2">
            &quot;Pear makes you appear.&quot; A bold blue opening that sets up
            the model straight away.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/pear-io/hero.webp`,
              `${BASE_PATH}/pear-io/grafting.webp`,
              `${BASE_PATH}/pear-io/orchard.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">The Model</TypographyH3>
          <p className="font-mono mb-2">
            Custom software built to rank, and a pay-on-outcome model explained
            through full-screen painted scenes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/pear-io/model.webp`,
              `${BASE_PATH}/pear-io/split.webp`,
              `${BASE_PATH}/pear-io/build.webp`,
              `${BASE_PATH}/pear-io/fees.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Apply</TypographyH3>
          <p className="font-mono mb-2">
            A constellation-style application form and a closing scene with the
            Pear wordmark.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/pear-io/apply.webp`,
              `${BASE_PATH}/pear-io/outro.webp`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "seijaku",
    category: "3D experience",
    title: "Seijaku",
    src: "/assets/projects-screenshots/seijaku/entrance.webp",
    screenshots: ["entrance.webp"],
    live: "https://github.com/Amit-bott",
    github: "https://github.com/Amit-bott",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.gsap,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Seijaku is a private Kyoto residence presented as one continuous
            walk: through the entrance garden, over the threshold and on to the
            garden at the back, without a single cut.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Enter the House</TypographyH3>
          <p className="font-mono mb-2">
            Scroll to walk in. The camera glides from the entrance garden into
            the tea room, the courtyard and the living room.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/seijaku/entrance.webp`,
              `${BASE_PATH}/seijaku/tea-room.webp`,
              `${BASE_PATH}/seijaku/courtyard.webp`,
              `${BASE_PATH}/seijaku/living-room.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Garden &amp; Bath</TypographyH3>
          <p className="font-mono mb-2">
            Rock garden, pond with a bridge, the sleeping room and a steaming
            onsen, with lighting that shifts from sunset to night.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/seijaku/rock-garden.webp`,
              `${BASE_PATH}/seijaku/pond-view.webp`,
              `${BASE_PATH}/seijaku/sleeping-room.webp`,
              `${BASE_PATH}/seijaku/onsen.webp`,
              `${BASE_PATH}/seijaku/garden-night.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Inspect the Model</TypographyH3>
          <p className="font-mono mb-2">
            Drag to leave the walk and inspect the whole property from above.
          </p>
          <SlideShow images={[`${BASE_PATH}/seijaku/aerial.webp`]} />
        </div>
      );
    },
  },
  {
    id: "venom-ui",
    category: "UI library",
    title: "Venom UI",
    src: "/assets/projects-screenshots/venom-ui/landing.webp",
    screenshots: ["landing.webp"],
    live: "https://github.com/Amit-bott",
    github: "https://github.com/Amit-bott",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Next-Gen UI Interactions
          </TypographyP>
          <TypographyP className="font-mono ">
            Venom UI is a component library of hover effects, animated tooltips
            and scroll-driven layouts for modern marketing websites. Every
            component installs straight into a project with the shadcn CLI.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Landing &amp; Library Map</TypographyH3>
          <p className="font-mono mb-2">
            A clean landing page and a library map that groups the components
            into button, motion and registry paths.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/venom-ui/landing.webp`,
              `${BASE_PATH}/venom-ui/library-map.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Docs with Live Preview</TypographyH3>
          <p className="font-mono mb-2">
            Each component has a preview and code tab, an install command and
            usage docs, from buttons to bento grids.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/venom-ui/generate-button.webp`,
              `${BASE_PATH}/venom-ui/agent-bento-grid.webp`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Backgrounds</TypographyH3>
          <p className="font-mono mb-2">
            Interactive backgrounds such as a 3D wave grid of cubes that ripple
            with the cursor.
          </p>
          <SlideShow images={[`${BASE_PATH}/venom-ui/wave-grid.webp`]} />
        </div>
      );
    },
  },
];
export default projects;
