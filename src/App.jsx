import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tools = [
  { symbol: "Ch", name: "ChatGPT", category: "LLM", description: "General-purpose conversational AI by OpenAI." },
  { symbol: "Cl", name: "Claude", category: "LLM", description: "Anthropic’s constitutional AI for safe and helpful dialog." },
  { symbol: "Go", name: "Gemini", category: "LLM", description: "Google’s multimodal large language model suite." },
  { symbol: "Mi", name: "Midjourney", category: "IMG", description: "AI-powered artistic image generation via Discord." },
  { symbol: "Df", name: "DALL·E", category: "IMG", description: "OpenAI's tool for generating images from text prompts." },
  { symbol: "Sd", name: "Stable Diffusion", category: "IMG", description: "Popular open-source text-to-image generation model." },
  { symbol: "So", name: "Sora", category: "VID", description: "OpenAI's text-to-video model for cinematic video output." },
  { symbol: "Ru", name: "Runway", category: "VID", description: "Creative video generation and editing tool." },
  { symbol: "Pi", name: "Pika Labs", category: "VID", description: "AI video generation with stylized motion and storytelling." },
  { symbol: "Gh", name: "GitHub Copilot", category: "COD", description: "AI-powered coding assistant by GitHub and OpenAI." },
  { symbol: "Re", name: "Replit", category: "COD", description: "Collaborative online IDE with AI code completion." },
  { symbol: "Ta", name: "Tabnine", category: "COD", description: "AI assistant for software developers with code completions." },
  { symbol: "Mu", name: "Mubert", category: "AUD", description: "Royalty-free AI-generated music for content creators." },
  { symbol: "Au", name: "Aiva", category: "AUD", description: "Compose music using artificial intelligence for media and games." },
  { symbol: "Sv", name: "Synthesia", category: "VID", description: "Create AI avatars for explainer and training videos." },
  { symbol: "Vo", name: "Voicemod", category: "AUD", description: "AI voice changer and real-time audio synthesis tool." },
  { symbol: "Ma", name: "MagicSlides", category: "BIZ", description: "AI-generated presentation slide decks from prompts." },
  { symbol: "To", name: "Tome", category: "BIZ", description: "Narrative-first storytelling tool powered by AI." },
  { symbol: "No", name: "Notion AI", category: "BIZ", description: "Boost productivity with writing and planning assistance." },
  { symbol: "Ch", name: "Character.AI", category: "AGT", description: "Chat with custom AI characters and personalities." },
  { symbol: "Ma", name: "Magai", category: "AGT", description: "Multi-agent AI workflows for task automation and analysis." },
  { symbol: "De", name: "Descript", category: "AUD", description: "Edit podcasts and videos like documents." },
  { symbol: "Ka", name: "Krea AI", category: "UX", description: "AI-enhanced UI/UX wireframing and visual design tool." },
  { symbol: "Fi", name: "Figma AI", category: "UX", description: "Integrate AI features into collaborative interface design." },
  { symbol: "Po", name: "Poised", category: "BIZ", description: "Real-time AI speech coaching for professionals." },
  { symbol: "Ph", name: "Phind", category: "LLM", description: "AI search engine and coding assistant for developers." },
  { symbol: "Ha", name: "HeyGen", category: "VID", description: "Create professional avatar videos from text prompts." },
  { symbol: "El", name: "ElevenLabs", category: "AUD", description: "AI voice cloning and ultra-realistic speech synthesis." }
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
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || tool.symbol.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [filter, search]);

  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        Periodic Table of Generative AI Tools
      </h1>

      {/* Legend / Key */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 max-w-3xl mx-auto">
        {Object.entries(categories).map(([key, label]) => (
          <div
            key={key}
            className={`flex items-center gap-2 border-2 rounded-lg px-3 py-1 cursor-default select-none ${categoryColors[key]}`}
          >
            <div className="w-5 h-5 rounded-sm border border-current"></div>
            <span className="font-semibold text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <input
          type="text"
          placeholder="Search tools..."
          className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => setFilter("ALL")}
          className={`px-5 py-2 rounded-lg border transition ${
            filter === "ALL"
              ? "bg-indigo-600 text-white shadow-lg"
              : "bg-white text-indigo-700 hover:bg-indigo-100"
          }`}
        >
          All
        </button>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-5 py-2 rounded-lg border transition ${
              filter === key
                ? `${categoryColors[key]} font-semibold shadow-lg`
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid of Tools */}
      <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-10 gap-4">
        {filteredTools.map((tool, index) => (
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0 0 12px rgba(0,0,0,0.25)" }}
            key={index}
            onClick={() => setSelected(tool)}
            className={`cursor-pointer text-center rounded-2xl p-4 border transition select-none ${categoryColors[tool.category]}`}
          >
            <div className="text-2xl font-extrabold tracking-wide">{tool.symbol}</div>
            <div className="text-xs font-semibold">{tool.category}</div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-3xl font-extrabold mb-3">{selected.name}</h2>
              <p className="text-sm mb-2 text-gray-600">{categories[selected.category]}</p>
              <p className="mb-6 text-gray-800">{selected.description}</p>
              <button
                onClick={() => setSelected(null)}
                className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
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