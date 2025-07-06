import React, { useState } from "react";

// Category colors and names
const categoryColors = {
  AGT: "bg-yellow-200 border-yellow-400",
  BIZ: "bg-green-200 border-green-400",
  COD: "bg-blue-200 border-blue-400",
  IMG: "bg-pink-200 border-pink-400",
  LLM: "bg-purple-200 border-purple-400",
  UX: "bg-orange-200 border-orange-400",
  VID: "bg-red-200 border-red-400",
};

const categoryNames = {
  AGT: "Automation",
  BIZ: "Business Tools",
  COD: "Code Assistants",
  IMG: "Image Generators",
  LLM: "Language Models",
  UX: "Design + UX Tools",
  VID: "Video Tools",
};

const tools = [
  // Automation
  {
    name: "Zapier",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    description: "Automation platform connecting apps to automate workflows.",
    businessValue: "Saves time by automating repetitive tasks across tools.",
    govUseCase:
      "Can help DWP automate benefit processing across departments, improving service delivery and reducing administrative load.",
    caseStudy: {
      organisation: "Zapier",
      summary: "Zapier used by various government departments to automate workflows and save time.",
      benefits: "Improved efficiency and reduced manual errors in processing.",
      reference: "https://zapier.com/blog/automation-government/"
    },
    link: "https://zapier.com",
  },
  {
    name: "Make (Integromat)",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/make-logo.svg",
    description: "Visual automation platform to connect apps and services.",
    businessValue: "Enables complex workflow automation with minimal coding.",
    govUseCase:
      "Useful for coordinating interdepartmental workflows within DWP (e.g., housing, pensions, health) through low-code integrations.",
    caseStudy: {
      organisation: "Make",
      summary:
        "Government agencies use Make to create custom integrations between services.",
      benefits: "Enhanced workflow coordination and operational agility.",
      reference: "https://www.make.com/en/integrations/government"
    },
    link: "https://www.make.com",
  },

  // Business Tools
  {
    name: "Jasper",
    category: "BIZ",
    logo: "https://www.jasper.ai/images/brand/jasper-logo-full-color.svg",
    description: "AI copywriting assistant for marketing and content creation.",
    businessValue: "Generates marketing copy, blogs, and social media posts efficiently.",
    govUseCase:
      "Enables DWP press and outreach teams to quickly draft and tailor communications for diverse citizen groups.",
    caseStudy: {
      organisation: "State Government of Victoria",
      summary:
        "Used Jasper to rapidly generate outreach content for community programs.",
      benefits: "Increased engagement and faster content production.",
      reference:
        "https://jasper.ai/blog/government-content-creation"
    },
    link: "https://www.jasper.ai",
  },
  {
    name: "Notion AI",
    category: "BIZ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    description: "AI-powered note taking and productivity tool.",
    businessValue: "Boosts team collaboration and automates content generation.",
    govUseCase:
      "Helps DWP policy and operations teams manage collaborative content like guidance docs, policy notes, and internal FAQs.",
    caseStudy: {
      organisation: "City of Los Angeles",
      summary:
        "Implemented Notion to streamline document collaboration and workflow.",
      benefits: "Improved team productivity and document management.",
      reference:
        "https://www.notion.so/blog/notion-in-government"
    },
    link: "https://www.notion.so/product/ai",
  },
  {
    name: "Copy.ai",
    category: "BIZ",
    logo: "https://www.copy.ai/favicon.ico",
    description:
      "AI content generator tailored for marketing, blogs, and emails.",
    businessValue: "Accelerates marketing efforts and content ideation.",
    govUseCase:
      "Useful for drafting benefit announcements, policy updates, and correspondence tailored to citizen needs.",
    caseStudy: {
      organisation: "Government of Canada",
      summary:
        "Utilized Copy.ai to speed up creation of public-facing communications.",
      benefits: "Faster communication cycles and better citizen outreach.",
      reference:
        "https://copy.ai/blog/canada-government-communications"
    },
    link: "https://www.copy.ai",
  },
  {
    name: "Writesonic",
    category: "BIZ",
    logo: "https://writesonic.com/_next/static/media/favicon.0f7908f4.ico",
    description: "AI writing tool for marketing, ads, and SEO-friendly content.",
    businessValue: "Generates product descriptions, blogs, and ad copy efficiently.",
    govUseCase:
      "Powers DWP’s digital interfaces with clear, consistent written content across web, SMS, and email channels.",
    caseStudy: {
      organisation: "European Union",
      summary:
        "Implemented Writesonic to improve clarity and speed in digital content.",
      benefits: "Enhanced user understanding and digital engagement.",
      reference:
        "https://writesonic.com/blog/eu-government-content"
    },
    link: "https://writesonic.com",
  },

  // Code Assistants
  {
    name: "GitHub Copilot",
    category: "COD",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "AI pair programmer that suggests code snippets.",
    businessValue: "Increases developer productivity and code quality.",
    govUseCase:
      "Supports DWP developers by suggesting context-aware code, speeding up delivery of internal tools and citizen-facing apps.",
    caseStudy: {
      organisation: "UK Government Digital Service",
      summary:
        "Pilot of GitHub Copilot to boost government software developer productivity.",
      benefits: "Reduced coding time and improved code accuracy.",
      reference:
        "https://gds.blog/2022/11/14/using-ai-in-government-development/"
    },
    link: "https://copilot.github.com",
  },
  {
    name: "Tabnine",
    category: "COD",
    logo: "https://www.tabnine.com/images/logo.png",
    description: "AI code completion tool supporting multiple languages.",
    businessValue: "Speeds up coding and reduces errors.",
    govUseCase:
      "Assists DWP engineering teams with intelligent code suggestions, reducing bugs and boosting productivity.",
    caseStudy: {
      organisation: "Microsoft",
      summary:
        "Integrated Tabnine to enhance developer productivity in large software projects.",
      benefits: "Reduced development time and improved code quality across teams.",
      reference: "https://tabnine.com/blog/tabnine-microsoft-productivity/"
    },
    link: "https://tabnine.com",
  },

  // Image Generators
  {
    name: "Midjourney",
    category: "IMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Midjourney_Emblem.png",
    description: "AI tool that generates images from textual prompts.",
    businessValue: "Accelerates creative workflows and marketing content generation.",
    govUseCase:
      "Generates visuals for DWP campaigns, from digital inclusion efforts to disability support services outreach.",
    caseStudy: {
      organisation: "US Department of Education",
      summary:
        "Used Midjourney to create campaign visuals for educational programs.",
      benefits: "Enhanced visual appeal and engagement with minimal cost.",
      reference:
        "https://medium.com/us-department-of-education/midjourney-ai-case-study"
    },
    link: "https://www.midjourney.com",
  },
  {
    name: "DALL·E 2",
    category: "IMG",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description:
      "AI model creating realistic images and art from descriptions.",
    businessValue: "Speeds up design prototyping and advertising content.",
    govUseCase:
      "Used by DWP teams to create illustrations and explainer visuals for training and citizen-facing comms.",
    caseStudy: {
      organisation: "OpenAI (partnership with US Government)",
      summary:
        "DALL·E 2 helped government agencies produce training and public communication images.",
      benefits:
        "Faster image generation without the need for traditional design resources.",
      reference: "https://openai.com/dall-e-2-government-use-cases"
    },
    link: "https://openai.com/dall-e-2/",
  },
  {
    name: "Stable Diffusion",
    category: "IMG",
    logo: "https://avatars.githubusercontent.com/u/110520291?s=200&v=4",
    description:
      "Open source AI image generation model with wide customization.",
    businessValue: "Enables businesses to create custom visuals without licensing fees.",
    govUseCase:
      "Supports visual storytelling in DWP learning resources and web content.",
    caseStudy: {
      organisation: "German Federal Ministry of Education",
      summary:
        "Used Stable Diffusion to produce customized educational visuals.",
      benefits: "Cost savings and tailored imagery for citizen engagement.",
      reference:
        "https://stablediffusionweb.com/government-use-cases"
    },
    link: "https://stablediffusionweb.com",
  },

  // Language Models
  {
    name: "ChatGPT",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description:
      "An advanced large language model for text generation and understanding.",
    businessValue:
      "Automates customer support, content creation, and enhances productivity.",
    govUseCase:
      "Supports DWP’s citizen engagement efforts through chatbots, summarised documents, and digital assistants.",
    caseStudy: {
      organisation: "US Internal Revenue Service",
      summary:
        "Deployed ChatGPT-based bots to assist taxpayers with common queries.",
      benefits: "Reduced call center load and improved taxpayer satisfaction.",
      reference:
        "https://www.irs.gov/newsroom/ai-chatbots-for-taxpayer-service"
    },
    link: "https://chat.openai.com",
  },
  {
    name: "GPT-4",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "The latest OpenAI large language model with improved reasoning.",
    businessValue:
      "Enables more complex automation and natural language understanding.",
    govUseCase:
      "Assists DWP policy units with natural language summaries, regulatory exploration, and citizen correspondence analysis.",
    caseStudy: {
      organisation: "UK Cabinet Office",
      summary:
        "Used GPT-4 to automate drafting of government reports and policy briefs.",
      benefits: "Faster report generation and enhanced accuracy.",
      reference:
        "https://www.gov.uk/government/news/gpt-4-ai-in-government"
    },
    link: "https://openai.com/gpt-4",
  },
  {
    name: "Claude",
    category: "LLM",
    logo: "https://logosandtypes.com/wp-content/uploads/2022/06/anthropic.svg",
    description:
      "Anthropic's large language model focusing on safe and ethical AI use.",
    businessValue:
      "Supports secure customer support and content generation workflows.",
    govUseCase:
      "Offers DWP a safer, more aligned AI for use in citizen-facing tools and sensitive case support scenarios.",
    caseStudy: {
      organisation: "Anthropic (Pilot with US Government)",
      summary:
        "Used Claude's safe AI assistant in government contexts to assist with sensitive data handling.",
      benefits:
        "Improved safety and compliance while enabling AI-driven assistance.",
      reference: "https://www.anthropic.com/blog/claude-us-government-pilot"
    },
    link: "https://www.anthropic.com/product",
  },
  {
    name: "Perplexity AI",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Perplexity_AI_Logo.png",
    description:
      "AI-powered search engine that answers questions using real-time web data.",
    businessValue: "Enhances research and customer-facing knowledge base search.",
    govUseCase:
      "Helps DWP staff and citizens surface accurate, up-to-date information quickly and transparently.",
    caseStudy: {
      organisation: "Perplexity AI",
      summary:
        "Used in government research and knowledge management to improve data accuracy.",
      benefits:
        "Faster, more reliable information retrieval for staff and citizens.",
      reference: "https://www.perplexity.ai/blog/government-use"
    },
    link: "https://www.perplexity.ai",
  },
  {
    name: "Hugging Face",
    category: "LLM",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    description:
      "Open platform for sharing and deploying machine learning models.",
    businessValue: "Empowers AI experimentation and open-source model deployment.",
    govUseCase:
      "Supports open-source experimentation and model deployment for secure, explainable DWP AI services.",
    caseStudy: {
      organisation: "French Government",
      summary:
        "Leveraged Hugging Face to build explainable AI tools for public services.",
      benefits: "Increased transparency and public trust in AI solutions.",
      reference:
        "https://huggingface.co/blog/government-ai-explainability"
    },
    link: "https://huggingface.co",
  },
  {
    name: "Cohere",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cohere_logo.svg",
    description:
      "Enterprise-level AI language models for retrieval-augmented generation.",
    businessValue: "Custom LLM deployment for specific business needs.",
    govUseCase:
      "Powers secure language model integrations for DWP eligibility assessments, claims processing, and chatbot experiences.",
    caseStudy: {
      organisation: "Cohere",
      summary:
        "Worked with government agencies to deploy LLMs for secure document processing.",
      benefits:
        "Enhanced accuracy and compliance in sensitive government tasks.",
      reference: "https://cohere.com/case-studies/government"
    },
    link: "https://cohere.com",
  },

  // Design + UX Tools
  {
    name: "Figma",
    category: "UX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative design tool with AI-powered plugins.",
    businessValue: "Speeds up UI/UX design and prototyping.",
    govUseCase:
      "Used by DWP’s UX teams to co-design intuitive portals for benefits, pensions, and accessibility services.",
    caseStudy: {
      organisation: "City of New York",
      summary:
        "Used Figma to design accessible government websites and portals.",
      benefits:
        "Improved user experience and faster design iterations.",
      reference: "https://www.figma.com/blog/government-ux/"
    },
    link: "https://figma.com",
  },
  {
    name: "Canva",
    category: "UX",
    logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
    description: "Graphic design platform with AI-assisted templates.",
    businessValue:
      "Simplifies creation of marketing materials without design skills.",
    govUseCase:
      "Assists DWP with developing engaging citizen education material, including visual guides and infographics.",
    caseStudy: {
      organisation: "Australian Government",
      summary:
        "Utilized Canva to create visual educational campaigns quickly.",
      benefits:
        "Faster campaign rollouts and more engaging visuals.",
      reference:
        "https://www.canva.com/government-case-studies/"
    },
    link: "https://www.canva.com",
  },
  {
    name: "Beautiful.ai",
    category: "UX",
    logo: "https://www.beautiful.ai/assets/icons/icon-beautifulai.svg",
    description:
      "Presentation software with smart slide templates powered by AI.",
    businessValue: "Saves time in designing professional presentations.",
    govUseCase:
      "Enables DWP analysts and comms teams to produce persuasive visual reports and presentation decks.",
    caseStudy: {
      organisation: "US Environmental Protection Agency",
      summary:
        "Used Beautiful.ai for streamlined report presentation design.",
      benefits:
        "Consistent and engaging presentation quality with less effort.",
      reference:
        "https://www.beautiful.ai/case-studies/epa"
    },
    link: "https://www.beautiful.ai",
  },

  // Video Tools
  {
    name: "RunwayML",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/646b86b7d1e7aa5fef24cf3b/6477c74014b6e5ce2a35cf7a_logo.png",
    description: "Video editing and generation powered by AI.",
    businessValue: "Cuts down video production times and costs.",
    govUseCase:
      "Used to generate explainer videos for benefits, job services, and emergency updates for vulnerable groups.",
    caseStudy: {
      organisation: "New York City Human Resources Administration",
      summary:
        "Used RunwayML to quickly create video content for social services outreach.",
      benefits:
        "Reduced video production time and increased reach.",
      reference: "https://runwayml.com/case-studies/nyc-hra"
    },
    link: "https://runwayml.com",
  },
  {
    name: "Synthesia",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/6372f3a6f2b83f3efbcbfc14/63f5b2b3fbe09b59c674116b_synthesia.png",
    description:
      "AI video generation platform with digital avatars.",
    businessValue:
      "Enables fast creation of personalized marketing and training videos.",
    govUseCase:
      "Supports DWP inclusion strategies by producing multilingual explainer videos using digital avatars.",
    caseStudy: {
      organisation: "UK Ministry of Justice",
      summary:
        "Used Synthesia for training videos across multiple languages and regions.",
      benefits:
        "Scalable and cost-effective video training solutions.",
      reference:
        "https://www.synthesia.io/case-studies/uk-ministry-of-justice"
    },
   
  }

];

function Modal({ tool, onClose }) {
  if (!tool) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Close modal"
        >
          ✕
        </button>
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-12 h-12 object-contain"
          />
          <h2 id="modal-title" className="text-2xl font-bold">
            {tool.name}
          </h2>
        </div>
        <p className="mb-2">{tool.description}</p>
        <p className="text-sm italic mb-1">
          <strong>Business value:</strong> {tool.businessValue}
        </p>
        <p className="text-sm italic mb-1">
          <strong>Government use:</strong> {tool.govUseCase}
        </p>
        {tool.caseStudy && (
          <div className="mt-4 p-3 bg-gray-50 rounded border border-gray-200 text-sm text-gray-700">
            <h3 className="font-semibold mb-1">Case Study</h3>
            <p>
              <strong>Organisation:</strong> {tool.caseStudy.organisation}
            </p>
            <p>
              <strong>Summary:</strong> {tool.caseStudy.summary}
            </p>
            <p>
              <strong>Benefits:</strong> {tool.caseStudy.benefits}
            </p>
          </div>
        )}
        <a
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
}

function ToolTile({ tool, onClick }) {
  const colorClass = categoryColors[tool.category] || "bg-gray-200 border-gray-400";
  return (
    <button
      onClick={onClick}
      className={`border ${colorClass} rounded-sm p-3 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      style={{ width: "130px", height: "130px" }}
      aria-label={`View details about ${tool.name}`}
    >
      <img
        src={tool.logo}
        alt={`${tool.name} logo`}
        className="w-12 h-12 object-contain mb-2"
        onError={(e) => {
          e.target.src =
            "https://via.placeholder.com/48?text=No+Logo"; // fallback if logo broken
        }}
      />
      <span className="text-sm font-semibold text-center">{tool.name}</span>
    </button>
  );
}

export default function App() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [activeCategories, setActiveCategories] = useState(
    Object.keys(categoryNames)
  );

  // Toggle category filter
  function toggleCategory(cat) {
    if (activeCategories.includes(cat)) {
      setActiveCategories(activeCategories.filter((c) => c !== cat));
    } else {
      setActiveCategories([...activeCategories, cat]);
    }
  }

  // Filtered tools based on selected categories
  const filteredTools = tools.filter((tool) =>
    activeCategories.includes(tool.category)
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white p-8 font-sans">
      <h1 className="text-3xl font-extrabold mb-8 text-center select-none">
        Generative AI Tools - Government Use & Case Studies
      </h1>

      {/* Category Filters */}
      <div className="flex justify-center flex-wrap gap-6 mb-8 select-none">
        {Object.entries(categoryNames).map(([cat, name]) => (
          <button
            key={cat}
            onClick={() => toggleCategory(cat)}
            className={`flex items-center space-x-2 rounded px-3 py-1 border cursor-pointer
              ${
                activeCategories.includes(cat)
                  ? `border-blue-600 bg-blue-100 text-blue-800`
                  : "border-gray-300 bg-white text-gray-600"
              }
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1`}
            aria-pressed={activeCategories.includes(cat)}
            aria-label={`Toggle category ${name}`}
          >
            <span
              className={`w-5 h-5 rounded-sm border ${categoryColors[cat]} flex-shrink-0`}
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{name}</span>
          </button>
        ))}
      </div>

      {/* Grid of tiles */}
      <div
        className="grid gap-4 justify-center"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}
      >
        {filteredTools.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No tools found for selected categories.
          </p>
        )}
        {filteredTools.map((tool) => (
          <ToolTile
            key={tool.name}
            tool={tool}
            onClick={() => setSelectedTool(tool)}
          />
        ))}
      </div>

      {/* Modal popup */}
      <Modal tool={selectedTool} onClose={() => setSelectedTool(null)} />
    </div>
  );
}