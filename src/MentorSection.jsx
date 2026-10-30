import { useState } from "react";
import "./MentorsSection.css";

const mentors = [
  {
    id: 1,
    name: "Praveen Kumar",
    role: "AI Trainer",
    organization: "",
    image: "/images/trainers/praveen-ai-trainer.jpg",
    bio: "Mentor helping students explore AI through practical, project-led learning.",
  }
  // ,{
  //   id: 2,
  //   name: "Daneesh Bhatena",
  //   role: "L&D Enterprise Trainer",
  //   organization: "The Cutting Edge School",
  //   image: "/images/trainers/trainer-ansh.png",
  //   bio: "Enterprise trainer guiding learners through practical skills and hands-on projects.",
  // },
  // {
  //   id: 3,
  //   name: "Aum Patnaik",
  //   role: "L&D Enterprise Trainer",
  //   organization: "The Cutting Edge School",
  //   image: "/images/trainers/trainer-ansh.png",
  //   bio: "Trainer focused on helping students build confidence with AI tools and real-world applications.",
  // },
  // {
  //   id: 4,
  //   name: "Rohak Arya",
  //   role: "L&D Enterprise Trainer",
  //   organization: "The Cutting Edge School",
  //   image: "/images/trainers/trainer-ansh.png",
  //   bio: "Mentor supporting students as they develop creative projects and practical AI skills.",
  // },
];

function MentorCard({ mentor, isFlipped, onSelect }) {
  const handleFlip = () => {
    onSelect(mentor.id);
  };

  return (
    <button
      type="button"
      className={`mentor-card ${isFlipped ? "mentor-card--flipped" : ""}`}
      onClick={handleFlip}
      aria-label={
        isFlipped
          ? `Return to ${mentor.name}'s photo`
          : `Read the full profile of ${mentor.name}`
      }
      aria-pressed={isFlipped}
    >
      <span className="mentor-card__inner">
        {/* FRONT SIDE */}
        <span className="mentor-card__face mentor-card__front">
          <span className="mentor-card__photo">
            <img
              src={mentor.image}
              alt={mentor.name}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
          </span>

          <span className="mentor-card__details">
            <span className="mentor-card__name">
              {mentor.name}
            </span>

            <span className="mentor-card__role">
              {mentor.role}
            </span>

            {mentor.organization && (
              <span className="mentor-card__organization">
                {mentor.organization}
              </span>
            )}
          </span>
        </span>

        {/* BACK SIDE */}
        <span className="mentor-card__face mentor-card__back">
          <span className="mentor-card__back-content">
            <span className="mentor-card__back-name">
              {mentor.name}
            </span>

            <span className="mentor-card__back-role">
              {mentor.role}
            </span>

            {mentor.organization && (
              <span className="mentor-card__back-organization">
                {mentor.organization}
              </span>
            )}

            <span className="mentor-card__bio">
              {mentor.bio}
            </span>

            <span className="mentor-card__back-hint">
              TAP TO GO BACK
            </span>
          </span>
        </span>
      </span>
    </button>
  );
}

export default function MentorsSection() {
  const [flippedMentorId, setFlippedMentorId] = useState(null);

  const handleMentorSelect = (mentorId) => {
    setFlippedMentorId((currentId) =>
      currentId === mentorId ? null : mentorId
    );
  };

  return (
    <section className="mentors-section" id="mentors">
      <span
        className="mentors-section__decoration mentors-section__decoration--left"
        aria-hidden="true"
      />

      <span
        className="mentors-section__decoration mentors-section__decoration--right"
        aria-hidden="true"
      />

      <div className="mentors-section__container">
        <header className="mentors-section__header">
          <p className="mentors-section__eyebrow">
            MEET THE MENTORS
          </p>

          <h2 className="mentors-section__title">
            Expert Mentors Across Every Skill
          </h2>

          <p className="mentors-section__subtitle">
            Guiding students through practical, project-led learning.
          </p>
        </header>

        <div className="mentors-section__grid">
          {mentors.map((mentor) => (
            <MentorCard
              key={mentor.id}
              mentor={mentor}
              isFlipped={flippedMentorId === mentor.id}
              onSelect={handleMentorSelect}
            />
          ))}
        </div>

        <p className="mentors-section__hint">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 7h10l-3-3m3 3-3 3M17 17H7l3 3m-3-3 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          TAP A CARD TO READ THE FULL PROFILE
        </p>
      </div>
    </section>
  );
}