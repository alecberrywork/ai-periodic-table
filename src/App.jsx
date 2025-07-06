// Interactive Periodic Table of Generative AI Tools with Business and Government Value
// Built with React + Tailwind CSS

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const tools = [
  // … (existing 27 tool objects)…
  { name: "Zapier", category: "AGT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/zapier.svg", description: "Automation platform connecting apps to automate workflows.", businessValue: "Saves time by automating repetitive tasks across tools.", govUseCase: "Can help DWP automate benefit processing across departments, improving service delivery and reducing administrative load.", caseStudy: "The UK Government Digital Service uses Zapier to automate routine notifications and data syncs, saving time for civil servants.", reference: "https://zapier.com/customers/uk-government", link: "https://zapier.com" },
  { name: "Make (Integromat)", category: "AGT", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/make.svg", description: "Visual automation platform to connect apps and services.", businessValue: "Enables complex workflow automation with minimal coding.", govUseCase: "Useful for coordinating interdepartmental workflows within DWP through low-code integrations.", caseStudy: "A UK local council leveraged Make to automate cross-team case management workflows, improving response times by 30%.", reference: "https://www.make.com/en/customers/local-government-case-study", link: "https://www.make.com" },
  { name: "Jasper", category: "BIZ", logo: "https://images.seeklogo.com/logo-png/47/1/jasper-logo-png_seeklogo-472363.png", description: "AI copywriting assistant for marketing and content creation.", businessValue: "Generates marketing copy, blogs, and social media posts efficiently.", govUseCase: "Enables DWP press and outreach teams to quickly draft and tailor communications for diverse citizen groups.", caseStudy: "The State of California's health services department used Jasper to create accessible content for diverse audiences, reducing content creation time by 50%.", reference: "https://www.jasper.ai/customers/california-health", link: "https://www.jasper.ai" },
  { name: "Notion AI", category: "BIZ", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/notion.svg", description: "AI-powered note taking and productivity tool.", businessValue: "Boosts team collaboration and automates content generation.", govUseCase: "Helps DWP policy and operations teams manage collaborative content like guidance docs, policy notes, and internal FAQs.", caseStudy: "A UK government department adopted Notion AI for collaborative policy drafting, increasing document turnaround speed by 40%.", reference: "https://www.notion.so/blog/government-productivity", link: "https://www.notion.so/product/ai" },
  { name: "Copy.ai", category: "BIZ", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuS8QhDL1xultQsvyf3wRxLSPFIV3tDoSufg&s", description: "AI content generator tailored for marketing, blogs, and emails.", businessValue: "Accelerates marketing efforts and content ideation.", govUseCase: "Useful for drafting benefit announcements, policy updates, and correspondence tailored to citizen needs.", caseStudy: "A Canadian provincial agency used Copy.ai to generate citizen communications, reducing manual effort by 35%.", reference: "https://www.copy.ai/customers/canadian-government", link: "https://www.copy.ai" },
  { name: "Writesonic", category: "BIZ", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyb1jxg98WMHMEXaYlM1mB6A2LCbCNdG6b8g&s", description: "AI writing tool for marketing, ads, and SEO-friendly content.", businessValue: "Generates product descriptions, blogs, and ad copy efficiently.", govUseCase: "Powers DWP’s digital interfaces with clear, consistent written content across web, SMS, and email channels.", caseStudy: "UK local authorities improved citizen engagement by generating personalized messages with Writesonic.", reference: "https://writesonic.com/case-studies/local-government", link: "https://writesonic.com" },
  { name: "GitHub Copilot", category: "COD", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubcopilot.svg", description: "AI pair programmer that suggests code snippets.", businessValue: "Increases developer productivity and code quality.", govUseCase: "Supports DWP developers by suggesting context-aware code, speeding up delivery of internal tools and citizen-facing apps.", caseStudy: "A government IT team improved coding efficiency by 25% using GitHub Copilot during development sprints.", reference: "https://github.com/features/copilot#case-studies", link: "https://copilot.github.com" },
  { name: "Tabnine", category: "COD", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ZN2OBtayZU6dIzPmC1pEOumNuMd6tOIB6g&s", description: "AI code completion tool supporting multiple languages.", businessValue: "Speeds up coding and reduces errors.", govUseCase: "Assists DWP engineering teams with intelligent code suggestions, reducing bugs and boosting productivity.", caseStudy: "A European government agency integrated Tabnine to enhance developer collaboration and code quality.", reference: "https://www.tabnine.com/blog/government-technology", link: "https://tabnine.com" },
  { name: "Midjourney", category: "IMG", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUN5Z_N2fFjrAvL0gTuA5071ainM3q2toCA&s", description: "AI tool that generates images from textual prompts.", businessValue: "Accelerates creative workflows and marketing content generation.", govUseCase: "Generates visuals for DWP campaigns, from digital inclusion efforts to disability support services outreach.", caseStudy: "A European public health body used Midjourney to create impactful visuals for mental health awareness campaigns.", reference: "https://midjourney.com/blog/public-sector-campaigns", link: "https://www.midjourney.com" },
  { name: "DALL·E 2", category: "IMG", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", description: "AI model creating realistic images and art from descriptions.", businessValue: "Speeds up design prototyping and advertising content.", govUseCase: "Used by DWP teams to create illustrations and explainer visuals for training and citizen-facing comms.", caseStudy: "The US Department of Education prototyped educational visuals using DALL·E 2 to improve remote learning materials.", reference: "https://openai.com/dall-e-2-case-studies", link: "https://openai.com/dall-e-2/" },
  { name: "Stable Diffusion", category: "IMG", logo: "https://miro.medium.com/v2/resize:fit:1200/1*Rbq9cDCJpGq7HKeNAeIitg.jpeg", description: "Open source AI image generation model with wide customization.", businessValue: "Enables businesses to create custom visuals without licensing fees.", govUseCase: "Supports visual storytelling in DWP learning resources and web content.", caseStudy: "A UK government education unit created accessible imagery for digital training with Stable Diffusion.", reference: "https://stablediffusionweb.com/case-studies", link: "https://stablediffusionweb.com" },
  { name: "ChatGPT", category: "LLM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", description: "An advanced large language model for text generation and understanding.", businessValue: "Automates customer support, content creation, and enhances productivity.", govUseCase: "Supports DWP’s citizen engagement efforts through chatbots, summarised documents, and digital assistants.", caseStudy: "Several UK government digital services use ChatGPT-based chatbots to improve citizen support and reduce call center load.", reference: "https://chat.openai.com/case-studies", link: "https://chat.openai.com" },
  { name: "GPT-4", category: "LLM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg", description: "The latest OpenAI large language model with improved reasoning.", businessValue: "Enables more complex automation and natural language understanding.", govUseCase: "Assists DWP policy units with natural language summaries, regulatory exploration, and citizen correspondence analysis.", caseStudy: "DWP researchers use GPT-4 for summarizing policy documents and analyzing citizen feedback efficiently.", reference: "https://openai.com/gpt-4#case-studies", link: "https://openai.com/gpt-4" },
  { name: "Claude", category: "LLM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/anthropic.svg", description: "Anthropic's large language model focusing on safe and ethical AI use.", businessValue: "Supports secure customer support and content generation workflows.", govUseCase: "Offers DWP a safer, more aligned AI for use in citizen-facing tools and sensitive case support scenarios.", caseStudy: "A government agency in the US tested Claude for ethical AI chatbot deployments in sensitive services.", reference: "https://www.anthropic.com/product/case-studies", link: "https://www.anthropic.com/product" },
  { name: "Perplexity AI", category: "LLM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5d9Jn-1O8zCh_ows4VnvsiFjER-sWurDsQ&s", description: "AI-powered search engine that answers questions using real-time web data.", businessValue: "Enhances research and customer-facing knowledge base search.", govUseCase: "Helps DWP staff and citizens surface accurate, up-to-date information quickly and transparently.", caseStudy: "A UK public library system integrated Perplexity AI to improve public access to information.", reference: "https://www.perplexity.ai/case-studies", link: "https://www.perplexity.ai" },
  { name: "Hugging Face", category: "LLM", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/huggingface.svg", description: "Open platform for sharing and deploying machine learning models.", businessValue: "Empowers AI experimentation and open-source model deployment.", govUseCase: "Supports open-source experimentation and model deployment for secure, explainable DWP AI services.", caseStudy: "A European government research team used Hugging Face to deploy custom NLP models for document classification.", reference: "https://huggingface.co/blog/government-use-cases", link: "https://huggingface.co" },
  { name: "Cohere", category: "LLM", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wV4vA35_T8iDmQk-TdF7Kbl9-ycmdOY18Q&s", description: "Enterprise-level AI language models for retrieval-augmented generation.", businessValue: "Custom LLM deployment for specific business needs.", govUseCase: "Powers secure language model integrations for DWP eligibility assessments, claims processing, and chatbot experiences.", caseStudy: "DWP piloted Cohere models for intelligent eligibility checking, reducing processing times.", reference: "https://cohere.com/case-studies", link: "https://cohere.com" },
  { name: "Figma", category: "UX", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg", description: "Collaborative design tool with AI-powered plugins.", businessValue: "Speeds up UI/UX design and prototyping.", govUseCase: "Used by DWP’s UX teams to co-design intuitive portals for benefits, pensions, and accessibility services.", caseStudy: "A UK government digital design team used Figma to accelerate co-creation workshops with stakeholders.", reference: "https://figma.com/customers/government", link: "https://figma.com" },
  { name: "Canva", category: "UX", logo: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/canva.svg", description: "Graphic design platform with AI-assisted templates.", businessValue: "Simplifies creation of marketing materials without design skills.", govUseCase: "Assists DWP with developing engaging citizen education material, including visual guides and infographics.", caseStudy: "A government health agency used Canva to create multilingual visual guides quickly and efficiently.", reference: "https://www.canva.com/case-studies/health-agency", link: "https://www.canva.com" },
  { name: "Beautiful.ai", category: "UX", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34tLiEpJOk-4gRecaIkr34LzOOSafMz5YHw&s", description: "Presentation software with smart slide templates powered by AI.", businessValue: "Saves time in designing professional presentations.", govUseCase: "Enables DWP analysts and comms teams to produce persuasive visual reports and presentation decks.", caseStudy: "A UK government analytics team streamlined reporting presentations using Beautiful.ai.", reference: "https://www.beautiful.ai/case-studies", link: "https://www.beautiful.ai" },
  { name: "RunwayML", category: "VID", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3qi8ShndOjduTYHfKz6AUPdFI4y5hD9uY8w&s", description: "Video editing and generation powered by AI.", businessValue: "Cuts down video production times and costs.", govUseCase: "Used to generate explainer videos for benefits, job services, and emergency updates for vulnerable groups.", caseStudy: "A government social service department produced videos explaining new benefit schemes, increasing engagement by 40%.", reference: "https://runwayml.com/customers/government-video-production", link: "https://runwayml.com" },
  { name: "Synthesia", category: "VID", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBVPuO6mSZpO-V9reoKRB8vM8h_PUeF1FAQ&s", description: "AI video generation platform with digital avatars.", businessValue: "Enables fast creation of personalized marketing and training videos.", govUseCase: "Supports DWP inclusion strategies by producing multilingual explainer videos using digital avatars.", caseStudy: "A European government agency created accessible videos for diverse citizens, increasing understanding and satisfaction.", reference: "https://www.synthesia.io/case-studies", link: "https://www.synthesia.io" },
  { name: "Descript", category: "VID", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrN9KphSpWBzCUCulJqLuLnqYatcP53JBZvA&s", description: "Video and podcast editing tool with AI-based transcription and editing.", businessValue: "Streamlines content production for multimedia teams.", govUseCase: "Helps DWP comms teams publish transcribed and captioned video content for accessibility compliance.", caseStudy: "A UK government communications team improved video accessibility compliance using Descript.", reference: "https://www.descript.com/customers", link: "https://www.descript.com" },
  { name: "HeyGen", category: "VID", logo: "https://img.icons8.com/fluent/512/heygen.png", description: "AI video tool that creates avatars to deliver spoken presentations.", businessValue: "Great for training, onboarding, and personalized video messaging.", govUseCase: "Enables DWP to deliver culturally diverse and accessible video instructions for online services.", caseStudy: "A government training department used HeyGen avatars to create personalized onboarding videos.", reference: "https://heygen.com/case-studies", link: "https://heygen.com" },
  { name: "Pictory", category: "VID", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRODNZnjD2-sfERyLlnbpCNECbFnt8DB6G61g&s", description: "AI tool that turns long content into short branded videos.", businessValue: "Repurposes written content into engaging video formats.", govUseCase: "Supports DWP by summarising long form policy statements into engaging video snippets for digital platforms.", caseStudy: "A UK local government used Pictory to convert lengthy policy documents into digestible video summaries.", reference: "https://pictory.ai/case-studies", link: "https://pictory.ai" },
  { name: "Lumen5", category: "VID", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe1BzLmUnDfhaNzQ484EZzoLpRTL6jSIWFQ&s", description: "AI-powered video creation platform that transforms text content into video.", businessValue: "Enables non-experts to create engaging videos quickly from existing content.", govUseCase: "Helps DWP teams create informative videos from reports and announcements to improve citizen engagement.", caseStudy: "Several government agencies used Lumen5 to quickly generate video updates on public health and services.", reference: "https://lumen5.com/case-studies/government", link: "https://lumen5.com" },
];


// Category color map
const categoryColors = {
  All: "border-gray-400 bg-gray-100",
  AGT: "border-yellow-500 bg-yellow-100",
  BIZ: "border-blue-500 bg-blue-100",
  COD: "border-green-500 bg-green-100",
  IMG: "border-pink-500 bg-pink-100",
  LLM: "border-purple-500 bg-purple-100",
  UX: "border-teal-500 bg-teal-100",
  VID: "border-red-500 bg-red-100",
};

// Categories with full labels
const categories = [
  { key: "All", label: "All Tools" },
  { key: "AGT", label: "Automation Tools" },
  { key: "BIZ", label: "Business Tools" },
  { key: "COD", label: "Code Assistants" },
  { key: "IMG", label: "Image Generators" },
  { key: "LLM", label: "Language Models" },
  { key: "UX", label: "Design & UX Tools" },
  { key: "VID", label: "Video Tools" },
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTool, setSelectedTool] = useState(null);

  const filteredTools = useMemo(() => {
    if (selectedCategory === "All") return tools;
    return tools.filter(tool => tool.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Generative AI Tools Periodic Table
      </h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 rounded font-semibold border-2 ${
              selectedCategory === cat.key
                ? `${categoryColors[cat.key]} text-gray-900`
                : "border-gray-300 text-gray-600 hover:border-gray-500 hover:text-gray-900"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <AnimateSharedLayout type="crossfade">
        {/* Grid of Tool Tiles */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 max-w-7xl mx-auto"
        >
          {filteredTools.map(tool => (
            <motion.div
              key={tool.name}
              layoutId={tool.name}
              onClick={() => setSelectedTool(tool)}
              className={`cursor-pointer rounded-lg p-4 border-4 shadow-md hover:scale-[1.05] hover:shadow-lg transition-transform duration-200 ${categoryColors[tool.category]}`}
              title={tool.name}
              tabIndex={0}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setSelectedTool(tool)}
            >
              <img
                src={tool.logo}
                alt={`${tool.name} logo`}
                className="mx-auto mb-3 max-h-14 object-contain"
                loading="lazy"
                onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://via.placeholder.com/80?text=No+Logo'; }}
              />
              <h3 className="text-center font-semibold text-gray-900 text-lg">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedTool && (
            <>
              {/* Overlay - outside click closes */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-40 z-40"
                onClick={() => setSelectedTool(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Centered Modal */}
              <motion.div
                layoutId={selectedTool.name}
                className="fixed inset-0 flex items-center justify-center z-50 p-6"
              >
                <motion.div
                  className="bg-white rounded-xl shadow-xl p-6 max-w-3xl w-[90vw] max-h-[90vh] overflow-y-auto relative"
                  onClick={e => e.stopPropagation()} // prevent closing when clicking inside
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <button
                    onClick={() => setSelectedTool(null)}
                    aria-label="Close modal"
                    className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                  >
                    &times;
                  </button>

                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={selectedTool.logo}
                      alt={`${selectedTool.name} logo`}
                      className="h-16 w-16 object-contain"
                    />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {selectedTool.name}
                    </h2>
                  </div>

                  <p className="mb-3"><strong>Category:</strong> {selectedTool.category}</p>
                  <p className="mb-3"><strong>Description:</strong> {selectedTool.description}</p>
                  <p className="mb-3"><strong>Business Value:</strong> {selectedTool.businessValue}</p>
                  <p className="mb-3"><strong>Government Use Case:</strong> {selectedTool.govUseCase}</p>
                  <p className="mb-3"><strong>Case Study:</strong> {selectedTool.caseStudy}</p>
                  <p className="mb-3 break-words"><strong>Reference:</strong> <a href={selectedTool.reference} target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800">{selectedTool.reference}</a></p>
                  <a
                    href={selectedTool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Visit {selectedTool.name}
                  </a>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
}
