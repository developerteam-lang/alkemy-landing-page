import React from "react";
import "./LiveToolOrbit.css";


const tools = [
  { name: "replitAI", image: "/images/ai-tool-icons/replitAI.png", x: 23.9, y: 25.4 },
  { name: "Notion", image: "/images/ai-tool-icons/Notion.png", x: 31.0, y: 17.5 },
  { name: "Loom", image: "/images/ai-tool-icons/Loom.png", x: 39.0, y: 12.1 },
  { name: "ElevenReader", image: "/images/ai-tool-icons/ElevenReader.png", x: 46.7, y: 10.1 },
  { name: "Gamma", image: "/images/ai-tool-icons/Gamma.png", x: 54.7, y: 10.6 },
  { name: "ChatGPT", image: "/images/ai-tool-icons/ChatGPT.png", x: 63.7, y: 14.4 },
  { name: "Claude", image: "/images/ai-tool-icons/Claude.png", x: 72.9, y: 23.0 },
  { name: "Emergent", image: "/images/ai-tool-icons/Emergent.png", x: 18.2, y: 44.2 },
  { name: "Gemini", image: "/images/ai-tool-icons/Gemini.png", x: 80.2, y: 41.0 },
  { name: "NotebookLM", image: "/images/ai-tool-icons/NotebookLM.png", x: 79.2, y: 62.7 },
  { name: "Lovable", image: "/images/ai-tool-icons/Lovable.png", x: 21.7, y: 67.8 },
  { name: "Suno", image: "/images/ai-tool-icons/Suno.png", x: 30.4, y: 80.5 },
  { name: "Eleven Labs", image: "/images/ai-tool-icons/ElevenLabs.png", x: 38.9, y: 86.2 },
  { name: "HeyGen", image: "/images/ai-tool-icons/HeyGen.png", x: 48.0, y: 88.0 },
  { name: "Higgsfield", image: "/images/ai-tool-icons/Higgsfield.png", x: 57.9, y: 86.7 },
  { name: "Google Flow", image: "/images/ai-tool-icons/GoogleFlow.png", x: 65.4, y: 83.0 },
  { name: "Canva", image: "/images/ai-tool-icons/Canva.png", x: 73.5, y: 74.5 },
];

export default function LiveToolOrbit() {
  return (
    <section className="tool-orbit-section">
      <div className="tool-orbit-stage">
        {/* className="tool-orbit-track" */}
         <div  aria-label="AI tools orbiting the headline">
          {tools.map((tool) => (
            <div
              className="tool-orbit-item"
              key={tool.name}
              style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
            >
              <div className="tool-orbit-counterspin">
                <img src={tool.image} alt={`${tool.name} logo`} />
                <span>{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="tool-orbit-center">
          <p className="tool-orbit-eyebrow">THE GENAI TOOLKIT</p>
          <h1>15+ Tools to Turn Ideas Into Action</h1>
          <div className="tool-orbit-pills">
            <span><b aria-hidden="true">♧</b> No Paid Subscription Required</span>
            <span><b aria-hidden="true">♧</b> Selected for Safe, Guided Use</span>
          </div>
        </div>
      </div>
    </section>
  );
}
