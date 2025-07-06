// Interactive Periodic Table of Generative AI Tools with Business and Government Value
// Built with React + Tailwind CSS

import { useState, useMemo } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Briefcase, Landmark } from "lucide-react";

const tools = [
  {
    name: "ChatGPT",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg",
    description: "An advanced large language model for text generation and understanding.",
    businessValue: "Automates customer support, content creation, and enhances productivity.",
    govUseCase: "Can be used for citizen engagement chatbots and document summarization.",
    link: "https://chat.openai.com"
  },
  {
    name: "GPT-4",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/OpenAI_Logo.svg",
    description: "The latest OpenAI large language model with improved reasoning.",
    businessValue: "Enables more complex automation and natural language understanding.",
    govUseCase: "Supports policy analysis, citizen feedback summarization, and complex Q&A.",
    link: "https://openai.com/gpt-4"
  },
  {
    name: "Claude",
    category: "LLM",
    logo: "https://pbs.twimg.com/profile_images/1599758745945406721/huGi0NvW_400x400.jpg",
    description: "Anthropic's large language model focusing on safe and ethical AI use.",
    businessValue: "Supports secure customer support and content generation workflows.",
    govUseCase: "Assists in safely deploying AI in government services with ethical constraints.",
    link: "https://www.anthropic.com/product"
  },
  {
    name: "Midjourney",
    category: "IMG",
    logo: "https://cdn.worldvectorlogo.com/logos/midjourney.svg",
    description: "AI tool that generates images from textual prompts.",
    businessValue: "Accelerates creative workflows and marketing content generation.",
    govUseCase: "Useful for public campaign visuals and data visualization.",
    link: "https://www.midjourney.com"
  },
  {
    name: "DALL·E 2",
    category: "IMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/DALL-E_logo.svg",
    description: "AI model creating realistic images and art from descriptions.",
    businessValue: "Speeds up design prototyping and advertising content.",
    govUseCase: "Generates imagery for public information campaigns and training materials.",
    link: "https://openai.com/dall-e-2/"
  },
  {
    name: "Stable Diffusion",
    category: "IMG",
    logo: "https://stablediffusionweb.com/img/logo.svg",
    description: "Open source AI image generation model with wide customization.",
    businessValue: "Enables businesses to create custom visuals without licensing fees.",
    govUseCase: "Used for educational content and public communications.",
    link: "https://stablediffusionweb.com"
  },
  {
    name: "RunwayML",
    category: "VID",
    logo: "https://runwayml.com/favicon.ico",
    description: "Video editing and generation powered by AI.",
    businessValue: "Cuts down video production times and costs.",
    govUseCase: "Creates educational videos and public safety announcements.",
    link: "https://runwayml.com"
  },
  {
    name: "Synthesia",
    category: "VID",
    logo: "https://www.synthesia.io/favicon.ico",
    description: "AI video generation platform with digital avatars.",
    businessValue: "Enables fast creation of personalized marketing and training videos.",
    govUseCase: "Generates videos for citizen education and multilingual outreach.",
    link: "https://www.synthesia.io"
  },
  {
    name: "GitHub Copilot",
    category: "COD",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "AI pair programmer that suggests code snippets.",
    businessValue: "Increases developer productivity and code quality.",
    govUseCase: "Helps build efficient public sector software faster.",
    link: "https://copilot.github.com"
  },
  {
    name: "Tabnine",
    category: "COD",
    logo: "https://tabnine.com/images/logo.png",
    description: "AI code completion tool supporting multiple languages.",
    businessValue: "Speeds up coding and reduces errors.",
    govUseCase: "Improves developer efficiency in government IT projects.",
    link: "https://tabnine.com"
  },
  {
    name: "Jasper",
    category: "BIZ",
    logo: "https://www.jasper.ai/favicon.ico",
    description: "AI copywriting assistant for marketing and content creation.",
    businessValue: "Generates marketing copy, blogs, and social media posts efficiently.",
    govUseCase: "Supports communication teams in drafting public messages.",
    link: "https://www.jasper.ai"
  },
  {
    name: "Notion AI",
    category: "BIZ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    description: "AI-powered note taking and productivity tool.",
    businessValue: "Boosts team collaboration and automates content generation.",
    govUseCase: "Improves documentation and knowledge sharing across government.",
    link: "https://www.notion.so/product/ai"
  },
  {
    name: "Zapier",
    category: "AGT",
    logo: "https://zapier.com/zapier-logo.svg",
    description: "Automation platform connecting apps to automate workflows.",
    businessValue: "Saves time by automating repetitive tasks across tools.",
    govUseCase: "Integrates government service platforms for smoother citizen experience.",
    link: "https://zapier.com"
  },
  {
    name: "Make (Integromat)",
    category: "AGT",
    logo: "https://make.com/static/images/logo.svg",
    description: "Visual automation platform to connect apps and services.",
    businessValue: "Enables complex workflow automation with minimal coding.",
    govUseCase: "Streamlines multi-department government processes.",
    link: "https://www.make.com"
  },
  {
    name: "Figma",
    category: "UX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative design tool with AI-powered plugins.",
    businessValue: "Speeds up UI/UX design and prototyping.",
    govUseCase: "Designs user-friendly government portals and apps.",
    link: "https://figma.com"
  },
  {
    name: "Canva",
    category: "UX",
    logo: "https://seeklogo.com/images/C/canva-logo-4D1FAD3309-seeklogo.com.png",
    description: "Graphic design platform with AI-assisted templates.",
    businessValue: "Simplifies creation of marketing materials without design skills.",
    govUseCase: "Creates engaging public communications and educational content.",
    link: "https://www.canva.com"
  },
  {
    name: "AIVA",
    category: "AUD",
    logo: "https://aiva.ai/static/aiva_logo.svg",
    description: "AI composer that creates music and soundtracks.",
    businessValue: "Generates custom music for marketing and branding.",
    govUseCase: "Creates audio content for public service announcements and accessibility.",
    link: "https://aiva.ai"
  },
  {
    name: "Lumen5",
    category: "VID",
    logo: "https://lumen5.com/static/images/lumen5-logo.svg",
    description: "Video creation platform powered by AI to turn text into video.",
    businessValue: "Enables quick video marketing content production.",
    govUseCase: "Creates informational videos for citizen awareness campaigns.",
    link: "https://lumen5.com"
  }
];

const categories = {
  LLM: "Large Language Models",
  IMG: "Image Generation",
  VID: "Video Generation",
  COD: "Code Generation",
  AUD: "Audio & Music Generation",
  BIZ: "Business Productivity",
  AGT: "Agents & Automation",
  UX: "Design & UX Tools"
};

const categoryColors = {
  LLM: "bg-purple-300 border-purple-500 text-purple-900",
  IMG: "bg-pink-300 border-pink-500 text-pink-900",
  VID: "bg-yellow-300 border-yellow-500 text-yellow-900",
  COD: "bg-green-300 border-green-500 text-green-900",
  AUD: "bg-blue-300 border-blue-500 text-blue-900",
  BIZ: "bg-indigo-300 border-indigo-500 text-indigo-900",
  AGT: "bg-red-300 border-red-500 text-red-900",
  UX: "bg-teal-300 border-teal-500 text-teal-900"
};

export default function PeriodicTable() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = filter === "ALL" || tool.category === filter;
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen p-4 max-w-7xl mx-auto font-sans bg-gradient-to-br from-indigo-50 via-sky-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-900 dark:text-white drop-shadow">
        Periodic Table of Generative AI Tools
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <button
          onClick={() => setFilter("ALL")}
          className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${filter === "ALL" ? "bg-indigo-600 text-white" : "bg-white text-indigo-700 dark:bg-slate-700 dark:text-white"}`}
        >
          All
        </button>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium ${filter === key ? `${categoryColors[key]} shadow-md` : "bg-white text-gray-800 dark:bg-slate-700 dark:text-white"}`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search tools..."
          className="px-3 py-1.5 text-sm border rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <AnimateSharedLayout>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
        >
          {filteredTools.map((tool, index) => (
            <motion.div
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              key={index}
              onClick={() => setSelected(tool)}
              className={`cursor-pointer text-center rounded-lg p-2 border ${categoryColors[tool.category]} shadow hover:shadow-lg transition`}
            >
              {tool.logo && (
                <img src={tool.logo} alt={tool.name} className="mx-auto mb-1.5 h-8 w-8 object-contain" />
              )}
              <div className="text-xs font-medium leading-snug break-words">
                {tool.name}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimateSharedLayout>

      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 max-w-md w-full shadow-2xl text-gray-800 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
              <p className="text-sm mb-1 text-gray-600 dark:text-slate-300">{categories[selected.category]}</p>
              <p className="mb-3 text-sm">{selected.description}</p>

              {selected.businessValue && (
                <div className="mb-2">
                  <div className="flex items-center text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-1">
                    <Briefcase className="w-4 h-4 mr-2" /> Business Value
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{selected.businessValue}</p>
                </div>
              )}

              {selected.govUseCase && (
                <div className="mt-3">
                  <div className="flex items-center text-sm font-semibold text-green-700 dark:text-green-300 mb-1">
                    <Landmark className="w-4 h-4 mr-2" /> Government Use
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200">{selected.govUseCase}</p>
                </div>
              )}

              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
                >
                  Visit Website
                </a>
              )}

              <button
                onClick={() => setSelected(null)}
                className="mt-2 px-4 py-2 bg-gray-300 dark:bg-slate-600 text-sm text-gray-900 dark:text-white rounded hover:bg-gray-400 dark:hover:bg-slate-500"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}