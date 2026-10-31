import React from "react";
import "./LiveToolOrbit.css";

const tools = [
  { name: "Canva", image: "/images/ai-tool-icons/Canva.png", x: 23.4, y: 28.4 },
  { name: "Notion", image: "/images/ai-tool-icons/Notion.png", x: 31.0, y: 17.5 },
  { name: "Loom", image: "/images/ai-tool-icons/Loom.png", x: 39.0, y: 12.1 },
  { name: "Google AI Studio", image: "/images/ai-tool-icons/google-ai-studio.png", x: 46.7, y: 10.1 },
  { name: "Gamma", image: "/images/ai-tool-icons/Gamma.png", x: 54.7, y: 10.6 },
  { name: "ChatGPT", image: "/images/ai-tool-icons/ChatGPT.png", x: 63.7, y: 14.4 },
  { name: "Claude", image: "/images/ai-tool-icons/Claude.png", x: 72.9, y: 23.0 },
  { name: "Claude Anthropic", image: "/images/ai-tool-icons/claude-anthropic.png", x: 73.5, y: 74.5 },
  { name: "Gemini", image: "/images/ai-tool-icons/Gemini.png", x: 80.2, y: 41.0 },
  { name: "NotebookLM", image: "/images/ai-tool-icons/NotebookLM.png", x: 79.2, y: 62.7 },
  { name: "Lovable", image: "/images/ai-tool-icons/Lovable.png", x: 20.5, y: 51.5 },
  { name: "Suno", image: "/images/ai-tool-icons/Suno.png", x: 28.4, y: 70.5 },
  { name: "Eleven Labs", image: "/images/ai-tool-icons/ElevenLabs.png", x: 37.9, y: 80.2 },
  { name: "HeyGen", image: "/images/ai-tool-icons/HeyGen.png", x: 48.0, y: 86.0 },
  { name: "Higgsfield", image: "/images/ai-tool-icons/Higgsfield.png", x: 55.9, y: 84.7 },
  { name: "Google Flow", image: "/images/ai-tool-icons/GoogleFlow.png", x: 65.4, y: 83.0 },
];

export default function LiveToolOrbit() {
  return (
    <section className="tool-orbit-section">
      <div className="tool-orbit-stage">

        {/* AI tools: original desktop positioning is preserved */}
        <div
          className="tool-orbit-tools"
          aria-label="AI tools"
        >
          {tools.map((tool) => (
            <div
              className="tool-orbit-item"
              key={tool.name}
              style={{
                left: `${tool.x}%`,
                top: `${tool.y}%`,
              }}
            >
              <div className="tool-orbit-counterspin">
                <img
                  src={tool.image}
                  alt={`${tool.name} logo`}
                />
                <span>{tool.name}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Heading and badges */}
        <div className="tool-orbit-center">
          <p className="tool-orbit-eyebrow">
            THE GENAI TOOLKIT
          </p>

          <h1 style={{ color: "#004f9e" }}>
            15+ Tools to Turn Ideas Into Action
          </h1>

          <div className="tool-orbit-pills">
            <span>
              <b aria-hidden="true">♧</b>
              No Paid Subscription Required
            </span>

            <span>
              <b aria-hidden="true">♧</b>
              Selected for Safe, Guided Use
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
