import React from "react";

const GRADIENT = "linear-gradient(135deg, #00D9FF 0%, #B026FF 100%)";

const experiences = [
  {
    id: 1,
    role: "MERN Stack Developer",
    company: "DelightCode Infotech, Surat",
    duration: "Aug 2026 – Present",
    isCurrent: true,
    icon: "fas fa-briefcase",
    highlights: [
      "Identified and resolved production bugs in a live application",
      "Delivered new features and enhancements using React.js, Node.js, and MongoDB",
      "Tested fixes and application changes across different environments",
    ],
  },
  {
    id: 2,
    role: "Junior MERN Stack Developer",
    company: "Costa Technolab, Surat",
    duration: "Jan 2026 – Aug 2026",
    isCurrent: false,
    icon: "fas fa-laptop-code",
    highlights: [
      "Developed full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB",
      "Built scalable REST APIs for booking systems, shipping workflows, and admin dashboards",
      "Implemented authentication, payments, real-time messaging, and media uploads",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="pt-5 unified-bg section-spacing"
      style={{ position: "relative" }}
      aria-labelledby="experience-heading"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.05,
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)",
          pointerEvents: "none",
        }}
      />

      <div className="container position-relative">
        <header className="text-center mb-5" data-aos="fade-up">
          <h2
            id="experience-heading"
            className="fw-bold text-white mb-0"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>Work </span>
            <span
              style={{
                background: GRADIENT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Experience
            </span>
          </h2>
        </header>

        <ol
          className="experience-timeline list-unstyled mb-0 mx-auto"
          style={{ maxWidth: "820px", padding: 0 }}
        >
          {experiences.map((item, index) => (
            <li
              key={item.id}
              className="experience-timeline-item position-relative"
              data-aos="fade-up"
              data-aos-delay={index * 120}
            >
              <div
                className="experience-marker"
                aria-hidden="true"
                style={{
                  outline: item.isCurrent
                    ? "3px solid rgba(0, 217, 255, 0.35)"
                    : undefined,
                }}
              >
                <i className={item.icon} />
              </div>

              <article
                className="experience-card"
                style={{
                  background: "rgba(10, 10, 26, 0.95)",
                  borderRadius: "20px",
                  padding: "clamp(1.25rem, 3vw, 1.75rem)",
                  border: "2px solid transparent",
                  backgroundImage: `linear-gradient(rgba(10, 10, 26, 0.95), rgba(10, 10, 26, 0.95)), ${GRADIENT}`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                  boxShadow:
                    "0 0 30px rgba(0, 217, 255, 0.15), 0 0 50px rgba(176, 38, 255, 0.1), 0 12px 40px rgba(0, 0, 0, 0.4)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 40px rgba(0, 217, 255, 0.35), 0 0 60px rgba(176, 38, 255, 0.25), 0 20px 50px rgba(0, 0, 0, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(0, 217, 255, 0.15), 0 0 50px rgba(176, 38, 255, 0.1), 0 12px 40px rgba(0, 0, 0, 0.4)";
                }}
              >
                <header className="mb-3">
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-2 mb-2">
                    <h3
                      className="mb-0"
                      style={{
                        color: "#FFFFFF",
                        fontWeight: 700,
                        fontSize: "clamp(1.15rem, 2.5vw, 1.35rem)",
                        lineHeight: 1.35,
                      }}
                    >
                      {item.role}
                    </h3>
                    {item.isCurrent && (
                      <span
                        className="badge flex-shrink-0"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(0, 217, 255, 0.2), rgba(176, 38, 255, 0.3))",
                          color: "#00D9FF",
                          border: "1px solid rgba(0, 217, 255, 0.5)",
                          borderRadius: "12px",
                          fontSize: "0.8rem",
                          fontWeight: 600,
                          padding: "6px 12px",
                        }}
                      >
                        Present
                      </span>
                    )}
                  </div>
                  <p
                    className="mb-2"
                    style={{
                      color: "#00D9FF",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                    }}
                  >
                    <i className="fas fa-building me-2" aria-hidden="true" />
                    {item.company}
                  </p>
                  <time
                    style={{
                      color: "#B8C5D6",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                    }}
                  >
                    <i
                      className="fas fa-calendar-alt me-2"
                      style={{ color: "#B026FF" }}
                      aria-hidden="true"
                    />
                    {item.duration}
                  </time>
                </header>

                <ul
                  className="mb-0 ps-3"
                  style={{
                    color: "#E0E6F0",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    lineHeight: 1.75,
                  }}
                >
                  {item.highlights.map((point, i) => (
                    <li key={i} className="mb-2">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .experience-timeline-item {
          padding-left: 3.25rem;
          padding-bottom: 2.5rem;
        }
        .experience-timeline-item:last-child {
          padding-bottom: 0;
        }
        .experience-timeline-item::before {
          content: '';
          position: absolute;
          left: 1.125rem;
          top: 2.75rem;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(0, 217, 255, 0.6), rgba(176, 38, 255, 0.6));
          opacity: 0.5;
        }
        .experience-timeline-item:last-child::before {
          display: none;
        }
        .experience-marker {
          position: absolute;
          left: 0;
          top: 0.35rem;
          width: 2.375rem;
          height: 2.375rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #00D9FF 0%, #B026FF 100%);
          color: white;
          box-shadow: 0 0 20px rgba(0, 217, 255, 0.4), 0 0 30px rgba(176, 38, 255, 0.3);
          z-index: 2;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .experience-timeline-item:hover .experience-marker {
          transform: scale(1.08);
          box-shadow: 0 0 28px rgba(0, 217, 255, 0.55), 0 0 40px rgba(176, 38, 255, 0.45);
        }
        @media (max-width: 576px) {
          .experience-timeline-item {
            padding-left: 2.75rem;
          }
          .experience-timeline-item::before {
            left: 0.9rem;
          }
          .experience-marker {
            width: 2rem;
            height: 2rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;
