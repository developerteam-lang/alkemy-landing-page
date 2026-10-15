import React from "react";
import "./TrustedSchools.css";

const schools = [
  {
    name: "Pathways World School",
    logo: "/images/schools/pathways-world-school.png",
  },
  {
    name: "Shiv Nadar School",
    logo: "/images/schools/shiv-nadar-school.png",
  },
  {
    name: "The Cathedral and John Connon School",
    logo: "/images/schools/cathedral-john-connon-school.png",
  },
  {
    name: "Vasant Valley School",
    logo: "/images/schools/vasant-valley-school.png",
  },
  {
    name: "GD Goenka Public School",
    logo: "/images/schools/gd-goenka-public-school.png",
  },
];

export default function TrustedSchools() {
  // Duplicate the list to create a seamless, continuous carousel.
  const carouselSchools = [...schools, ...schools];

  return (
    <section className="trusted-schools">
      <h2 className="trusted-schools__title">
        Trusted By Students From 100+ Schools
      </h2>

      <div className="trusted-schools__viewport">
        <div className="trusted-schools__track">
          {carouselSchools.map((school, index) => (
            <article
              className="trusted-schools__card"
              key={`${school.name}-${index}`}
            >
              <img
                className="trusted-schools__logo"
                src={school.logo}
                alt={`${school.name} logo`}
                loading="lazy"
              />

              <p className="trusted-schools__name">
                {school.name}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}