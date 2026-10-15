
import "./AIProgramHighlights.css";

const highlights = [
  {
    id: 1,
    className: "highlight-card--learning",
    text: (
      <>
       4 weeks / 100% virtual of
        <br />
        Guided Live Learning
      </>
    ),
    icon: (
      <svg viewBox="0 0 120 120" className="highlight-icon" aria-hidden="true">
        <defs>
          <linearGradient id="clockFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#a98aff" />
            <stop offset="100%" stopColor="#6540e7" />
          </linearGradient>
          <linearGradient id="clockBody" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#d7c5ff" />
            <stop offset="100%" stopColor="#7952f4" />
          </linearGradient>
        </defs>
        <circle cx="62" cy="57" r="42" fill="#b69aff" />
        <circle cx="62" cy="55" r="38" fill="url(#clockBody)" />
        <circle cx="62" cy="55" r="31" fill="url(#clockFace)" />
        <circle cx="62" cy="55" r="25" fill="#f4edff" />
        <circle cx="62" cy="55" r="22" fill="#fffaff" />
        <circle cx="62" cy="37" r="2.7" fill="#5e42ae" />
        <circle cx="62" cy="73" r="2.7" fill="#5e42ae" />
        <circle cx="44" cy="55" r="2.7" fill="#5e42ae" />
        <circle cx="80" cy="55" r="2.7" fill="#5e42ae" />
        <path
          d="M62 37 V55 L79 65"
          fill="none"
          stroke="#ffbd36"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="62" cy="55" r="4" fill="#ffad24" />
      </svg>
    ),
  },
  {
    id: 2,
    className: "highlight-card--videos",
    text: (
      <>
        AI Lab with 1.5 hours session,
        <br />
       100% virtual
        <br />
        &amp; 2 weeks
      </>
    ),
    icon: (
      <svg viewBox="0 0 120 120" className="highlight-icon" aria-hidden="true">
        <defs>
          <linearGradient id="playButton" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0%" stopColor="#ff8290" />
            <stop offset="100%" stopColor="#ff304d" />
          </linearGradient>
        </defs>
        <ellipse cx="59" cy="99" rx="39" ry="8" fill="#9d6be1" opacity=".24" />
        <rect
          x="25"
          y="28"
          width="73"
          height="61"
          rx="17"
          fill="#ff8795"
          opacity=".45"
        />
        <rect
          x="20"
          y="32"
          width="78"
          height="62"
          rx="17"
          fill="url(#playButton)"
        />
        <rect
          x="23"
          y="35"
          width="72"
          height="55"
          rx="14"
          fill="#ff566c"
        />
        <path d="M52 47 Q52 43 57 46 L77 59 Q81 62 77 65 L57 78 Q52 81 52 76Z" fill="#e82c4a" opacity=".25" />
        <path d="M49 45 Q49 41 54 44 L75 58 Q79 61 75 64 L54 78 Q49 81 49 76Z" fill="#fff" />
        <rect
          x="91"
          y="14"
          width="9"
          height="19"
          rx="4.5"
          transform="rotate(22 91 14)"
          fill="#ffbd22"
        />
        <rect
          x="106"
          y="24"
          width="9"
          height="17"
          rx="4.5"
          transform="rotate(48 106 24)"
          fill="#ffb21a"
        />
      </svg>
    ),
  },
  {
    id: 3,
    className: "highlight-card--access",
    text: (
      <>
        Life-time Access to Digital Marketing,
        <br />
        Course Recordings, Continued 
        <br />
        Practice.
      </>
    ),
    icon: (
      <svg viewBox="0 0 120 120" className="highlight-icon" aria-hidden="true">
        <defs>
          <linearGradient id="gearGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b39aff" />
            <stop offset="100%" stopColor="#7041e9" />
          </linearGradient>
        </defs>
        <ellipse cx="61" cy="99" rx="39" ry="8" fill="#9d6be1" opacity=".23" />
        <g transform="translate(61 56)">
          <path
            d="M-10-41 L10-41 L14-30 L23-26 L34-31 L44-14 L36-5 L36 5 L44 14 L34 31 L23 26 L14 30 L10 41 L-10 41 L-14 30 L-23 26 L-34 31 L-44 14 L-36 5 L-36-5 L-44-14 L-34-31 L-23-26 L-14-30Z"
            fill="url(#gearGradient)"
            stroke="#8964f5"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <circle cx="0" cy="0" r="25" fill="#7950e8" />
          <circle cx="0" cy="0" r="20" fill="#a68bff" />
          <circle cx="0" cy="0" r="15" fill="#ddd2ff" />
          <circle cx="0" cy="0" r="11" fill="#f9f6ff" />
        </g>
      </svg>
    ),
  },
  {
    id: 4,
    className: "highlight-card--projects",
    text: (
      <>
        Hands-On AI Projects with 2 Specialised
        <br />
        Mentors from Alkemy Edtech Team
      </>
    ),
    icon: (
      <svg viewBox="0 0 140 120" className="highlight-icon" aria-hidden="true">
        <defs>
          <linearGradient id="certificatePaper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#e8dcff" />
          </linearGradient>
          <linearGradient id="medalGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe36b" />
            <stop offset="100%" stopColor="#ff9e00" />
          </linearGradient>
        </defs>
        <ellipse cx="72" cy="102" rx="47" ry="8" fill="#8656d7" opacity=".22" />
        <rect x="20" y="23" width="92" height="72" rx="13" fill="#e5d8ff" />
        <rect x="26" y="18" width="90" height="74" rx="12" fill="url(#certificatePaper)" />
        <rect x="35" y="29" width="67" height="8" rx="4" fill="#eee6ff" />
        <rect x="36" y="42" width="51" height="8" rx="4" fill="#b99aff" />
        <rect x="36" y="55" width="43" height="8" rx="4" fill="#b99aff" />
        <path d="M87 78 L104 78 L111 109 L99 102 L89 115Z" fill="#ff414e" />
        <path d="M99 78 L115 73 L118 105 L107 100 L99 112Z" fill="#f52f47" />
        <circle cx="105" cy="67" r="21" fill="#ffcb3e" />
        <circle cx="105" cy="67" r="16" fill="url(#medalGold)" />
        <circle cx="105" cy="67" r="11" fill="#ffb414" />
        <circle cx="100" cy="61" r="5" fill="#ffe783" opacity=".8" />
      </svg>
    ),
  },
  {
    id: 5,
    className: "highlight-card--tools",
    text: (
      <>
        Structured Learning in Open Edex LMS
        <br />
        Courses &amp; Recordings
      </>
    ),
    icon: (
      <svg viewBox="0 0 150 120" className="highlight-icon" aria-hidden="true">
        <defs>
          <linearGradient id="capTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b29aff" />
            <stop offset="100%" stopColor="#7849ef" />
          </linearGradient>
          <linearGradient id="capBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7850df" />
            <stop offset="100%" stopColor="#4d29b6" />
          </linearGradient>
        </defs>
        <ellipse cx="77" cy="101" rx="51" ry="8" fill="#8a60d9" opacity=".23" />
        <path d="M43 59 L43 80 Q76 105 109 80 L109 59Z" fill="url(#capBase)" />
        <ellipse cx="76" cy="61" rx="33" ry="13" fill="#6b43d6" />
        <path d="M15 44 L77 16 L139 44 L77 73Z" fill="url(#capTop)" />
        <path d="M26 44 L77 22 L128 44 L77 66Z" fill="#956dff" />
        <path d="M78 28 L117 43" stroke="#ffcc35" strokeWidth="6" strokeLinecap="round" />
        <path d="M125 44 L125 77" stroke="#ffbd24" strokeWidth="4" strokeLinecap="round" />
        <circle cx="125" cy="78" r="6" fill="#ffb91f" />
        <path d="M125 84 Q116 93 121 102 L129 102 Q134 94 125 84Z" fill="#ffb91f" />
        <ellipse cx="125" cy="103" rx="6" ry="3" fill="#ffcc42" />
      </svg>
    ),
  },
];

function HighlightCard({ item }) {
  return (
    <article className={`highlight-card ${item.className}`}>
      <p className="highlight-card__text">{item.text}</p>
      <div className="highlight-card__decoration" aria-hidden="true" />
      <div className="highlight-card__illustration">{item.icon}</div>
    </article>
  );
}

function AIProgramHighlights(){
    return(
        <section className="ai-highlights" aria-label="AI program highlights">
            <div className="ai-highlights__grid">
                {highlights.map((item) => (
                    <HighlightCard key={item.id} item={item} />
                ))}
            </div>
        </section>

    )
}
export default AIProgramHighlights;