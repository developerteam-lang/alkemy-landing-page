
import React, { useEffect, useRef } from "react";
import "./LiveToolOrbit.css";

const tools = [
  { name: "Canva", image: "/images/ai-tool-icons/Canva.png" },
  { name: "Notion", image: "/images/ai-tool-icons/Notion.png" },
  { name: "Loom", image: "/images/ai-tool-icons/Loom.png" },
  { name: "Google AI Studio", image: "/images/ai-tool-icons/google-ai-studio.png" },
  { name: "Gamma", image: "/images/ai-tool-icons/Gamma.png" },
  { name: "ChatGPT", image: "/images/ai-tool-icons/ChatGPT.png" },
  { name: "Claude", image: "/images/ai-tool-icons/Claude.png" },
  { name: "Claude Anthropic", image: "/images/ai-tool-icons/claude-anthropic.png" },
  { name: "Gemini", image: "/images/ai-tool-icons/Gemini.png" },
  { name: "NotebookLM", image: "/images/ai-tool-icons/NotebookLM.png" },
  { name: "Lovable", image: "/images/ai-tool-icons/Lovable.png" },
  { name: "Suno", image: "/images/ai-tool-icons/Suno.png" },
  { name: "Eleven Labs", image: "/images/ai-tool-icons/ElevenLabs.png" },
  { name: "HeyGen", image: "/images/ai-tool-icons/HeyGen.png" },
  { name: "Higgsfield", image: "/images/ai-tool-icons/Higgsfield.png" },
  { name: "Google Flow", image: "/images/ai-tool-icons/GoogleFlow.png" },
];

// =========================================
// DESKTOP ELLIPTICAL ORBIT CONFIGURATION
// =========================================

const STAGE_WIDTH = 1193;
const STAGE_HEIGHT = 520;

const RADIUS_X = 480;
const RADIUS_Y = 190;

// One complete revolution takes 30 seconds.
const ORBIT_DURATION = 30000;

const START_ANGLE = -Math.PI / 2;
const TWO_PI = Math.PI * 2;

// =========================================
// CREATE ACCURATE EQUAL-DISTANCE ORBIT TABLE
// =========================================

function createOrbitTable() {
  const segments = 10000;
  const step = TWO_PI / segments;

  const lengths = [0];

  let totalLength = 0;

  for (let i = 1; i <= segments; i++) {

    // IMPORTANT:
    // Calculate the midpoint relative to the actual
    // starting angle of the elliptical orbit.
    const midpointAngle =
      START_ANGLE + (i - 0.5) * step;

    // Speed along the elliptical path.
    const speed = Math.sqrt(
      Math.pow(RADIUS_X * Math.sin(midpointAngle), 2) +
      Math.pow(RADIUS_Y * Math.cos(midpointAngle), 2)
    );

    // Distance covered during this small segment.
    const distance = speed * step;

    totalLength += distance;
    lengths.push(totalLength);
  }

  return {
    lengths,
    totalLength,
    segments,
    step,
  };
}

const orbitTable = createOrbitTable();

// =========================================
// CONVERT EQUAL DISTANCE INTO ELLIPSE ANGLE
// =========================================

function getOrbitAngle(fraction) {
  const {
    lengths,
    totalLength,
    segments,
    step,
  } = orbitTable;

  const normalizedFraction =
    ((fraction % 1) + 1) % 1;

  const targetLength =
    normalizedFraction * totalLength;

  // Binary search for the correct distance.
  let low = 0;
  let high = segments;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    if (lengths[mid] < targetLength) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  const index = low;

  if (index === 0) {
    return START_ANGLE;
  }

  const previousLength = lengths[index - 1];
  const currentLength = lengths[index];

  const segmentLength =
    currentLength - previousLength;

  const fractionBetween =
    segmentLength === 0
      ? 0
      : (targetLength - previousLength) / segmentLength;

  // Interpolate the angle accurately.
  return (
    START_ANGLE +
    (index - 1 + fractionBetween) * step
  );
}

// =========================================
// INITIAL POSITIONS FOR ALL 16 ICONS
// =========================================

function getInitialPosition(index) {
  const angle = getOrbitAngle(index / tools.length);

  const x =
    STAGE_WIDTH / 2 +
    RADIUS_X * Math.cos(angle);

  const y =
    STAGE_HEIGHT / 2 +
    RADIUS_Y * Math.sin(angle);

  return {
    left: `${(x / STAGE_WIDTH) * 100}%`,
    top: `${(y / STAGE_HEIGHT) * 100}%`,
  };
}

// =========================================
// MAIN COMPONENT
// =========================================

export default function LiveToolOrbit() {
  const stageRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    let animationFrame;
    let startTime = null;

    const animateOrbit = (currentTime) => {
      const stage = stageRef.current;

      if (!stage) {
        return;
      }

      const rect = stage.getBoundingClientRect();

      // DESKTOP ANIMATION ONLY.
      // Mobile layout and positioning are untouched.
      if (rect.width > 700) {

        if (startTime === null) {
          startTime = currentTime;
        }

        const elapsed = currentTime - startTime;

        // Constant movement speed for the entire orbit.
        const progress =
          (elapsed % ORBIT_DURATION) / ORBIT_DURATION;

        // Maintain the ellipse proportions on desktop.
        const scale = Math.min(
          1,
          rect.width / STAGE_WIDTH
        );

        const radiusX = RADIUS_X * scale;
        const radiusY = RADIUS_Y * scale;

        // Move all 16 icons together.
        tools.forEach((tool, index) => {
          const item = itemRefs.current[index];

          if (!item) {
            return;
          }

          // Equal arc-length spacing.
          const distanceFraction =
            (index / tools.length + progress) % 1;

          // Find the correct position on the ellipse.
          const angle = getOrbitAngle(distanceFraction);

          const x =
            rect.width / 2 +
            radiusX * Math.cos(angle);

          const y =
            rect.height / 2 +
            radiusY * Math.sin(angle);

          // Update position without rotating the icon.
          item.style.left =
            `${(x / rect.width) * 100}%`;

          item.style.top =
            `${(y / rect.height) * 100}%`;
        });
      }

      animationFrame =
        requestAnimationFrame(animateOrbit);
    };

    animationFrame =
      requestAnimationFrame(animateOrbit);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="tool-orbit-section">

      <div
        className="tool-orbit-stage"
        ref={stageRef}
      >

        {/* =================================
            DESKTOP ELLIPTICAL ORBIT
        ================================= */}

        <div
          className="tool-orbit-tools"
          aria-label="AI tools"
        >
          {tools.map((tool, index) => {
            const position = getInitialPosition(index);

            return (
              <div
                className="tool-orbit-item"
                key={tool.name}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                style={{
                  left: position.left,
                  top: position.top,
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
            );
          })}
        </div>

        {/* =================================
            STATIONARY CENTER HEADING
        ================================= */}

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
