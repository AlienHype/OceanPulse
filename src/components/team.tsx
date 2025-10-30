import React from "react";
import { Users, Sparkles } from "lucide-react";
import "./team.css";

const teamMembers = [
  {
    name: "Kenisha Juleemun",
    role: "Team Lead",
    photo: "/image/kenisha.jpeg",
  },
  {
    name: "Dishita Cundasawmy",
    role: "Lead Developer",
    photo: "/image/dish21.jpeg",
  },
  {
    name: "Rachita Gungaram",
    role: "UI/UX Designer",
    photo: "/image/rachita.jpeg",
  },
  {
    name: "Nishka Rewtee",
    role: "Information Architect",
    photo: "/image/nishka.jpeg",
  },
  {
    name: "Nailah Jaumeer",
    role: "Test Engineer",
    photo: "/image/nailah.jpeg",
  },
];

const Team: React.FC = () => (
  <div className="team-container">
    <div className="text-center mb-16 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6">
        <Users className="w-12 h-12 text-marine-kelp animate-sway" />
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-ocean">
          Our Team
        </h2>
        <Sparkles className="w-12 h-12 text-marine-coral animate-pulse" />
      </div>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        Meet the passionate individuals behind <strong>OceanPulse</strong>,
        dedicated to leveraging technology for marine conservation.
      </p>
    </div>

    <div className="team-cards">
      {teamMembers.map((member) => (
        <div className="team-card" key={member.name}>
          <img
            src={member.photo}
            alt={member.name}
            className="team-photo"
            loading="lazy"
          />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Team;
