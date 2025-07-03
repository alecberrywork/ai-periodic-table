// Interactive Periodic Table of Generative AI Tools
// Built with React + Tailwind CSS

import { useState, useMemo } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const tools = [
  { name: "ChatGPT", category: "LLM", description: "General-purpose conversational AI by OpenAI.", link: "https://chat.openai.com", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Claude", category: "LLM", description: "Anthropic’s constitutional AI for safe and helpful dialog.", link: "https://claude.ai", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Anthropic_Claude_Logo.png" },
  { name: "Gemini", category: "LLM", description: "Google’s multimodal large language model suite.", link: "https://deepmind.google/technologies/gemini", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Google_Gemini_Logo.png" },
  { name: "Phind", category: "LLM", description: "AI search engine and coding assistant for developers.", link: "https://www.phind.com", logo: "https://avatars.githubusercontent.com/u/111411952?s=200&v=4" },
  { name: "Midjourney", category: "IMG", description: "AI-powered artistic image generation via Discord.", link: "https://midjourney.com", logo: "https://midjourney.gitbook.io/_media/logo.png" },
  { name: "DALL·E", category: "IMG", description: "OpenAI's tool for generating images from text prompts.", link: "https://openai.com/dall-e", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/DALL-E_Logo.svg" },
  { name: "Stable Diffusion", category: "IMG", description: "Popular open-source text-to-image generation model.", link: "https://stability.ai", logo: "https://avatars.githubusercontent.com/u/102697082?s=200&v=4" },
  { name: "Sora", category: "VID", description: "OpenAI's text-to-video model for cinematic video output.", link: "https://openai.com/sora", logo: "https://openai.com/content/images/2024/02/sora-logo.png" },
  { name: "Runway", category: "VID", description: "Creative video generation and editing tool.", link: "https://runwayml.com", logo: "https://seeklogo.com/images/R/runway-logo-4FBAF5F0DF-seeklogo.com.png" },
  { name: "Pika Labs", category: "VID", description: "AI video generation with stylized motion and storytelling.", link: "https://pika.art", logo: "https://avatars.githubusercontent.com/u/131074009?s=200&v=4" },
  { name: "HeyGen", category: "VID", description: "Create professional avatar videos from text prompts.", link: "https://www.heygen.com", logo: "https://pbs.twimg.com/profile_images/1632710230303203331/XgxHRQra_400x400.jpg" },
  { name: "Synthesia", category: "VID", description: "Create AI avatars for explainer and training videos.", link: "https://www.synthesia.io", logo: "https://assets-global.website-files.com/628e79fc0933229b19c3a112/629f0c6efaba0f355dc98015_synthesia-logo.png" }
  // Add more tools and logos as needed
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
              <p className="mb-4 text-sm">{selected.description}</p>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-3 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
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