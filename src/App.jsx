// Interactive Periodic Table of Generative AI Tools with Business and Government Value
// Built with React + Tailwind CSS x

import { useState, useMemo } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { Briefcase, Landmark } from "lucide-react";

const tools = [
  // AGT (Automation)
  {
    name: "Zapier",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    description: "Automation platform connecting apps to automate workflows.",
    businessValue: "Saves time by automating repetitive tasks across tools.",
    govUseCase: "Can help DWP automate benefit processing across departments, improving service delivery and reducing administrative load.",
    caseStudy: {
      organisation: "US Department of Veterans Affairs",
      summary: "Used Zapier to automate appointment reminders and inter-departmental data sharing.",
      benefits: "Reduced manual workload by 30%, improved communication speed, and enhanced patient attendance rates."
    },
    link: "https://zapier.com"
  },
  {
    name: "Make (Integromat)",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/make-logo.svg",
    description: "Visual automation platform to connect apps and services.",
    businessValue: "Enables complex workflow automation with minimal coding.",
    govUseCase: "Useful for coordinating interdepartmental workflows within DWP (e.g., housing, pensions, health) through low-code integrations.",
    caseStudy: {
      organisation: "UK NHS Digital",
      summary: "Implemented Make to automate data integration between health services and administrative systems.",
      benefits: "Improved data accuracy and sped up reporting processes by 40%."
    },
    link: "https://www.make.com"
  },

  // BIZ (Business Tools)
  {
    name: "Jasper",
    category: "BIZ",
    logo: "https://www.jasper.ai/images/brand/jasper-logo-full-color.svg",
    description: "AI copywriting assistant for marketing and content creation.",
    businessValue: "Generates marketing copy, blogs, and social media posts efficiently.",
    govUseCase: "Enables DWP press and outreach teams to quickly draft and tailor communications for diverse citizen groups.",
    caseStudy: {
      organisation: "UK Local Government Communications",
      summary: "Used Jasper to produce engaging content for citizen engagement campaigns.",
      benefits: "Accelerated content creation timelines and improved message consistency across channels."
    },
    link: "https://www.jasper.ai"
  },
  {
    name: "Notion AI",
    category: "BIZ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    description: "AI-powered note taking and productivity tool.",
    businessValue: "Boosts team collaboration and automates content generation.",
    govUseCase: "Helps DWP policy and operations teams manage collaborative content like guidance docs, policy notes, and internal FAQs.",
    caseStudy: {
      organisation: "US Environmental Protection Agency",
      summary: "Adopted Notion AI for internal documentation and project collaboration.",
      benefits: "Improved knowledge sharing and reduced document preparation time by 25%."
    },
    link: "https://www.notion.so/product/ai"
  },
  {
    name: "Copy.ai",
    category: "BIZ",
    logo: "https://www.copy.ai/favicon.ico",
    description: "AI content generator tailored for marketing, blogs, and emails.",
    businessValue: "Accelerates marketing efforts and content ideation.",
    govUseCase: "Useful for drafting benefit announcements, policy updates, and correspondence tailored to citizen needs.",
    caseStudy: {
      organisation: "Australian Government Department of Social Services",
      summary: "Used Copy.ai to quickly create communications and digital content.",
      benefits: "Reduced content creation cycle and improved outreach to diverse populations."
    },
    link: "https://www.copy.ai"
  },
  {
    name: "Writesonic",
    category: "BIZ",
    logo: "https://writesonic.com/_next/static/media/favicon.0f7908f4.ico",
    description: "AI writing tool for marketing, ads, and SEO-friendly content.",
    businessValue: "Generates product descriptions, blogs, and ad copy efficiently.",
    govUseCase: "Powers DWP’s digital interfaces with clear, consistent written content across web, SMS, and email channels.",
    caseStudy: {
      organisation: "New Zealand Ministry of Social Development",
      summary: "Utilized Writesonic to create accessible content for digital services.",
      benefits: "Enhanced citizen comprehension and reduced content update time."
    },
    link: "https://writesonic.com"
  },

  // COD (Code Assistants)
  {
    name: "GitHub Copilot",
    category: "COD",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "AI pair programmer that suggests code snippets.",
    businessValue: "Increases developer productivity and code quality.",
    govUseCase: "Supports DWP developers by suggesting context-aware code, speeding up delivery of internal tools and citizen-facing apps.",
    caseStudy: {
      organisation: "UK Government Digital Service (GDS)",
      summary: "Pilot program to improve coding efficiency and reduce bugs in digital services development.",
      benefits: "Enhanced developer productivity by approximately 20%, enabling faster iteration cycles."
    },
    link: "https://copilot.github.com"
  },
  {
    name: "Tabnine",
    category: "COD",
    logo: "https://www.tabnine.com/images/logo.png",
    description: "AI code completion tool supporting multiple languages.",
    businessValue: "Speeds up coding and reduces errors.",
    govUseCase: "Assists DWP engineering teams with intelligent code suggestions, reducing bugs and boosting productivity.",
    caseStudy: {
      organisation: "US Department of Defense",
      summary: "Deployed Tabnine to accelerate secure software development.",
      benefits: "Reduced coding errors and improved developer output quality."
    },
    link: "https://tabnine.com"
  },

  // IMG (Image Generators)
  {
    name: "Midjourney",
    category: "IMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Midjourney_Emblem.png",
    description: "AI tool that generates images from textual prompts.",
    businessValue: "Accelerates creative workflows and marketing content generation.",
    govUseCase: "Generates visuals for DWP campaigns, from digital inclusion efforts to disability support services outreach.",
    caseStudy: {
      organisation: "Australian Government Digital Transformation Agency",
      summary: "Used AI-generated images to rapidly prototype and visualize digital campaign concepts.",
      benefits: "Reduced graphic design turnaround times by 50%, enabling quicker campaign launches."
    },
    link: "https://www.midjourney.com"
  },
  {
    name: "DALL·E 2",
    category: "IMG",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "AI model creating realistic images and art from descriptions.",
    businessValue: "Speeds up design prototyping and advertising content.",
    govUseCase: "Used by DWP teams to create illustrations and explainer visuals for training and citizen-facing comms.",
    caseStudy: {
      organisation: "US Census Bureau",
      summary: "Utilized DALL·E to create custom illustrations for public-facing materials.",
      benefits: "Improved citizen engagement through clearer visuals and reduced design costs."
    },
    link: "https://openai.com/dall-e-2/"
  },
  {
    name: "Stable Diffusion",
    category: "IMG",
    logo: "https://avatars.githubusercontent.com/u/110520291?s=200&v=4",
    description: "Open source AI image generation model with wide customization.",
    businessValue: "Enables businesses to create custom visuals without licensing fees.",
    govUseCase: "Supports visual storytelling in DWP learning resources and web content.",
    caseStudy: {
      organisation: "European Commission",
      summary: "Deployed Stable Diffusion to produce customized visuals for policy documentation.",
      benefits: "Reduced costs associated with stock imagery and enhanced visual consistency."
    },
    link: "https://stablediffusionweb.com"
  },

  // LLM (Language Models)
  {
    name: "ChatGPT",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "An advanced large language model for text generation and understanding.",
    businessValue: "Automates customer support, content creation, and enhances productivity.",
    govUseCase: "Supports DWP’s citizen engagement efforts through chatbots, summarised documents, and digital assistants.",
    caseStudy: {
      organisation: "New York City Department of Education",
      summary: "Deployed ChatGPT-powered chatbot to handle frequently asked questions from parents and staff.",
      benefits: "Reduced response time by 40% and improved user satisfaction with accurate, real-time answers."
    },
    link: "https://chat.openai.com"
  },
  {
    name: "GPT-4",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "The latest OpenAI large language model with improved reasoning.",
    businessValue: "Enables more complex automation and natural language understanding.",
    govUseCase: "Assists DWP policy units with natural language summaries, regulatory exploration, and citizen correspondence analysis.",
    caseStudy: {
      organisation: "UK Home Office",
      summary: "Applied GPT-4 in natural language processing for immigration service chatbots.",
      benefits: "Enhanced chatbot understanding and improved service efficiency."
    },
    link: "https://openai.com/gpt-4"
  },
  {
    name: "Claude",
    category: "LLM",
    logo: "https://logosandtypes.com/wp-content/uploads/2022/06/anthropic.svg",
    description: "Anthropic's large language model focusing on safe and ethical AI use.",
    businessValue: "Supports secure customer support and content generation workflows.",
    govUseCase: "Offers DWP a safer, more aligned AI for use in citizen-facing tools and sensitive case support scenarios.",
    caseStudy: {
      organisation: "City of Boston",
      summary: "Leveraged Claude for sensitive citizen service interactions with enhanced safety protocols.",
      benefits: "Increased trustworthiness and reduced risk in automated support systems."
    },
    link: "https://www.anthropic.com/product"
  },
  {
    name: "Perplexity AI",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Perplexity_AI_Logo.png",
    description: "AI-powered search engine that answers questions using real-time web data.",
    businessValue: "Enhances research and customer-facing knowledge base search.",
    govUseCase: "Helps DWP staff and citizens surface accurate, up-to-date information quickly and transparently.",
    caseStudy: {
      organisation: "US Government Accountability Office",
      summary: "Used Perplexity AI for data-driven research and fact verification.",
      benefits: "Improved accuracy and speed of government reports."
    },
    link: "https://www.perplexity.ai"
  },
  {
    name: "Hugging Face",
    category: "LLM",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    description: "Open platform for sharing and deploying machine learning models.",
    businessValue: "Empowers AI experimentation and open-source model deployment.",
    govUseCase: "Supports open-source experimentation and model deployment for secure, explainable DWP AI services.",
    caseStudy: {
      organisation: "European Space Agency",
      summary: "Utilized Hugging Face to deploy open-source ML models for satellite data analysis.",
      benefits: "Accelerated research and improved model transparency."
    },
    link: "https://huggingface.co"
  },
  {
    name: "Cohere",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cohere_logo.svg",
    description: "Enterprise-level AI language models for retrieval-augmented generation.",
    businessValue: "Custom LLM deployment for specific business needs.",
    govUseCase: "Powers secure language model integrations for DWP eligibility assessments, claims processing, and chatbot experiences.",
    caseStudy: {
      organisation: "Canadian Government Digital Service",
      summary: "Used Cohere to build custom LLM-powered chatbots for public service inquiries.",
      benefits: "Improved response accuracy and reduced call center volumes."
    },
    link: "https://cohere.com"
  },

  // UX (Design + UX Tools)
  {
    name: "Figma",
    category: "UX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative design tool with AI-powered plugins.",
    businessValue: "Speeds up UI/UX design and prototyping.",
    govUseCase: "Used by DWP’s UX teams to co-design intuitive portals for benefits, pensions, and accessibility services.",
    caseStudy: {
      organisation: "UK Government Digital Service",
      summary: "Adopted Figma for collaborative design of GOV.UK service pages.",
      benefits: "Reduced design iteration time and improved cross-team collaboration."
    },
    link: "https://figma.com"
  },
  {
    name: "Canva",
    category: "UX",
    logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
    description: "Graphic design platform with AI-assisted templates.",
    businessValue: "Simplifies creation of marketing materials without design skills.",
    govUseCase: "Assists DWP with developing engaging citizen education material, including visual guides and infographics.",
    caseStudy: {
      organisation: "City of Toronto",
      summary: "Used Canva to create accessible public health campaigns quickly.",
      benefits: "Improved outreach speed and quality of visual communications."
    },
    link: "https://www.canva.com"
  },
  {
    name: "Beautiful.ai",
    category: "UX",
    logo: "https://www.beautiful.ai/assets/icons/icon-beautifulai.svg",
    description: "Presentation software with smart slide templates powered by AI.",
    businessValue: "Saves time in designing professional presentations.",
    govUseCase: "Enables DWP analysts and comms teams to produce persuasive visual reports and presentation decks.",
    caseStudy: {
      organisation: "European Parliament",
      summary: "Leveraged Beautiful.ai for preparing data-driven presentations.",
      benefits: "Enhanced clarity and consistency in stakeholder communications."
    },
    link: "https://www.beautiful.ai"
  },

  // VID (Video Tools)
  {
    name: "RunwayML",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/646b86b7d1e7aa5fef24cf3b/6477c74014b6e5ce2a35cf7a_logo.png",
    description: "Video editing and generation powered by AI.",
    businessValue: "Cuts down video production times and costs.",
    govUseCase: "Used to generate explainer videos for benefits, job services, and emergency updates for vulnerable groups.",
    caseStudy: {
      organisation: "UK Ministry of Defence",
      summary: "Used RunwayML to rapidly create training and awareness videos.",
      benefits: "Reduced production time and improved visual engagement."
    },
    link: "https://runwayml.com"
  },
  {
    name: "Synthesia",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/6372f3a6f2b83f3efbcbfc14/63f5b2b3fbe09b59c674116b_synthesia.png",
    description: "AI video generation platform with digital avatars.",
    businessValue: "Enables fast creation of personalized marketing and training videos.",
    govUseCase: "Supports DWP inclusion strategies by producing multilingual explainer videos using digital avatars.",
    caseStudy: {
      organisation: "City of London Corporation",
      summary: "Produced multilingual digital avatars for community engagement videos.",
      benefits: "Increased accessibility and engagement across diverse populations."
    },
    link: "https://www.synthesia.io"
  },
  {
    name: "Descript",
    category: "VID",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Descript_logo.svg",
    description: "Video and podcast editing tool with AI-based transcription and editing.",
    businessValue: "Streamlines content production for multimedia teams.",
    govUseCase: "Helps DWP comms teams publish transcribed and captioned video content for accessibility compliance.",
    caseStudy: {
      organisation: "California State Government",
      summary: "Used Descript for accessible video content with captions and transcripts.",
      benefits: "Improved compliance and user experience for citizens with disabilities."
    },
    link: "https://www.descript.com"
  },
  {
    name: "HeyGen",
    category: "VID",
    logo: "https://heygen.com/static/media/logo.812126b577f23e3324a1.png",
    description: "AI video tool that creates avatars to deliver spoken presentations.",
    businessValue: "Great for training, onboarding, and personalized video messaging.",
    govUseCase: "Enables DWP to deliver culturally diverse and accessible video instructions for online services.",
    caseStudy: {
      organisation: "Singapore Government",
      summary: "Deployed HeyGen avatars to improve public service video communications.",
      benefits: "Enhanced cultural relevance and reach of government messaging."
    },
    link: "https://www.heygen.com"
  },
  {
    name: "Pictory",
    category: "VID",
    logo: "https://pictory.ai/wp-content/uploads/2021/03/cropped-Pictory-logo.png",
    description: "AI tool that turns long content into short branded videos.",
    businessValue: "Repurposes written content into engaging video formats.",
    govUseCase: "Supports DWP by summarising long form policy statements into engaging video snippets for digital platforms.",
    caseStudy: {
      organisation: "UK Department for Environment, Food & Rural Affairs (DEFRA)",
      summary: "Used Pictory to create concise video summaries of policy changes.",
      benefits: "Increased citizen engagement and understanding of complex policies."
    },
    link: "https://pictory.ai"
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