import { Zap, ArrowRight } from "lucide-react";

function SignupForm() {
  return (
    <div className="form-section" id="form">
      <div className="form-card">

        {/* Header */}
        <div className="form-header">
          <div className="form-badge">
            <Zap size={14} />
            NO CREDIT CARD REQUIRED
          </div>

          <h2 className="form-title">
            Try Verisq AI
          </h2>

          <p className="form-subtitle">
            Get LiveThreat scores for 5 vendors
          </p>
        </div>

        {/* Full Name */}
        <div className="form-group">
          <label className="form-label">
            Full Name
          </label>
          <input
            type="email"
            className="form-input"
            placeholder="jane smith"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label className="form-label">
            Work Email
          </label>
          <input
            type="email"
            className="form-input"
            placeholder="jane@company.com"
          />
        </div>

        {/* Company */}
        <div className="form-group">
          <label className="form-label">
            Company Name
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="Acme Corp"
          />
        </div>

        {/* Company Domain */}
        <div className="form-group">
          <label className="form-label">
            Company Domain
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="acme.com"
          />
        </div>

        {/* Mobile Phone */}
        <div className="form-group">
          <label className="form-label">
            Mobile Phone
          </label>
          <input
            type="text"
            className="form-input"
            placeholder="+1(555) 123-4567"
          />
        </div>

        {/* CTA */}
        <button className="btn-submit">
          Start Free Trial
          <ArrowRight size={20} />
        </button>

        {/* Trust note */}
        <p className="form-disclaimer">
          By signing up, you agree to our Terms of Service.<br/>
          No public email domains (Gmail, Yahoo, etc.) allowed.
        </p>

      </div>
    </div>
  );
}

export default SignupForm;
