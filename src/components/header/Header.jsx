function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Left: Logo */}
        <a href="#" className="logo">
          <span className="logo-text">VERISQ</span>
          <span className="logo-badge">AI</span>
        </a>

        {/* Right: Navigation */}
        <nav className="header-nav">
          <a href="#" className="nav-link">How It Works</a>
          <a href="#" className="nav-link">LiveThreat Scorecards</a>
          <a href="#" className="nav-link">Auto Questionnaires</a>
          <a href="#" className="nav-link">Risk Tiering</a>
          <a href="#" className="nav-link">Breach Alerts</a>
          <a href="#form" className="btn-header">Start Free Trial</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
