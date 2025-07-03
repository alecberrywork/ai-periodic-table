// Interactive Periodic Table of Generative AI Tools
// Built with React + Tailwind CSS

import { useState } from "react";
import { motion } from "framer-motion";

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

export default function PeriodicTable() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">Periodic Table of Generative AI Tools</h1>
      <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
        {tools.map((tool, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            onClick={() => setSelected(tool)}
            className="cursor-pointer text-center bg-white hover:bg-gray-50 shadow rounded-2xl p-2 border"
          >
            <div className="text-lg font-semibold">{tool.symbol}</div>
            <div className="text-xs text-gray-500">{tool.category}</div>
          </motion.div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
            <h2 className="text-2xl font-bold mb-2">{selected.name}</h2>
            <p className="text-sm mb-1 text-gray-500">{categories[selected.category]}</p>
            <p className="mb-4">{selected.description}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}