import React, { useState } from "react";
import { Sparkles, MessageCircleQuestion, } from "lucide-react";
import "./report.css";

interface Report {
  photo: string;
  problem: string;
}

const ReportSection: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  const [problem, setProblem] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (problem && photo) {
      setReports([...reports, { problem, photo }]);
      setProblem("");
      setPhoto(null);
    }
  };

  return (
    <div className="report-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MessageCircleQuestion className="w-12 h-12 text-marine-kelp animate-sway" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-ocean">
              Report a problem
            </h2>
            <Sparkles className="w-12 h-12 text-marine-coral animate-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Help us protect marine life by reporting issues you encounter in the ocean.
          </p>
        </div>
        <div className="report-form-and-list">
          <form className="report-form" onSubmit={handleSubmit}>
            <label>
              <p className="text-muted-foreground leading-relaxed">
                Problem Description:
              </p>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                rows={3}
                placeholder="Describe the problem..."
              />
            </label>
            <label>
              <p className="text-muted-foreground leading-relaxed">
                Upload Photo:
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                required
              />
            </label>
            <button type="submit">Submit Report</button>
          </form>
          <div className="report-list">
            {reports.map((report, idx) => (
              <div className="report-card" key={idx}>
                <img src={report.photo} alt="Report" className="report-photo" />
                <div className="report-details">
                  <p>{report.problem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportSection;