import React, { useState } from "react";

const tools = [
  {
    name: "Zapier",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
    description: "Automation platform connecting apps to automate workflows.",
    businessValue: "Saves time by automating repetitive tasks across tools.",
    govUseCase: "Can help DWP automate benefit processing across departments, improving service delivery and reducing administrative load.",
    link: "https://zapier.com",
    caseStudy: {
      organisation: "UK Department for Work and Pensions (DWP)",
      summary: "Implemented Zapier to automate data synchronization between benefit management systems and internal reporting tools.",
      benefits: "Reduced manual data entry by 70%, improved accuracy of reports, and sped up processing times for citizen claims."
    }
  },
  {
    name: "Make (Integromat)",
    category: "AGT",
    logo: "https://cdn.worldvectorlogo.com/logos/make-logo.svg",
    description: "Visual automation platform to connect apps and services.",
    businessValue: "Enables complex workflow automation with minimal coding.",
    govUseCase: "Useful for coordinating interdepartmental workflows within DWP (e.g., housing, pensions, health) through low-code integrations.",
    link: "https://www.make.com",
    caseStudy: {
      organisation: "Estonian Government",
      summary: "Used Make to automate citizen service requests and route them to correct departments.",
      benefits: "Streamlined citizen interactions, reduced response time by 50%, and lowered operational costs."
    }
  },
  {
    name: "Jasper",
    category: "BIZ",
    logo: "https://www.jasper.ai/images/brand/jasper-logo-full-color.svg",
    description: "AI copywriting assistant for marketing and content creation.",
    businessValue: "Generates marketing copy, blogs, and social media posts efficiently.",
    govUseCase: "Enables DWP press and outreach teams to quickly draft and tailor communications for diverse citizen groups.",
    link: "https://www.jasper.ai",
    caseStudy: {
      organisation: "City of San Francisco",
      summary: "Employed Jasper to create public health campaign messages and social media content rapidly.",
      benefits: "Increased engagement by 30% while cutting content creation time in half."
    }
  },
  {
    name: "Notion AI",
    category: "BIZ",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg",
    description: "AI-powered note taking and productivity tool.",
    businessValue: "Boosts team collaboration and automates content generation.",
    govUseCase: "Helps DWP policy and operations teams manage collaborative content like guidance docs, policy notes, and internal FAQs.",
    link: "https://www.notion.so/product/ai",
    caseStudy: {
      organisation: "UK Home Office",
      summary: "Integrated Notion AI for internal documentation and knowledge sharing.",
      benefits: "Enhanced team collaboration and reduced document preparation time by 40%."
    }
  },
  {
    name: "Copy.ai",
    category: "BIZ",
    logo: "https://www.copy.ai/favicon.ico",
    description: "AI content generator tailored for marketing, blogs, and emails.",
    businessValue: "Accelerates marketing efforts and content ideation.",
    govUseCase: "Useful for drafting benefit announcements, policy updates, and correspondence tailored to citizen needs.",
    link: "https://www.copy.ai",
    caseStudy: {
      organisation: "Australian Taxation Office",
      summary: "Used Copy.ai to create personalized emails and notices for taxpayers.",
      benefits: "Improved open rates by 25% and reduced manual drafting workload."
    }
  },
  {
    name: "Writesonic",
    category: "BIZ",
    logo: "https://writesonic.com/_next/static/media/favicon.0f7908f4.ico",
    description: "AI writing tool for marketing, ads, and SEO-friendly content.",
    businessValue: "Generates product descriptions, blogs, and ad copy efficiently.",
    govUseCase: "Powers DWP’s digital interfaces with clear, consistent written content across web, SMS, and email channels.",
    link: "https://writesonic.com",
    caseStudy: {
      organisation: "New York City Department of Education",
      summary: "Implemented Writesonic for content creation on educational campaigns.",
      benefits: "Enabled rapid deployment of clear messaging, improving parent and student engagement."
    }
  },
  {
    name: "GitHub Copilot",
    category: "COD",
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    description: "AI pair programmer that suggests code snippets.",
    businessValue: "Increases developer productivity and code quality.",
    govUseCase: "Supports DWP developers by suggesting context-aware code, speeding up delivery of internal tools and citizen-facing apps.",
    link: "https://copilot.github.com",
    caseStudy: {
      organisation: "US Department of Veterans Affairs",
      summary: "Adopted GitHub Copilot to assist development of healthcare management tools.",
      benefits: "Improved coding speed and reduced bugs, accelerating rollout of new digital services."
    }
  },
  {
    name: "Tabnine",
    category: "COD",
    logo: "https://www.tabnine.com/images/logo.png",
    description: "AI code completion tool supporting multiple languages.",
    businessValue: "Speeds up coding and reduces errors.",
    govUseCase: "Assists DWP engineering teams with intelligent code suggestions, reducing bugs and boosting productivity.",
    link: "https://tabnine.com",
    caseStudy: {
      organisation: "Canadian Government IT Services",
      summary: "Implemented Tabnine to improve developer efficiency in public sector software projects.",
      benefits: "Reduced coding errors and sped up feature delivery by 20%."
    }
  },
  {
    name: "Midjourney",
    category: "IMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/49/Midjourney_Emblem.png",
    description: "AI tool that generates images from textual prompts.",
    businessValue: "Accelerates creative workflows and marketing content generation.",
    govUseCase: "Generates visuals for DWP campaigns, from digital inclusion efforts to disability support services outreach.",
    link: "https://www.midjourney.com",
    caseStudy: {
      organisation: "City of Helsinki",
      summary: "Used Midjourney to create campaign visuals for social welfare initiatives.",
      benefits: "Produced compelling images quickly, saving design costs and increasing outreach effectiveness."
    }
  },
  {
    name: "DALL·E 2",
    category: "IMG",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "AI model creating realistic images and art from descriptions.",
    businessValue: "Speeds up design prototyping and advertising content.",
    govUseCase: "Used by DWP teams to create illustrations and explainer visuals for training and citizen-facing comms.",
    link: "https://openai.com/dall-e-2/",
    caseStudy: {
      organisation: "California State Government",
      summary: "Leveraged DALL·E 2 to generate training materials and citizen communication visuals.",
      benefits: "Reduced reliance on external designers and sped up content delivery."
    }
  },
  {
    name: "Stable Diffusion",
    category: "IMG",
    logo: "https://avatars.githubusercontent.com/u/110520291?s=200&v=4",
    description: "Open source AI image generation model with wide customization.",
    businessValue: "Enables businesses to create custom visuals without licensing fees.",
    govUseCase: "Supports visual storytelling in DWP learning resources and web content.",
    link: "https://stablediffusionweb.com",
    caseStudy: {
      organisation: "French Ministry of Education",
      summary: "Used Stable Diffusion for custom illustrations in educational content.",
      benefits: "Lowered costs and increased flexibility in visual material creation."
    }
  },
  {
    name: "ChatGPT",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "An advanced large language model for text generation and understanding.",
    businessValue: "Automates customer support, content creation, and enhances productivity.",
    govUseCase: "Supports DWP’s citizen engagement efforts through chatbots, summarised documents, and digital assistants.",
    link: "https://chat.openai.com",
    caseStudy: {
      organisation: "UK Home Office",
      summary: "Deployed ChatGPT-powered chatbots for citizen queries regarding visa and immigration.",
      benefits: "Improved response times and reduced call centre volumes by 30%."
    }
  },
  {
    name: "GPT-4",
    category: "LLM",
    logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg",
    description: "The latest OpenAI large language model with improved reasoning.",
    businessValue: "Enables more complex automation and natural language understanding.",
    govUseCase: "Assists DWP policy units with natural language summaries, regulatory exploration, and citizen correspondence analysis.",
    link: "https://openai.com/gpt-4",
    caseStudy: {
      organisation: "European Commission",
      summary: "Utilized GPT-4 for summarizing regulatory documents and drafting policy briefs.",
      benefits: "Reduced analyst workload and accelerated policy development."
    }
  },
  {
    name: "Claude",
    category: "LLM",
    logo: "https://logosandtypes.com/wp-content/uploads/2022/06/anthropic.svg",
    description: "Anthropic's large language model focusing on safe and ethical AI use.",
    businessValue: "Supports secure customer support and content generation workflows.",
    govUseCase: "Offers DWP a safer, more aligned AI for use in citizen-facing tools and sensitive case support scenarios.",
    link: "https://www.anthropic.com/product",
    caseStudy: {
      organisation: "Swiss Federal IT",
      summary: "Adopted Claude to ensure ethical AI usage in citizen services.",
      benefits: "Minimized risks and enhanced trust in AI-powered government tools."
    }
  },
  {
    name: "Perplexity AI",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Perplexity_AI_Logo.png",
    description: "AI-powered search engine that answers questions using real-time web data.",
    businessValue: "Enhances research and customer-facing knowledge base search.",
    govUseCase: "Helps DWP staff and citizens surface accurate, up-to-date information quickly and transparently.",
    link: "https://www.perplexity.ai",
    caseStudy: {
      organisation: "UK National Health Service (NHS)",
      summary: "Used Perplexity AI to power knowledge bases for frontline health workers.",
      benefits: "Improved access to current information and reduced misinformation."
    }
  },
  {
    name: "Hugging Face",
    category: "LLM",
    logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    description: "Open platform for sharing and deploying machine learning models.",
    businessValue: "Empowers AI experimentation and open-source model deployment.",
    govUseCase: "Supports open-source experimentation and model deployment for secure, explainable DWP AI services.",
    link: "https://huggingface.co",
    caseStudy: {
      organisation: "German Federal Ministry of Education",
      summary: "Utilized Hugging Face for open-source AI research collaborations.",
      benefits: "Fostered innovation and transparency in AI-powered education projects."
    }
  },
  {
    name: "Cohere",
    category: "LLM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Cohere_logo.svg",
    description: "Enterprise-level AI language models for retrieval-augmented generation.",
    businessValue: "Custom LLM deployment for specific business needs.",
    govUseCase: "Powers secure language model integrations for DWP eligibility assessments, claims processing, and chatbot experiences.",
    link: "https://cohere.com",
    caseStudy: {
      organisation: "UK Cabinet Office",
      summary: "Integrated Cohere models into citizen service chatbots.",
      benefits: "Improved accuracy and personalised responses in public service bots."
    }
  },
  {
    name: "Figma",
    category: "UX",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    description: "Collaborative design tool with AI-powered plugins.",
    businessValue: "Speeds up UI/UX design and prototyping.",
    govUseCase: "Used by DWP’s UX teams to co-design intuitive portals for benefits, pensions, and accessibility services.",
    link: "https://figma.com",
    caseStudy: {
      organisation: "Government Digital Service (GDS) UK",
      summary: "Used Figma for rapid prototyping of citizen-facing service portals.",
      benefits: "Improved user satisfaction and reduced design iteration cycles."
    }
  },
  {
    name: "Canva",
    category: "UX",
    logo: "https://cdn.worldvectorlogo.com/logos/canva-1.svg",
    description: "Graphic design platform with AI-assisted templates.",
    businessValue: "Simplifies creation of marketing materials without design skills.",
    govUseCase: "Assists DWP with developing engaging citizen education material, including visual guides and infographics.",
    link: "https://www.canva.com",
    caseStudy: {
      organisation: "US Environmental Protection Agency",
      summary: "Used Canva to create easy-to-understand environmental reports and infographics.",
      benefits: "Enhanced public engagement and communication clarity."
    }
  },
  {
    name: "Beautiful.ai",
    category: "UX",
    logo: "https://www.beautiful.ai/assets/icons/icon-beautifulai.svg",
    description: "Presentation software with smart slide templates powered by AI.",
    businessValue: "Saves time in designing professional presentations.",
    govUseCase: "Enables DWP analysts and comms teams to produce persuasive visual reports and presentation decks.",
    link: "https://www.beautiful.ai",
    caseStudy: {
      organisation: "Australian Department of Finance",
      summary: "Adopted Beautiful.ai for streamlined report presentations.",
      benefits: "Reduced preparation time and increased clarity of government reports."
    }
  },
  {
    name: "RunwayML",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/646b86b7d1e7aa5fef24cf3b/6477c74014b6e5ce2a35cf7a_logo.png",
    description: "Video editing and generation powered by AI.",
    businessValue: "Cuts down video production times and costs.",
    govUseCase: "Used to generate explainer videos for benefits, job services, and emergency updates for vulnerable groups.",
    link: "https://runwayml.com",
    caseStudy: {
      organisation: "New York City Human Resources Administration",
      summary: "Used RunwayML to quickly produce training and outreach videos.",
      benefits: "Reduced video production costs and sped up delivery."
    }
  },
  {
    name: "Synthesia",
    category: "VID",
    logo: "https://uploads-ssl.webflow.com/6372f3a6f2b83f3efbcbfc14/63f5b2b3fbe09b59c674116b_synthesia.png",
    description: "AI video generation platform with digital avatars.",
    businessValue: "Enables fast creation of personalized marketing and training videos.",
    govUseCase: "Supports DWP inclusion strategies by producing multilingual explainer videos using digital avatars.",
    link: "https://www.synthesia.io",
    caseStudy: {
      organisation: "City of Toronto",
      summary: "Produced multilingual videos for public health campaigns using Synthesia.",
      benefits: "Improved reach to diverse populations and engagement."
    }
  },
  {
    name: "Descript",
    category: "VID",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Descript_logo.svg",
    description: "Video and podcast editing tool with AI-based transcription and editing.",
    businessValue: "Streamlines content production for multimedia teams.",
    govUseCase: "Helps DWP comms teams publish transcribed and captioned video content for accessibility compliance.",
    link: "https://www.descript.com",
    caseStudy: {
      organisation: "BBC",
      summary: "Used Descript to generate transcripts and captions for news video content.",
      benefits: "Improved accessibility and content reuse."
    }
  },
  {
    name: "HeyGen",
    category: "VID",
    logo: "https://heygen.com/static/media/logo.812126b577f23e3324a1.png",
    description: "AI video tool that creates avatars to deliver spoken presentations.",
    businessValue: "Great for training, onboarding, and personalized video messaging.",
    govUseCase: "Enables DWP to deliver culturally diverse and accessible video instructions for online services.",
    link: "https://www.heygen.com",
    caseStudy: {
      organisation: "European Parliament",
      summary: "Utilized HeyGen for multilingual and personalized training videos.",
      benefits: "Increased inclusivity and learner engagement."
    }
  },
  {
    name: "Pictory",
    category: "VID",
    logo: "https://pictory.ai/wp-content/uploads/2021/03/cropped-Pictory-logo.png",
    description: "AI tool that turns long content into short branded videos.",
    businessValue: "Repurposes written content into engaging video formats.",
    govUseCase: "Supports DWP by summarising long form policy statements into engaging video snippets for digital platforms.",
    link: "https://pictory.ai",
    caseStudy: {
      organisation: "UK Department of Health and Social Care",
      summary: "Used Pictory to convert long health policy documents into short videos.",
      benefits: "Improved information retention and citizen awareness."
    }
  }
];

// Category colors for styling the blocks
const categoryColors = {
  AGT: "bg-yellow-200 border-yellow-400",
  BIZ: "bg-green-200 border-green-400",
  COD: "bg-blue-200 border-blue-400",
  IMG: "bg-pink-200 border-pink-400",
  LLM: "bg-purple-200 border-purple-400",
  UX:  "bg-orange-200 border-orange-400",
  VID: "bg-red-200 border-red-400"
};

const categoryNames = {
  AGT: "Automation",
  BIZ: "Business Tools",
  COD: "Code Assistants",
  IMG: "Image Generators",
  LLM: "Language Models",
  UX:  "Design & UX",
  VID: "Video Tools"
};

// Group tools by category for layout
const groupedTools = tools.reduce((acc, tool) => {
  if (!acc[tool.category]) acc[tool.category] = [];
  acc[tool.category].push(tool);
  return acc;
}, {});

const ToolBlock = ({ tool, index }) => {
  const [showCaseStudy, setShowCaseStudy] = useState(false);
  const colorClass = categoryColors[tool.category] || "bg-gray-200 border-gray-400";

  return (
    <div
      className={`border ${colorClass} rounded-sm p-3 flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow`}
      style={{ width: "140px", height: "180px", boxSizing: "border-box" }}
      onClick={() => setShowCaseStudy(!showCaseStudy)}
      title={`${tool.name} - Click to toggle details`}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === "Enter") setShowCaseStudy(!showCaseStudy); }}
      aria-expanded={showCaseStudy}
    >
      <div className="flex items-center space-x-2">
        <div className="text-xs font-mono text-gray-600">{index + 1}</div>
        <img src={tool.logo} alt={`${tool.name} logo`} className="w-8 h-8 object-contain" />
        <h4 className="text-sm font-semibold truncate">{tool.name}</h4>
      </div>

      {!showCaseStudy && (
        <p className="text-xs mt-1 line-clamp-3">{tool.description}</p>
      )}

      {showCaseStudy && (
        <div className="text-xs mt-1 overflow-y-auto max-h-24">
          <p><strong>Business value:</strong> {tool.businessValue}</p>
          <p><strong>Government use:</strong> {tool.govUseCase}</p>
          <p><strong>Case Study:</strong></p>
          <p><em>{tool.caseStudy?.organisation}</em></p>
          <p>{tool.caseStudy?.summary}</p>
          <p><strong>Benefits:</strong> {tool.caseStudy?.benefits}</p>
          <a
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline mt-1 block"
            onClick={e => e.stopPropagation()}
          >
            Learn more
          </a>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-white p-6 font-sans">
      <h1 className="text-4xl font-extrabold mb-6 text-center select-none">
        Generative AI Tools — Government Use & Case Studies
      </h1>

      {/* Legend for categories */}
      <div className="flex justify-center flex-wrap gap-6 mb-8 select-none">
        {Object.entries(categoryNames).map(([cat, name]) => (
          <div
            key={cat}
            className={`flex items-center space-x-2 cursor-default`}
          >
            <span
              className={`w-5 h-5 rounded-sm border ${categoryColors[cat]}`}
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{name}</span>
          </div>
        ))}
      </div>

      {/* Periodic table style grid */}
      <div className="flex flex-col gap-8">
        {Object.entries(groupedTools).map(([category, toolsInCat]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-2 select-none border-b border-gray-400 pb-1">
              {categoryNames[category]} ({toolsInCat.length})
            </h2>

            <div
              className="grid gap-3"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))"
              }}
            >
              {toolsInCat.map((tool, i) => (
                <ToolBlock key={tool.name} tool={tool} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}