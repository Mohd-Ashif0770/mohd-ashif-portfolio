import React from "react";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center min-vh-100"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(0, 153, 255, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(90, 0, 255, 0.2) 0%, transparent 50%)",
        }}
      ></div>

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1
              className="fw-bold mb-4"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.2)",
                lineHeight: "1.2",
                fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                display: "inline-flex",
                alignItems: "center",
                whiteSpace: "nowrap",
                gap: "0.4rem",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <span className="text-white" style={{ whiteSpace: "nowrap" }}>
                Hi, I'm{" "}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #00D9FF 0%, #0099FF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                Mohd
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #B026FF 0%, #FF6BFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                }}
              >
                Ashif
              </span>
              <span style={{ fontSize: "0.9em", whiteSpace: "nowrap" }}>
                👋
              </span>
            </h1>
            <p
              className="lead mb-3"
              style={{ color: "#B8C5D6", fontSize: "1.1rem", fontWeight: 400 }}
            >
              Full Stack MERN Developer
            </p>
            <p
              className="mb-4"
              style={{
                color: "#B8C5D6",
                fontSize: "1rem",
                opacity: 0.9,
                lineHeight: "1.6",
              }}
            >
              I build scalable web applications with clean, modern design.
            </p>
            <div className="d-flex gap-3 mb-4 flex-wrap align-items-center">
              <button
                className="btn hero-btn-primary d-inline-flex align-items-center gap-2"
                onClick={scrollToProjects}
              >
                <span>View My Work</span>
                <i className="fas fa-arrow-down"></i>
              </button>
              <a
                href="/assets/Resume.pdf"
                download="Mohd-Ashif-Resume.pdf"
                className="btn hero-btn-secondary d-inline-flex align-items-center gap-2"
              >
                <span>Download Resume</span>
                <i className="fas fa-download"></i>
              </a>
            </div>
            <div className="d-flex gap-3">
              <a
                href="https://github.com/Mohd-Ashif0770"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hero-social-link"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-ashif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hero-social-link"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                maxWidth: "400px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  background:
                    "linear-gradient(135deg, rgba(0, 217, 255, 0.4), rgba(0, 153, 255, 0.4))",
                  borderRadius: "50%",
                  filter: "blur(15px)",
                  zIndex: 0,
                  width: "calc(100% + 20px)",
                  height: "calc(100% + 20px)",
                }}
              ></div>
              <img
                src="/assets/profile.jpg"
                alt="Mohd Ashif"
                className="img-fluid rounded-circle shadow-lg position-relative"
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  aspectRatio: "1",
                  objectFit: "cover",
                  border: "4px solid rgba(0, 217, 255, 0.8)",
                  zIndex: 1,
                  boxShadow:
                    "0 0 30px rgba(0, 217, 255, 0.5), 0 20px 60px rgba(0, 0, 0, 0.4)",
                }}
                onError={(e) => {
                  e.target.src = `https://github.com/Mohd-Ashif0770.png`;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
