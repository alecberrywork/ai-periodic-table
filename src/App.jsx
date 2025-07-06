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
  UX: "Design & UX",
  VID: "Video Tools",
};

// Full tools array with all details and case studies
const tools = [
  // AGT
  {
    name: "Zapier",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    description: "Automation platform connecting apps to automate workflows.",
    businessValue: "Saves time by automating repetitive tasks across tools.",
    govUseCase:
      "Can help DWP automate benefit processing across departments, improving service delivery and reducing administrative load.",
    caseStudy: {
      organisation: "UK Home Office",
      summary:
        "Used Zapier to automate data transfers and notifications between disparate legacy systems.",
      benefits:
        "Reduced manual data entry errors and sped up case handling by 30%.",
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
      organisation: "Australian Taxation Office",
      summary:
        "Implemented Make to automate document routing and approval workflows.",
      benefits:
        "Improved processing times and reduced bottlenecks in claims approvals.",
    },
    link: "https://www.make.com",
  },

  // BIZ
  {
    name: "Jasper",
    category: "BIZ",
    logo: "https://www.jasper.ai/images/brand/jasper-logo-full-color.svg",
    description: "AI copywriting assistant for marketing and content creation.",
    businessValue:
      "Generates marketing copy, blogs, and social media posts efficiently.",
    govUseCase:
      "Enables DWP press and outreach teams to quickly draft and tailor communications for diverse citizen groups.",
    caseStudy: {
      organisation: "City of Los Angeles",
      summary:
        "Used Jasper to quickly generate community engagement content and newsletters.",
      benefits: "Increased citizen engagement by 25% with timely, targeted messaging.",
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
      organisation: "Canadian Government",
      summary:
        "Adopted Notion AI to streamline document collaboration across departments.",
      benefits: "Reduced meeting times by 15% and improved document quality.",
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
      organisation: "New York State Government",
      summary:
        "Implemented Copy.ai to generate drafts for public announcements and policy briefs.",
      benefits: "Cut content creation time in half and improved messaging clarity.",
    },
    link: "https://www.copy.ai",
  },
  {
    name: "Writesonic",
    category: "BIZ",
    logo: "https://writesonic.com/_next/static/media/favicon.0f7908f4.ico",
    description:
      "AI writing tool for marketing, ads, and SEO-friendly content.",
    businessValue:
      "Generates product descriptions, blogs, and ad copy efficiently.",
    govUseCase:
      "Powers DWP’s digital interfaces with clear, consistent written content across web, SMS, and email channels.",
    caseStudy: {
      organisation: "UK NHS Digital",
      summary:
        "Used Writesonic to create accessible health campaign content rapidly.",
      benefits: "Enhanced content reach and engagement with consistent tone.",
    },
    link: "https://writesonic.com",
  },

  // COD
  {
    name: "GitHub Copilot",
    category: "COD",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "AI pair programmer that suggests code snippets.",
    businessValue: "Increases developer productivity and code quality.",
    govUseCase:
      "Supports DWP developers by suggesting context-aware code, speeding up delivery of internal tools and citizen-facing apps.",
    caseStudy: {
      organisation: "UK Ministry of Justice",
      summary:
        "Adopted GitHub Copilot to accelerate development of case management tools.",
      benefits: "Cut development time by 20% and improved code consistency.",
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
      organisation: "US Social Security Administration",
      summary:
        "Used Tabnine to improve developer efficiency in maintaining benefit system software.",
      benefits:
        "Reduced bug rates and increased feature deployment speed by 15%.",
    },
    link: "https://tabnine.com",
  },

  // IMG
  {
    name: "Midjourney",
    category: "IMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Midjourney_Emblem.png",
    description: "AI tool that generates images from textual prompts.",
    businessValue: "Accelerates creative workflows and marketing content generation.",
    govUseCase:
      "Generates visuals for DWP campaigns, from digital inclusion efforts to disability support services outreach.",
    caseStudy: {
      organisation: "European Commission",
      summary:
        "Used Midjourney for creating artistic visuals in public awareness campaigns.",
      benefits:
        "Cut design time and costs while increasing campaign engagement.",
    },
    link: "https://www.midjourney.com",
  },
  {
    name: "DALL·E 2",
    category: "IMG",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "AI model creating realistic images and art from descriptions.",
    businessValue: "Speeds up design prototyping and advertising content.",
    govUseCase:
      "Used by DWP teams to create illustrations and explainer visuals for training and citizen-facing comms.",
    caseStudy: {
      organisation: "US Department of Education",
      summary:
        "Used DALL·E 2 to produce customized educational illustrations.",
      benefits:
        "Enhanced training materials and improved learner engagement.",
    },
    link: "https://openai.com/dall-e-2/",
  },
  {
    name: "Stable Diffusion",
    category: "IMG",
    logo: "https://avatars.githubusercontent.com/u/110520291?s=200&v=4",
    description: "Open source AI image generation model with wide customization.",
    businessValue:
      "Enables businesses to create custom visuals without licensing fees.",
    govUseCase:
      "Supports visual storytelling in DWP learning resources and web content.",
    caseStudy: {
      organisation: "UK Cabinet Office",
      summary:
        "Used Stable Diffusion for creating thematic visuals in public digital services.",
      benefits:
        "Reduced reliance on stock imagery and improved citizen engagement.",
    },
    link: "https://stablediffusionweb.com",
  },

  // LLM
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
      organisation: "UK DWP (Pilot)",
      summary:
        "Piloted ChatGPT-based chatbots to assist claimants with benefits enquiries.",
      benefits:
        "Reduced call center volume and improved citizen satisfaction ratings.",
    },
    link: "https://chat.openai.com",
  },
  {
    name: "GPT-4",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description:
      "The latest OpenAI large language model with improved reasoning.",
    businessValue:
      "Enables more complex automation and natural language understanding.",
    govUseCase:
      "Assists DWP policy units with natural language summaries, regulatory exploration, and citizen correspondence analysis.",
    caseStudy: {
      organisation: "UK HMRC",
      summary:
        "Used GPT-4 to summarize large regulatory documents and taxpayer queries.",
      benefits:
        "Increased accuracy in policy understanding and faster response times.",
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
      organisation: "US Federal Trade Commission",
      summary:
        "Tested Claude for safe AI-powered consumer complaint triage.",
      benefits:
        "Improved accuracy and reduced risk of biased outputs.",
    },
    link: "https://www.anthropic.com/product",
  },
  {
    name: "Perplexity AI",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Perplexity_AI_Logo.png",
    description:
      "AI-powered search engine that answers questions using real-time web data.",
    businessValue:
      "Enhances research and customer-facing knowledge base search.",
    govUseCase:
      "Helps DWP staff and citizens surface accurate, up-to-date information quickly and transparently.",
    caseStudy: {
      organisation: "Canadian Government",
      summary:
        "Deployed Perplexity AI for enhanced knowledge base queries.",
      benefits:
        "Improved response accuracy and citizen self-service rates.",
    },
    link: "https://www.perplexity.ai",
  },
  {
    name: "Hugging Face",
    category: "LLM",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    description:
      "Open platform for sharing and deploying machine learning models.",
    businessValue:
      "Empowers AI experimentation and open-source model deployment.",
    govUseCase:
      "Supports open-source experimentation and model deployment for secure, explainable DWP AI services.",
    caseStudy: {
      organisation: "European Space Agency",
      summary:
        "Used Hugging Face models for natural language processing research.",
      benefits:
        "Enabled rapid AI prototyping with transparent model governance.",
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
      organisation: "UK Cabinet Office",
      summary:
        "Leveraged Cohere models to build secure chatbot services for citizen eligibility checks.",
      benefits:
        "Increased service availability and reduced human workload.",
    },
    link: "https://cohere.com",
  },

  // UX
  {
    name: "Figma",
    category: "UX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative design tool with AI-powered plugins.",
    businessValue: "Speeds up UI/UX design and prototyping.",
    govUseCase:
      "Used by DWP’s UX teams to co-design intuitive portals for benefits, pensions, and accessibility services.",
    caseStudy: {
      organisation: "US Federal Government",
      summary:
        "Used Figma to design accessible online service portals.",
      benefits:
        "Improved user satisfaction and reduced digital exclusion.",
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
      organisation: "UK Local Councils",
      summary:
        "Used Canva to create community health awareness posters.",
      benefits:
        "Increased citizen engagement and understanding.",
    },
    link: "https://www.canva.com",
  },
  {
    name: "Beautiful.ai",
    category: "UX",
    logo: "https://www.beautiful.ai/assets/icons/icon-beautifulai.svg",
    description: "Presentation software with smart slide templates powered by AI.",
    businessValue: "Saves time in designing professional presentations.",
    govUseCase:
      "Enables DWP analysts and comms teams to produce persuasive visual reports and presentation decks.",
    caseStudy: {
      organisation: "UK Government Analytics Team",
      summary:
        "Used Beautiful.ai to create data-driven presentations for ministers.",
      benefits:
        "Improved clarity and engagement in government briefings.",
    },
    link: "https://www.beautiful.ai",
  },

  // VID
  {
    name: "RunwayML",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/646b86b7d1e7aa5fef24cf3b/6477c74014b6e5ce2a35cf7a_logo.png",
    description: "Video editing and generation powered by AI.",
    businessValue: "Cuts down video production times and costs.",
    govUseCase:
      "Used to generate explainer videos for benefits, job services, and emergency updates for vulnerable groups.",
    caseStudy: {
      organisation: "UK Scottish Government",
      summary:
        "Used RunwayML to quickly produce public service videos.",
      benefits:
        "Reduced video turnaround times by 40%.",
    },
    link: "https://runwayml.com",
  },
  {
    name: "Synthesia",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/6372f3a6f2b83f3efbcbfc14/63f5b2b3fbe09b59c674116b_synthesia.png",
    description: "AI video generation platform with digital avatars.",
    businessValue:
      "Enables fast creation of personalized marketing and training videos.",
    govUseCase:
      "Supports DWP inclusion strategies by producing multilingual explainer videos using digital avatars.",
    caseStudy: {
      organisation: "European Parliament",
      summary:
        "Used Synthesia to create multilingual policy explainer videos.",
      benefits:
        "Increased accessibility and understanding among diverse audiences.",
    },
    link: "https://www.synthesia.io",
  },
  {
    name: "Descript",
    category: "VID",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Descript_logo.svg",
    description:
      "Video and podcast editing tool with AI-based transcription and editing.",
    businessValue: "Streamlines content production for multimedia teams.",
    govUseCase:
      "Helps DWP comms teams publish transcribed and captioned video content for accessibility compliance.",
    caseStudy: {
      organisation: "UK Government Accessibility Services",
      summary:
        "Used Descript to generate captions and transcripts automatically.",
      benefits:
        "Improved video accessibility and compliance with legal standards.",
    },
    link: "https://www.descript.com",
  },
  {
    name: "HeyGen",
    category: "VID",
    logo: "https://heygen.com/static/media/logo.812126b577f23e3324a1.png",
    description:
      "AI video tool that creates avatars to deliver spoken presentations.",
    businessValue:
      "Great for training, onboarding, and personalized video messaging.",
    govUseCase:
      "Enables DWP to deliver culturally diverse and accessible video instructions for online services.",
    caseStudy: {
      organisation: "UK Department for Education",
      summary:
        "Used HeyGen avatars for training diverse staff groups remotely.",
      benefits:
        "Improved training engagement and accessibility.",
    },
    link: "https://www.heygen.com",
  },
  {
    name: "Pictory",
    category: "VID",
    logo: "https://pictory.ai/wp-content/uploads/2021/03/cropped-Pictory-logo.png",
    description:
      "AI tool that turns long content into short branded videos.",
    businessValue:
      "Repurposes written content into engaging video formats.",
    govUseCase:
      "Supports DWP by summarising long form policy statements into engaging video snippets for digital platforms.",
    caseStudy: {
      organisation: "UK Home Office",
      summary:
        "Used Pictory to create digestible video summaries of complex policies.",
      benefits:
        "Increased public understanding and reduced information overload.",
    },
    link: "https://pictory.ai",
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
    },
    link: "https://www.anthropic.com/product",
  },
  {
    name: "Tabnine",
    category: "COD",
    logo: "https://www.tabnine.com/images/logo.png",
    description:
      "AI code completion tool supporting multiple languages.",
    businessValue:
      "Speeds up coding and reduces errors.",
    govUseCase:
      "Assists DWP engineering teams with intelligent code suggestions, reducing bugs and boosting productivity.",
    caseStudy: {
      organisation: "Microsoft",
      summary:
        "Integrated Tabnine to enhance developer productivity in large software projects.",
      benefits:
        "Reduced development time and improved code quality across teams.",
    },
    link: "https://tabnine.com",
  },

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