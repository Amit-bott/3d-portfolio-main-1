// // thoda zada ts ho gya idhar
// export enum SkillNames {
//   PYTHON = "python",
//   ML = "ml",
//   HTML = "html",
//   CSS = "css",
//   REACT = "react",
//   VUE = "vue",
//   NEXTJS = "nextjs",
//   TAILWIND = "tailwind",
//   NODEJS = "nodejs",
//   EXPRESS = "express",
//   POSTGRES = "postgres",
//   MONGODB = "mongodb",
//   GIT = "git",
//   GITHUB = "github",
//   PRETTIER = "prettier",
//   NPM = "npm",
//   FIREBASE = "firebase",
//   WORDPRESS = "wordpress",
//   LINUX = "linux",
//   DOCKER = "docker",
//   NGINX = "nginx",
//   AWS = "aws",
//   GCP = "gcp",
//   VIM = "vim",
//   VERCEL = "vercel",
// }
// export type Skill = {
//   id: number;
//   name: string;
//   label: string;
//   shortDescription: string;
//   color: string;
//   icon: string;
// };
// export const SKILLS: Record<SkillNames, Skill> = {
//   [SkillNames.PYTHON]: {
//     id: 1,
//     name: "python",
//     label: "Python",
//     shortDescription: "Python is a high-level, interpreted, general-purpose language designed for simplicity, readability, and quick prototyping 💯🚀",
//     color: "#f0db4f",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//   },
//   [SkillNames.ML]: {
//     id: 2,
//     name: "ml",
//     label: "Machine Learning",
//     shortDescription:
//       "Machine learning (ML) is a subset of artificial intelligence (AI) that empowers computer systems to learn from data and improve performance over time without being explicitly programmed💯🔒",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
//   },
//   [SkillNames.HTML]: {
//     id: 3,
//     name: "html",
//     label: "HTML",
//     shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//   },
//   [SkillNames.CSS]: {
//     id: 4,
//     name: "css",
//     label: "CSS",
//     shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
//     color: "#563d7c",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//   },
//   [SkillNames.REACT]: {
//     id: 5,
//     name: "react",
//     label: "React",
//     shortDescription: `"use using" 
// using use = useUsing("use")`,
//     color: "#61dafb",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   },
//   [SkillNames.VUE]: {
//     id: 6,
//     name: "vue",
//     label: "Vue",
//     shortDescription:
//       "the chill pill for your frontend, it hits different! 🟢😌",
//     color: "#41b883",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
//   },
//   [SkillNames.NEXTJS]: {
//     id: 7,
//     name: "nextjs",
//     label: "Next.js",
//     shortDescription:
//       "the drama queen of front-end frameworks, and we stan! 👑📜",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//   },
//   [SkillNames.TAILWIND]: {
//     id: 8,
//     name: "tailwind",
//     label: "Tailwind",
//     shortDescription: "utility classes hitting different fr fr 🌪️🔥",
//     color: "#38bdf8",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
//   },
//   [SkillNames.NODEJS]: {
//     id: 9,
//     name: "nodejs",
//     label: "Node.js",
//     shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   },
//   [SkillNames.EXPRESS]: {
//     id: 10,
//     name: "express",
//     label: "Express",
//     shortDescription: "middlewares go dummy hard, no cap! 🚂💨",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   },
//   [SkillNames.POSTGRES]: {
//     id: 11,
//     name: "postgres",
//     label: "PostgreSQL",
//     shortDescription: "SQL but make it fashion, purr 💅🐘",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
//   },
//   [SkillNames.MONGODB]: {
//     id: 12,
//     name: "mongodb",
//     label: "MongoDB",
//     shortDescription: "flexin' with that NoSQL drip, respectfully! 💪🍃",
//     color: "#336791",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   },
//   [SkillNames.GIT]: {
//     id: 13,
//     name: "git",
//     label: "Git",
//     shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
//     color: "#f1502f",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//   },
//   [SkillNames.GITHUB]: {
//     id: 14,
//     name: "github",
//     label: "GitHub",
//     shortDescription: "sliding into those pull requests, IYKYK! 🐙",
//     color: "#000000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
//   },
//   [SkillNames.PRETTIER]: {
//     id: 15,
//     name: "prettier",
//     label: "Prettier",
//     shortDescription: "making your code not a whole mess, thank u next 🧹✨",
//     color: "#f7b93a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prettier/prettier-original.svg",
//   },
//   [SkillNames.NPM]: {
//     id: 16,
//     name: "npm",
//     label: "NPM",
//     shortDescription: "package manager said 'I gotchu fam', period! 📦💯",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
//   },
//   [SkillNames.FIREBASE]: {
//     id: 17,
//     name: "firebase",
//     label: "Firebase",
//     shortDescription:
//       "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
//     color: "#ffca28",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
//   },
//   [SkillNames.WORDPRESS]: {
//     id: 18,
//     name: "wordpress",
//     label: "WordPress",
//     shortDescription: "the grandpa of CMS, still rocking that cane 🧓👴",
//     color: "#007acc",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
//   },
//   [SkillNames.LINUX]: {
//     id: 19,
//     name: "linux",
//     label: "Linux",
//     shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
//     color: "#fff",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
//   },
//   [SkillNames.DOCKER]: {
//     id: 20,
//     name: "docker",
//     label: "Docker",
//     shortDescription: "The best containerization! 🐳🔥",
//     color: "#2496ed",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
//   },
//   [SkillNames.NGINX]: {
//     id: 21,
//     name: "nginx",
//     label: "NginX",
//     shortDescription: "reverse proxy go zoom zoom, sheesh! 🚗💨",
//     color: "#008000",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
//   },
//   [SkillNames.AWS]: {
//     id: 22,
//     name: "aws",
//     label: "AWS",
//     shortDescription:
//       "always extra, making everything more complicated, period! 🌐👨‍💻",
//     color: "#ff9900",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
//   },
//   [SkillNames.GCP]: {
//     id: 25,
//     name: "gcp",
//     label: "Google Cloud",
//     shortDescription:
//       "cloud computing but make it Google vibes, living rent free! ☁️🔥",
//     color: "#4285f4",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
//   },
//   [SkillNames.VIM]: {
//     id: 23,
//     name: "vim",
//     label: "Vim",
//     shortDescription: "exit? In this economy? Ight, imma head out! 🚪🏃",
//     color: "#e34c26",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
//   },
//   [SkillNames.VERCEL]: {
//     id: 24,
//     name: "vercel",
//     label: "Vercel",
//     shortDescription:
//       "The triangle compony, helps you deploy and go touch grass! 🚀🌿",
//     color: "#6cc24a",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
//   },
// };

// export type Experience = {
//   id: number;
//   startDate: string;
//   endDate: string;
//   title: string;
//   company: string;
//   description: string[];
//   skills: SkillNames[];
// };

// export const EXPERIENCE: Experience[] = [
//   {
//     id: 1,
//     startDate: "Learning",
//     endDate: "Present",
//     title: "AI / ML / DL Engineer",
//     company: "OmniNexus Sdn Bhd",
//     description: [
//       "I am Amit Chauhan, an aspiring AI / ML / DL Engineer passionate about building intelligent systems.",
//       "I work on Machine Learning and Deep Learning models using real-world datasets.",
//       "My interests include Computer Vision, Natural Language Processing, and data analysis.",
//       "I believe in learning by building projects and continuously improving my skills.",
//     ],
//     skills: [
//       SkillNames.PYTHON,
//       SkillNames.TS,
//       SkillNames.REACT,
//       SkillNames.NODEJS,
//       SkillNames.POSTGRES,
//       SkillNames.MONGODB,
//       SkillNames.DOCKER,
//       SkillNames.GCP,
//     ],
//   },
//   {
//     id: 2,
//     startDate: "Apr 2022",
//     endDate: "Dec 2024",
//     title: "Freelance Full Stack Developer",
//     company: "Self-employed",
//     description: [
//       "Transformed chaotic Excel sheets into polished internal tools for various clients.",
//       "Shipped dashboards and custom CMS platforms tailored to each client's workflow.",
//       "Automated repetitive processes, improving efficiency and reducing human error.",
//       "Focused on clean, maintainable code and interfaces that users actually enjoy.",
//     ],
//     skills: [
//       SkillNames.REACT,
//       SkillNames.VUE,
//       SkillNames.NODEJS,
//       SkillNames.EXPRESS,
//       SkillNames.MONGODB,
//       SkillNames.POSTGRES,
//       SkillNames.TAILWIND,
//       SkillNames.WORDPRESS,
//     ],
//   },
// ];

// export const themeDisclaimers = {
//   light: [
//     "Warning: Light mode emits a gazillion lumens of pure radiance!",
//     "Caution: Light mode ahead! Please don't try this at home.",
//     "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
//     "Brace yourself! Light mode is about to make everything shine brighter than your future.",
//     "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
//   ],
//   dark: [
//     "Light mode? I thought you went insane... but welcome back to the dark side!",
//     "Switching to dark mode... How was life on the bright side?",
//     "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
//     "Welcome back to the shadows. How was life out there in the light?",
//     "Dark mode on! Finally, someone who understands true sophistication.",
//   ],
// };






// /* ================= AI / ML SKILLS ================= */

// export type AiSkillNames =
//   | "PYTHON"
//   | "ML"
//   | "DL"
//   | "TENSORFLOW"
//   | "PYTORCH"
//   | "NLP"
//   | "CV";

// export const AI_SKILLS: Record<
//   AiSkillNames,
//   { label: string; icon: string }
// > = {
//   PYTHON: {
//     label: "Python",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//   },
//   ML: {
//     label: "Machine Learning",
//     icon: "/icons/ml.svg",
//   },
//   DL: {
//     label: "Deep Learning",
//     icon: "/icons/dl.svg",
//   },
//   TENSORFLOW: {
//     label: "TensorFlow",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
//   },
//   PYTORCH: {
//     label: "PyTorch",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
//   },
//   NLP: {
//     label: "NLP",
//     icon: "/icons/nlp.svg",
//   },
//   CV: {
//     label: "Computer Vision",
//     icon: "/icons/cv.svg",
//   },
// };

// /* ================= EXPERIENCE ================= */

// export const EXPERIENCE = [
//   {
//     id: 1,
//     title: "AI / ML / DL Engineer",
//     company: "About Me",
//     startDate: "Learning",
//     endDate: "Present",
//     description: [
//       "I am Amit Chauhan, an aspiring AI / ML / DL Engineer passionate about building intelligent systems.",
//       "I work on Machine Learning and Deep Learning models using real-world datasets.",
//       "My interests include Computer Vision, Natural Language Processing, and data analysis.",
//       "I believe in learning by building projects and continuously improving my skills.",
//     ],
//     skills: [
//       "PYTHON",
//       "ML",
//       "DL",
//       "TENSORFLOW",
//       "PYTORCH",
//       "NLP",
//       "CV",
//     ],
//   },
// ];


// /* ================= THEME DISCLAIMERS ================= */

// export const themeDisclaimers = {
//   light: [
//     "Warning: Light mode emits a gazillion lumens of pure radiance!",
//     "Caution: Light mode ahead! Please don't try this at home.",
//     "Only trained professionals can handle this much brightness.",
//     "Brace yourself! Light mode is brighter than your future.",
//     "Sunglasses recommended 😎",
//   ],
//   dark: [
//     "Welcome back to the dark side 🖤",
//     "Dark mode activated. Your eyes thank you.",
//     "You chose wisdom. Dark mode supremacy.",
//     "Finally, someone with taste.",
//     "Dark mode = developer mode 😌",
//   ],
// };














export enum AiSkillNames {
  PYTHON = "python",
  ML = "ml",
  DL = "dl",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  KERAS = "keras",
  SCIKIT = "scikit-learn",
  NLP = "nlp",
  COMPUTER_VISION = "computer-vision",
  OPENCV = "opencv",
  PANDAS = "pandas",
  NUMPY = "numpy",
  MATPLOTLIB = "matplotlib",
  JUPYTER = "jupyter",
  DOCKER = "docker",
  GIT = "git",
  LINUX = "linux",
  AWS = "aws",
  GCP = "gcp",
  SQL = "sql",
}

export type AiSkill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<AiSkillNames, AiSkill> = {
  [AiSkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "High-level programming language for AI/ML, known for its simplicity and extensive libraries 🔥🐍",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [AiSkillNames.ML]: {
    id: 2,
    name: "ml",
    label: "Machine Learning",
    shortDescription: "Teaching computers to learn patterns from data without explicit programming 🧠📊",
    color: "#007acc",
    icon: "/icons/ml.svg",
  },
  [AiSkillNames.DL]: {
    id: 3,
    name: "dl",
    label: "Deep Learning",
    shortDescription: "Neural networks learning hierarchical representations - the brain-inspired approach to AI 🤖🔬",
    color: "#FF6B6B",
    icon: "/icons/dl.svg",
  },
  [AiSkillNames.TENSORFLOW]: {
    id: 4,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "Google's end-to-end open source platform for machine learning and neural networks 🧮🌐",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [AiSkillNames.PYTORCH]: {
    id: 5,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Facebook's dynamic neural network framework with Pythonic approach - researchers' favorite 🔥🧠",
    color: "#EE4C2C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [AiSkillNames.KERAS]: {
    id: 6,
    name: "keras",
    label: "Keras",
    shortDescription: "High-level neural networks API, running on top of TensorFlow - making DL accessible to all 🎯📈",
    color: "#D00000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  [AiSkillNames.SCIKIT]: {
    id: 7,
    name: "scikit-learn",
    label: "Scikit-learn",
    shortDescription: "Simple and efficient tools for predictive data analysis and classical ML algorithms 🛠️📊",
    color: "#F7931E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [AiSkillNames.NLP]: {
    id: 8,
    name: "nlp",
    label: "Natural Language Processing",
    shortDescription: "Teaching machines to understand, interpret, and generate human language 🗣️🤖",
    color: "#4CAF50",
    icon: "/icons/nlp.svg",
  },
  [AiSkillNames.COMPUTER_VISION]: {
    id: 9,
    name: "computer-vision",
    label: "Computer Vision",
    shortDescription: "Enabling computers to see, identify and process images like human vision 👁️💻",
    color: "#2196F3",
    icon: "/icons/cv.svg",
  },
  [AiSkillNames.OPENCV]: {
    id: 10,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Open source computer vision library with 2500+ optimized algorithms 📸🔍",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [AiSkillNames.PANDAS]: {
    id: 11,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data manipulation and analysis library - your best friend for data wrangling 🐼📈",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [AiSkillNames.NUMPY]: {
    id: 12,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Fundamental package for scientific computing with Python - arrays on steroids 🔢🚀",
    color: "#013243",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [AiSkillNames.MATPLOTLIB]: {
    id: 13,
    name: "matplotlib",
    label: "Matplotlib",
    shortDescription: "Comprehensive library for creating static, animated, and interactive visualizations 📊🎨",
    color: "#11557C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  [AiSkillNames.JUPYTER]: {
    id: 14,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Interactive computing environment for data science and ML experimentation 📓✨",
    color: "#F37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  [AiSkillNames.DOCKER]: {
    id: 15,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization platform for packaging ML models and dependencies consistently 🐳📦",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [AiSkillNames.GIT]: {
    id: 16,
    name: "git",
    label: "Git",
    shortDescription: "Version control system essential for ML experiments and collaboration tracking 🔄📚",
    color: "#F1502F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [AiSkillNames.LINUX]: {
    id: 17,
    name: "linux",
    label: "Linux",
    shortDescription: "Preferred OS for ML development with powerful terminal and package management 🐧⚡",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [AiSkillNames.AWS]: {
    id: 18,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud platform for scalable ML model training and deployment ☁️🏗️",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg",
  },
  [AiSkillNames.GCP]: {
    id: 19,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud services with specialized AI/ML tools like Vertex AI and TPUs ☁️🧠",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  },
  [AiSkillNames.SQL]: {
    id: 20,
    name: "sql",
    label: "SQL",
    shortDescription: "Essential for data extraction and preprocessing from relational databases 🗃️🔍",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
};

export type SkillNames = AiSkillNames;

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Learning",
    endDate: "Present",
    title: "AI / ML / DL Engineer",
    company: "OmniNexus Sdn Bhd",
    description: [
      "Passionate about building intelligent systems and solving complex problems through AI/ML.",
      "Working with real-world datasets to develop machine learning and deep learning models.",
      "Specializing in Computer Vision, Natural Language Processing, and predictive analytics.",
      "Implementing end-to-end ML pipelines from data preprocessing to model deployment.",
      "Experimenting with various neural network architectures and optimization techniques.",
    ],
    skills: [
      AiSkillNames.PYTHON,
      AiSkillNames.ML,
      AiSkillNames.DL,
      AiSkillNames.TENSORFLOW,
      AiSkillNames.PYTORCH,
      AiSkillNames.NLP,
      AiSkillNames.COMPUTER_VISION,
      AiSkillNames.PANDAS,
      AiSkillNames.NUMPY,
    ],
  },
  {
    id: 2,
    startDate: "Apr 2022",
    endDate: "Dec 2024",
    title: "ML Research & Development",
    company: "Independent Projects",
    description: [
      "Developed and deployed multiple machine learning models for classification and regression tasks.",
      "Implemented computer vision solutions for object detection and image classification.",
      "Built NLP pipelines for sentiment analysis, text classification, and language generation.",
      "Optimized model performance through hyperparameter tuning and feature engineering.",
      "Containerized ML models using Docker for consistent deployment across environments.",
    ],
    skills: [
      AiSkillNames.PYTHON,
      AiSkillNames.ML,
      AiSkillNames.SCIKIT,
      AiSkillNames.OPENCV,
      AiSkillNames.DOCKER,
      AiSkillNames.AWS,
      AiSkillNames.GCP,
      AiSkillNames.SQL,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode activates all neurons for maximum ML efficiency!",
    "Caution: Light mode may cause excessive model training accuracy!",
    "Only optimized models can handle this much computational brightness.",
    "Brace yourself! Light mode is about to forward propagate through your retinas!",
    "Switching to light mode... Are your activation functions ready for this?",
  ],
  dark: [
    "Dark mode: Where gradient descent actually converges!",
    "Switching to dark mode... Because overfitting happens in the light.",
    "Dark mode activated! Your loss function just decreased by 50%.",
    "Welcome back to the optimal hyperparameter space.",
    "Dark mode on! Finally, someone who understands regularization.",
  ],
};