/* global React */
// FV — ラブマツ portrait big, editorial style, trust-focused

// Influencer photo placeholder (AI-generated-style portrait via Unsplash)
const RABU_HERO = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=900&h=1400&fit=crop&q=85";
// Fallback secondary
const RABU_HERO_B = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=900&h=1400&fit=crop&q=85";

function StatusBar() {
  return (
    <div className="statusbar">
      <div>9:41</div>
      <div className="statusbar-notch"></div>
      <div className="statusbar-right">
        <span style={{ fontSize: 11 }}>●●●●●</span>
        <span style={{ fontSize: 11 }}>5G</span>
        <span className="statusbar-battery"><span></span></span>
      </div>
    </div>
  );
}

function FV() {
  return (
    <section className="fv" data-section="fv">
      <div className="fv-photo-fallback"></div>
      <div
        className="fv-photo"
        style={{ backgroundImage: `url(${RABU_HERO})` }}
      ></div>
      <div className="fv-overlay"></div>
      <div className="fv-noise"></div>

      <div className="fv-bigword">EDIT.</div>

      <StatusBar />

      <div className="fv-topband">
        <div className="fv-brand">
          BOOST<span className="cy">·</span>LABO
        </div>
        <div className="fv-badge">
          <span className="pulse"></span>
          <span>LINE 限定</span>
        </div>
      </div>

      <div className="fv-side">RABUMATSU · ADOBE OFFICIAL</div>

      <div className="fv-bottom">
        <div className="fv-eyebrow">EDITING SCHOOL BY RABUMATSU</div>
        <h1 className="fv-headline">
          <span className="mega">440</span><span className="cy" style={{ fontWeight: 900, fontSize: 22 }}>万人</span>が見た、<br />
          <span className="hl">ラブマツの編集</span>を<br />
          あなたのスキルに。
        </h1>
        <div className="fv-sub">
          Adobe公式講師による、<br />
          必要な知識と"裏技"だけをギュッと学べる動画編集スクール。
        </div>

        <div className="fv-meta">
          <div className="fv-meta-item">
            <div className="fv-meta-num">440<span className="u">万</span></div>
            <div className="fv-meta-label">FOLLOWERS</div>
          </div>
          <div className="fv-meta-item">
            <div className="fv-meta-num">2.7<span className="u">億</span></div>
            <div className="fv-meta-label">MAX VIEWS</div>
          </div>
          <div className="fv-meta-item">
            <div className="fv-meta-num">Adobe</div>
            <div className="fv-meta-label">OFFICIAL</div>
          </div>
        </div>

        <a className="cta-card" href="#cta">
          <div className="cta-row">
            <div>
              <div className="cta-label">
                <span className="cta-icon">L</span>
                LINE限定 / 無料
              </div>
              <div className="cta-main">無料個別相談会に参加する</div>
              <div className="cta-sub">所要時間60分 / オンライン</div>
            </div>
            <div className="cta-arrow">→</div>
          </div>
        </a>
      </div>
    </section>
  );
}

Object.assign(window, { FV, RABU_HERO, RABU_HERO_B, StatusBar });
