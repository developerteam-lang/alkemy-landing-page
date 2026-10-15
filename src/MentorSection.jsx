
import { useState } from "react";
import "./MentorsSection.css";

const mentors = [
  {
    id: 1,
    name: "Ansh Mehra",
    role: "Founder",
    organization: "The Cutting Edge School",
    image: "/images/trainers/trainer-ansh.png",
    bio: "Founder and mentor helping students explore AI through practical, project-led learning.",
  },
  {
    id: 2,
    name: "Daneesh Bhatena",
    role: "L&D Enterprise Trainer",
    organization: "The Cutting Edge School",
    image: "/images/trainers/trainer-ansh.png",
    bio: "Enterprise trainer guiding learners through practical skills and hands-on projects.",
  },
  {
    id: 3,
    name: "Aum Patnaik",
    role: "L&D Enterprise Trainer",
    organization: "The Cutting Edge School",
    image: "/images/trainers/trainer-ansh.png",
    bio: "Trainer focused on helping students build confidence with AI tools and real-world applications.",
  },
  {
    id: 4,
    name: "Rohak Arya",
    role: "L&D Enterprise Trainer",
    organization: "The Cutting Edge School",
    image: "/images/trainers/trainer-ansh.png",
    bio: "Mentor supporting students as they develop creative projects and practical AI skills.",
  },
];

function MentorCard({ mentor, onSelect }) {
  return (
    <button
      type="button"
      className="mentor-card"
      onClick={() => onSelect(mentor)}
      aria-label={`Read the full profile of ${mentor.name}`}
    >
      <div className="mentor-card__photo">
        <img
          src={mentor.image}
          alt={mentor.name}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <div className="mentor-card__details">
        <h3>{mentor.name}</h3>
        <p>{mentor.role}</p>
        <p className="mentor-card__organization">
          {mentor.organization}
        </p>
      </div>
    </button>
  );
}

export default function MentorsSection() {
  const [selectedMentor, setSelectedMentor] = useState(null);

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
              onSelect={setSelectedMentor}
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

      {selectedMentor && (
        <div
          className="mentor-modal"
          role="presentation"
          onClick={() => setSelectedMentor(null)}
        >
          <div
            className="mentor-modal__content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mentor-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="mentor-modal__close"
              onClick={() => setSelectedMentor(null)}
              aria-label="Close mentor profile"
            >
              ×
            </button>

            <img
              className="mentor-modal__photo"
              src={selectedMentor.image}
              alt={selectedMentor.name}
            />

            <h3 id="mentor-modal-title">
              {selectedMentor.name}
            </h3>

            <p className="mentor-modal__role">
              {selectedMentor.role}
            </p>

            <p className="mentor-modal__organization">
              {selectedMentor.organization}
            </p>

            <p className="mentor-modal__bio">
              {selectedMentor.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
