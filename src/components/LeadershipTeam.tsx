import React, { useState } from "react";
import "./LeadershipTeam.css";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamData: TeamMember[] = [
  {
    name: "Ashwini Shrivastav",
    role: "Vice President Marketing",
    image: "/images/image3.jpg",
    description: `Mr Ashwini Shrivastav is an accomplished marketing professional with more than 15 years of
experience in building strong brands and driving strategic growth. As Vice President of Marketing,
he leads the organisation’s marketing vision with a clear focus on brand positioning, investor
education, and awareness around fractional ownership as a modern real estate investment
option.

He has played a key role in shaping clear and trustworthy market communication by simplifying
complex investment ideas into easy-to-understand messages. His work helps investors connect
with the brand confidently while understanding the real value, structure, and long-term potential
of professionally managed real estate opportunities.

With a strong eye on scalable growth, Mr Shrivastav continues to strengthen the organisation’s
market presence through consistent messaging, trust-driven engagement, and thoughtful brand
strategy. His leadership supports long-term brand equity while ensuring the organisation remains
relevant, credible, and visible in a competitive investment landscape.`,
  },
  {
    name: "Mr Amitabh Chaudhuri",
    role: "Director",
    image: "/images/imag2.jpg",
    description: `Mr Amitabh Chaudhuri is a highly experienced real estate professional with over 27 years of deep industry exposure. His career spans residential, commercial, and investment-focused real estate, with strong expertise in fractional ownership models and structured asset-led investments. Over the years, he has played a key role in conceptualising, developing, and scaling multiple real estate ventures, bringing stability and long-term value to every project he leads.

As a strategic and forward-looking leader, Mr Amitabh Chaudhuri currently manages two independent business verticals with a clear focus on sustainable growth, operational efficiency, and investor confidence. His leadership approach combines strong market understanding with practical execution, ensuring that every business decision is backed by insight, discipline, and long-term vision.

Known for his integrity and transparent working style, Mr Amitabh Chaudhuri has consistently built trust-driven businesses that prioritise value creation for investors. His ability to adapt to evolving market dynamics and introduce innovative investment structures has helped strengthen the organisation’s position in the real estate sector. Through steady leadership and a commitment to excellence, he continues to guide the organisation toward long-term success and responsible growth.`,
  },
  {
    name: "Bhawna Kanoria",
    role: "Senior Business Development",
    image: "/images/image1.jpg",
    description: `With more than 16 years of hands-on experience in the real estate industry, Ms Bhawna Kanoria is a trusted name for investors looking to explore structured and secure property investments. At GroupDealz, she plays an important role in introducing and educating investors about fractional ownership as a practical, transparent, and scalable way to invest in high-value real estate assets without the burden of full ownership.

She is deeply involved in guiding investors through every stage of the investment process. From understanding how fractional ownership works to selecting the right asset, she ensures investors are clear about legal structuring, due diligence, rental yield potential, expected returns, and exit strategies. Her strength lies in simplifying complex financial and real estate concepts into clear, actionable insights that help investors feel confident and well-informed.

Her advisory approach supports both first-time investors and experienced professionals who want stable, income-generating real estate opportunities. By focusing on risk assessment, long-term wealth creation, and professionally managed assets, she helps investors make decisions that align with their financial goals.

At GroupDealz, she is known for her commitment to ethical practices, transparent communication, and investor education. She believes that informed investors make better decisions, and she ensures complete clarity across the entire investment lifecycle, from entry to exit. Through trust, knowledge, and consistent support, she continues to add value to investors seeking reliable and well-structured real estate investment opportunities.`,
  },
   {
    name: "Mandakni Shrivastav",
    role: "General Manager",
    image: "/images/image4.jpg",
    description: `Mandakni Shrivastav is an experienced professional with over 11 years of focused exposure in
the fractional ownership sector, primarily across operations and asset management functions.
Over the years, she has worked across diverse real estate portfolios and has developed strong
capabilities in process design, execution oversight, and investor servicing. Her experience
spans coordinating day-to-day operations, supporting transaction processes, and ensuring
alignment between business goals and operational delivery across multiple projects.
In her current role, Mandakni is responsible for overseeing core operational activities and
ensuring that systems and processes function in an efficient and coordinated manner. She plays
an active role in planning, monitoring, and improving workflows, with emphasis on compliance,
documentation accuracy, and service standards. By working closely with leadership teams,
partner networks, and internal departments, she helps maintain structured operations that
support stability and organised growth of the business.
Mandakni is known for her disciplined working style, attention to detail, and dependable
execution capabilities. She maintains a strong focus on transparency and consistency in
processes, contributing to enhanced stakeholder confidence and operational reliability. Her
ability to manage teams, streamline procedures, and support investor interaction adds
meaningful value to the organisation. With a steady and responsible approach, she continues to
strengthen back-end systems and operational frameworks that enable the company’s long-term
objectives.`,
  },
];

const LeadershipTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <>
      {/* ================= TEAM SECTION ================= */}
      <section className="team-section">
        <div className="container">
          <h2 className="team-title">Our Leadership Team</h2>
          <p className="team-subtitle">
           Meet the experts behind our real estate growth
          </p>

          <div className="team-grid">
            {teamData.map((member, index) => (
              <div
                className="team-card"
                key={index}
                onClick={() => setSelectedMember(member)}
              >
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {selectedMember && (
        <div
          className="team-modal-overlay"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="team-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedMember(null)}
            >
              ✕
            </button>

            {/* LEFT IMAGE */}
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-img"
            />

            {/* RIGHT CONTENT */}
            <div className="team-modal-content">
              <h3>{selectedMember.name}</h3>
              <h5>{selectedMember.role}</h5>

              {selectedMember.description
                .split("\n\n")
                .map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeadershipTeam;
