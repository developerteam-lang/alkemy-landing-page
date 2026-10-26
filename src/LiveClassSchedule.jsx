import React from "react";
import "./LiveClassSchedule.css";

const weeks = [
  { week: "WEEK 1", dates: "" },
  { week: "WEEK 2", dates: "" },
  { week: "WEEK 3", dates: "" },
  { week: "WEEK 4", dates: "" },
  { week: "WEEK 5", dates: "" },
];

function LiveClassSchedule() {
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <p className="schedule-eyebrow">LIVE CLASS SCHEDULE</p>

        <h1 className="schedule-heading">
          Flexible Slots. Same Live Experience.
        </h1>

        <div className="schedule-weeks">
          {weeks.map((item) => (
            <div className="week-card" key={item.week}>
              <div className="week-details">
                <span className="week-badge">{item.week}</span>

                <span className="schedule-date">
                  <svg
                    className="calendar-icon"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <rect
                      x="4"
                      y="6"
                      width="16"
                      height="14"
                      rx="2"
                    />
                    <path d="M8 3v6M16 3v6M4 10h16" />
                  </svg>
                  Sat–Sun
                </span>

                <span className="date-divider" aria-hidden="true" />

                <span className="date-range">{item.dates}</span>
              </div>

              <div className="time-slots">
                <span className="time-pill">
                  <span className="time-icon" aria-hidden="true">☀</span>
                  Morning · 11AM–1PM
                </span>

                <span className="time-pill">
                  <span className="time-icon" aria-hidden="true">♟</span>
                  Evening · 5–7PM
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="celebration-card">
          <div className="celebration-content">
            <span className="celebration-badge">
              FINAL CELEBRATION
            </span>

            <h2>Felicitation Ceremony</h2>

            <p>
              A dedicated online celebration of student progress,
              standout projects and achievement.
            </p>
          </div>

          <span className="celebration-time">
            Sunday · Live on Zoom
          </span>
        </div>
      </div>

      <div className="schedule-footer" aria-hidden="true" />
    </section>
  );
}

export default LiveClassSchedule;