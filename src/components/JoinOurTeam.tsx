import React, { useState } from "react";
import "./JoinOurTeam.css";

interface TeamImage {
  image: string;
}

const teamImages: TeamImage[] = [
  { image: "/images/join1.jpg" },
  { image: "/images/join2.jpg" },
  { image: "/images/join3.jpg" },
  { image: "/images/join4.jpg" },
];

const JoinOurTeam: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* ================= IMAGE GRID SECTION ================= */}
      <section className="team-section">
        <div className="container">
          <h2 className="team-title">Join Our Team</h2>

          <div className="team-grid">
            {teamImages.map((item, index) => (
              <div
                className="team-card"
                key={index}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="team-img">
                  <img src={item.image} alt={`team-${index}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMAGE POPUP ================= */}
      {selectedImage && (
        <div
          className="team-modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="team-modal image-only-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Selected Team"
              className="modal-img"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default JoinOurTeam;
