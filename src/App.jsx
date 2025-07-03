// Interactive Periodic Table of Generative AI Tools
// Built with React + Tailwind CSS

import { useState, useMemo } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const tools = [
  { name: "ChatGPT", category: "LLM", description: "General-purpose conversational AI by OpenAI.", link: "https://chat.openai.com" },
  { name: "Claude", category: "LLM", description: "Anthropic’s constitutional AI for safe and helpful dialog.", link: "https://claude.ai" },
  { name: "Gemini", category: "LLM", description: "Google’s multimodal large language model suite.", link: "https://deepmind.google/technologies/gemini" },
  { name: "Phind", category: "LLM", description: "AI search engine and coding assistant for developers.", link: "https://www.phind.com" },
  { name: "Midjourney", category: "IMG", description: "AI-powered artistic image generation via Discord.", link: "https://midjourney.com" },
  { name: "DALL·E", category: "IMG", description: "OpenAI's tool for generating images from text prompts.", link: "https://openai.com/dall-e" },
  { name: "Stable Diffusion", category: "IMG", description: "Popular open-source text-to-image generation model.", link: "https://stability.ai" },
  { name: "Sora", category: "VID", description: "OpenAI's text-to-video model for cinematic video output.", link: "https://openai.com/sora" },
  { name: "Runway", category: "VID", description: "Creative video generation and editing tool.", link: "https://runwayml.com" },
  { name: "Pika Labs", category: "VID", description: "AI video generation with stylized motion and storytelling.", link: "https://pika.art" },
  { name: "HeyGen", category: "VID", description: "Create professional avatar videos from text prompts.", link: "https://www.heygen.com" },
  { name: "Synthesia", category: "VID", description: "Create AI avatars for explainer and training videos.", link: "https://www.synthesia.io" },
  { name: "GitHub Copilot", category: "COD", description: "AI-powered coding assistant by GitHub and OpenAI.", link: "https://github.com/features/copilot" },
  { name: "Replit", category: "COD", description: "Collaborative online IDE with AI code completion.", link: "https://replit.com" },
  { name: "Tabnine", category: "COD", description: "AI assistant for software developers with code completions.", link: "https://www.tabnine.com" },
  { name: "Mubert", category: "AUD", description: "Royalty-free AI-generated music for content creators.", link: "https://mubert.com" },
  { name: "Aiva", category: "AUD", description: "Compose music using artificial intelligence for media and games.", link: "https://www.aiva.ai" },
  { name: "Descript", category: "AUD", description: "Edit podcasts and videos like documents.", link: "https://www.descript.com" },
  { name: "Voicemod", category: "AUD", description: "AI voice changer and real-time audio synthesis tool.", link: "https://www.voicemod.net" },
  { name: "ElevenLabs", category: "AUD", description: "AI voice cloning and ultra-realistic speech synthesis.", link: "https://www.elevenlabs.io" },
  { name: "MagicSlides", category: "BIZ", description: "AI-generated presentation slide decks from prompts.", link: "https://www.magicslides.app" },
  { name: "Tome", category: "BIZ", description: "Narrative-first storytelling tool powered by AI.", link: "https://tome.app" },
  { name: "Notion AI", category: "BIZ", description: "Boost productivity with writing and planning assistance.", link: "https://www.notion.so/product/ai" },
  { name: "Poised", category: "BIZ", description: "Real-time AI speech coaching for professionals.", link: "https://www.poised.com" },
  { name: "Krea AI", category: "UX", description: "AI-enhanced UI/UX wireframing and visual design tool.", link: "https://www.krea.ai" },
  { name: "Figma AI", category: "UX", description: "Integrate AI features into collaborative interface design.", link: "https://www.figma.com" },
  { name: "Character.AI", category: "AGT", description: "Chat with custom AI characters and personalities.", link: "https://character.ai" },
  { name: "Magai", category: "AGT", description: "Multi-agent AI workflows for task automation and analysis.", link: "https://magai.co" }
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
      const matchesSearch =
        tool.name.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="min-h-screen p-6 max-w-7xl mx-auto font-sans bg-gradient-to-br from-indigo-50 via-sky-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white drop-shadow">
        Periodic Table of Generative AI Tools
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-4xl mx-auto">
        <button
          onClick={() => setFilter("ALL")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition duration-200 ${
            filter === "ALL" ? "bg-indigo-600 text-white shadow-lg" : "bg-white text-indigo-700 hover:bg-indigo-100 dark:bg-slate-700 dark:text-white"
          }`}
        >
          <div className="w-4 h-4 rounded-sm border border-indigo-600 bg-indigo-400"></div>
          All
        </button>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-semibold transition duration-200 ${
              filter === key ? `${categoryColors[key]} shadow-lg` : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-white"
            }`}
          >
            <div className={`w-4 h-4 rounded-sm border border-current ${categoryColors[key].split(" ")[0]}`}></div>
            {label}
          </button>
        ))}
      </div>

      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search tools..."
          className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-slate-800 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <AnimateSharedLayout>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredTools.map((tool, index) => (
            <motion.div
              layout
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              key={index}
              onClick={() => setSelected(tool)}
              className={`cursor-pointer text-center rounded-xl p-3 border transition-all duration-150 select-none ${categoryColors[tool.category]} shadow hover:shadow-xl`}
            >
              <div className="text-sm font-semibold tracking-tight break-words">
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
              className="bg-white dark:bg-slate-800 rounded-xl p-8 max-w-md w-full shadow-2xl text-gray-800 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-extrabold mb-3">{selected.name}</h2>
              <p className="text-sm mb-2 text-gray-600 dark:text-slate-300">{categories[selected.category]}</p>
              <p className="mb-6">{selected.description}</p>
              {selected.link && (
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                  Visit Website
                </a>
              )}
              <button
                onClick={() => setSelected(null)}
                className="mt-2 px-6 py-3 bg-gray-300 dark:bg-slate-600 text-gray-900 dark:text-white rounded-xl hover:bg-gray-400 dark:hover:bg-slate-500 transition"
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