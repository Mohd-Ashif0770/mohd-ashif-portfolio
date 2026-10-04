import React from "react";

const Skills = () => {
  const skillsCategories = [
    {
      title: "Frontend",
      icon: "fas fa-code",
      iconGradient: "linear-gradient(135deg, #00D9FF, #0099FF)",
      borderColor: "rgba(0, 217, 255, 0.5)",
      borderColorHover: "rgba(0, 153, 255, 0.8)",
      shadowColor: "rgba(0, 217, 255, 0.3)",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "React.js",
        "Redux Toolkit",
        "React Router",
      ],
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      iconGradient: "linear-gradient(135deg, #B026FF, #FF6BFF)",
      borderColor: "rgba(176, 38, 255, 0.5)",
      borderColorHover: "rgba(255, 107, 255, 0.8)",
      shadowColor: "rgba(176, 38, 255, 0.3)",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Google OAuth",
        "Cloudinary",
      ],
    },
    {
      title: "Database",
      icon: "fas fa-database",
      iconGradient: "linear-gradient(135deg, #0099FF, #14B8A6)",
      borderColor: "rgba(0, 153, 255, 0.5)",
      borderColorHover: "rgba(20, 184, 166, 0.8)",
      shadowColor: "rgba(0, 153, 255, 0.3)",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose", "Prisma"],
    },
    {
      title: "Tools & Platforms",
      icon: "fas fa-tools",
      iconGradient: "linear-gradient(135deg, #FF6B35, #FF6BFF)",
      borderColor: "rgba(255, 107, 53, 0.5)",
      borderColorHover: "rgba(255, 107, 255, 0.8)",
      shadowColor: "rgba(255, 107, 53, 0.3)",
      skills: [
        "Git",
        "GitHub",
        "GitHub Actions",
        "CI/CD",
        "Postman",
        "Docker",
        "Vercel",
        "Dokploy",
        "Cursor",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="pt-5 unified-bg section-spacing"
      style={{ position: "relative", paddingTop: "10rem" }}
    >
      <div className="container">
        <h2
          className="text-center mb-5 fw-bold text-white"
          style={{
            width: "100%",
            fontSize: "clamp(2.4rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.5px",
            marginBottom: "2.5rem",
          }}
        >
          <span style={{ color: "#FFFFFF" }}>Skills &</span>{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #00D9FF, #B026FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block",
            }}
          >
            Technologies
          </span>
        </h2>

        <div className="row g-4">
          {skillsCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card h-100 border-0 shadow-lg"
                style={{
                  background: "rgba(30, 30, 60, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "26px",
                  padding: "30px",
                  border: `2px solid ${category.borderColor}`,
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = `0 16px 36px rgba(0, 0, 0, 0.4), 0 0 24px ${category.shadowColor}`;
                  e.currentTarget.style.borderColor = category.borderColorHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.3)";
                  e.currentTarget.style.borderColor = category.borderColor;
                }}
              >
                <div className="text-center mb-4">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                      borderRadius: "50%",
                      background: category.iconGradient,
                      color: "white",
                      width: "86px",
                      height: "86px",
                      margin: "0 auto",
                      boxShadow: `0 8px 20px ${category.shadowColor}`,
                    }}
                  >
                    <i className={`${category.icon} fa-2x`} />
                  </div>
                </div>

                <h4
                  className="text-center mb-4"
                  style={{
                    color: "#E0E6F0",
                    fontWeight: 700,
                    fontSize: "1.65rem",
                    lineHeight: 1.4,
                    marginBottom: "20px",
                  }}
                >
                  {category.title}
                </h4>

                <div
                  className="d-flex flex-wrap justify-content-center"
                  style={{ gap: "10px" }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      style={{
                        background: "rgba(255, 255, 255, 0.09)",
                        color: "#D8E3F0",
                        fontSize: "0.9rem",
                        fontWeight: 500,
                        borderRadius: "12px",
                        padding: "6px 18px",
                        display: "inline-block",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
