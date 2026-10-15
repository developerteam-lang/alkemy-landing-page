import React, { useEffect, useState } from "react";
import "./LearningPaths.css";

const plans = [
  {
    name: "Foundation Program",
    duration: "3 Weeks · 6 Live Sessions",
    price: "₹7,000",
    description:
      "Students beginning their AI journey and ready to explore creativity, academics and no-code building.",
    buttonClass: "foundation",
  },
  {
    name: "Accelerator Program",
    duration: "4 Weeks · 8 Live Sessions",
    price: "₹10,000",
    description:
      "Students already using AI who need structured guidance to use it more effectively and confidently.",
    buttonClass: "accelerator",
    popular: true,
  },
  {
    name: "Mastery Program",
    duration: "5 Weeks · 10 Live Sessions",
    price: "₹15,000",
    description:
      "Students ready for deeper AI application, communication skills and career discovery.",
    buttonClass: "mastery",
  },
];

const skillRows = [
  { label: "Creative Skills", values: ["✓", "✓", "✓"] },
  { label: "Academic Skills", values: ["✓", "✓", "✓"] },
  { label: "No-Code Skills", values: ["✓", "✓", "✓"] },
  { label: "Communication Skills", values: ["—", "✓", "✓"] },
  { label: "Career Discovery", values: ["—", "—", "✓"] },
];

const includedRows = [
  { label: "AI Lab + Class Recordings", values: ["1 year", "1 year", "1 year"] },
  { label: "Pre-Recorded Videos + Resources", values: ["Included", "Included", "Included"] },
  { label: "Assignments & Practice", values: ["6", "8", "10"] },
  { label: "AI Speaking Coach", values: ["—", "Included", "Included"] },
  {
    label: "Personalised Career Counselling Report",
    values: ["—", "—", "Included"],
  },
];

function Countdown() {
  // Change this date to your actual early-bird offer deadline.
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 8,
    minutes: 26,
    seconds: 27,
  });

  useEffect(() => {
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + 1);
    deadline.setHours(24, 0, 0, 0);

    const updateCountdown = () => {
      const difference = Math.max(0, deadline.getTime() - Date.now());

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="learning-countdown">
      <strong>Early Bird Ends</strong>
      <span className="learning-countdown__timer">
        {String(timeLeft.days).padStart(2, "0")}d :{" "}
        {String(timeLeft.hours).padStart(2, "0")}h :{" "}
        {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
        {String(timeLeft.seconds).padStart(2, "0")}s
      </span>
    </div>
  );
}

function ComparisonRows({ rows }) {
  return rows.map((row) => (
    <div className="learning-table__row" key={row.label}>
      <div className="learning-table__label">{row.label}</div>

      {row.values.map((value, index) => (
        <div
          className={`learning-table__value ${
            index === 1 ? "learning-table__value--featured" : ""
          } ${value === "✓" ? "learning-table__check" : ""} ${
            value === "—" ? "learning-table__dash" : ""
          }`}
          key={`${row.label}-${index}`}
        >
          {value}
        </div>
      ))}
    </div>
  ));
}

export default function LearningPaths() {
  return (
    <section className="learning-paths">
      <div className="learning-paths__eyebrow">
        THREE LEVELS OF LEARNING
      </div>

      <h2 className="learning-paths__title">
        Choose Your Child’s Learning Path
      </h2>

      <div className="learning-table">
        {/* Plan headers */}
        <div className="learning-table__header">
          <div className="learning-table__empty" />

          {plans.map((plan) => (
            <div
              className={`learning-table__plan ${
                plan.popular ? "learning-table__plan--featured" : ""
              }`}
              key={plan.name}
            >
              {plan.popular && (
                <span className="learning-table__badge">
                  MOST ENROLLED
                </span>
              )}

              <h3>{plan.name}</h3>
              <p className="learning-table__duration">{plan.duration}</p>

              <div className="learning-table__price">
                {plan.price} <small>+ GST</small>
              </div>
            </div>
          ))}
        </div>

        {/* Plan descriptions */}
        <div className="learning-table__descriptions">
          <div className="learning-table__label">
            Best Suited For
          </div>

          {plans.map((plan, index) => (
            <div
              className={`learning-table__description ${
                index === 1 ? "learning-table__description--featured" : ""
              }`}
              key={plan.name}
            >
              {plan.description}
            </div>
          ))}
        </div>

        {/* Skills comparison */}
        <div className="learning-table__section-title">
          COMPARE LEARNING PATHS
        </div>

        <ComparisonRows rows={skillRows} />

        {/* What's included */}
        <div className="learning-table__section-title">
          COMPARE WHAT’S INCLUDED
        </div>

        <ComparisonRows rows={includedRows} />

        {/* Enroll buttons */}
        <div className="learning-table__footer">
          <div className="learning-table__empty" />

          {plans.map((plan) => (
            <div
              className={`learning-table__enroll ${
                plan.popular ? "learning-table__enroll--featured" : ""
              }`}
              key={plan.name}
            >
              <a
                href="/enroll"
                className={`learning-table__button learning-table__button--${plan.buttonClass}`}
              >
                Enrol Your Child <span>➜</span>
              </a>
            </div>
          ))}
        </div>
      </div>

      <Countdown />
    </section>
  );
}