import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ICSE Class X — 90.6%</h4>
                <h5>Christukula Mission Higher Secondary School (CKMS)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Class X with 90.6% under ICSE board. Built foundational
              academic discipline and an early interest in computers and problem-solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CBSE Class XII — 76.6%</h4>
                <h5>St. Michael's Higher Secondary School</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed Class XII under CBSE board. Developed early C programming skills,
              participated in coding challenges, and began building personal automation projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE-AIML | CGPA: 8.38</h4>
                <h5>Oriental Institute of Science and Technology (OIST), Bhopal</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing B.Tech in Computer Science with AI-ML specialization.
              SIH 2025 National Finalist, 10+ hackathon competitor, 100+ DSA problems solved.
              Building cloud-hosted AI systems and exploring Generative Engine Optimization (GEO).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
