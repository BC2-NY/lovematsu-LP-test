/* global React, ReactDOM, FV, StatusBar, ProofStrip, ProfileSection, PainSection, FeaturesSection, GiftSection, InlineCTA, ResultsSection, VoicesSection, FAQSection, FinalCTA, StickyCTA, Footer */

function LP() {
  return (
    <div className="lp" data-screen-label="ラブマツ LP">
      <FV />
      <ProofStrip />
      <ProfileSection />
      <InlineCTA />
      <PainSection />
      <FeaturesSection />
      <InlineCTA />
      <GiftSection />
      <ResultsSection />
      <VoicesSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function App() {
  return (
    <div className="page-wrap">
      <header className="page-header">
        <div className="brand-mark">
          <span className="dot"></span>
          <span>RABUMATSU · BOOST LABO</span>
        </div>
        <div className="meta">SMARTPHONE LP / 390px</div>
      </header>

      <div className="phone">
        <div className="phone-screen">
          <LP />
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
