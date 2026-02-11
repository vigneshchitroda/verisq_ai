import { Sparkles, ChevronDown } from "lucide-react";

function DashboardHeader() {
  return (
    <header className="header">
      <div className="header-content">

        {/* LEFT */}
        <div className="header-left">
          <div className="logo">
            <span className="logo-text">VERISQ</span>
            <span className="logo-badge">AI</span>
          </div>

          <div className="header-divider"></div>

          <span className="header-title">Trial Dashboard</span>
        </div>

        {/* RIGHT */}
        <div className="header-right">
          <div className="trial-badge">
            <Sparkles size={16} />
            <span>Free Trial</span>
          </div>

          <div className="user-menu">
            <div className="user-avatar">JS</div>
            <span className="user-name">Jane Smith</span>
            <ChevronDown size={16} style={{ opacity: 0.7 }} />
          </div>
        </div>

      </div>
    </header>
  );
}

export default DashboardHeader;
