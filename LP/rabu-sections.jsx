/* global React */
const { useState } = React;

// Photo placeholders — AI/Unsplash dummy images
const PHOTOS = {
  profile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&h=1200&fit=crop&q=85",
  // student result photos (using video/creator-themed placeholders)
  s1: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=600&fit=crop&q=80",
  s2: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&q=80",
  s3: "https://images.unsplash.com/photo-1607968565043-36af90dde238?w=800&h=600&fit=crop&q=80",
  // voice avatars
  v1: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop&q=80",
  v2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80",
  v3: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?w=200&h=200&fit=crop&q=80",
  v4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
};

/* ============================================================
   Inline CTA — used between sections
   ============================================================ */
function InlineCTA({ caption = true, label = "無料個別相談会に参加する" }) {
  return (
    <div className="cta-block">
      <a className="cta-card" href="#cta">
        <div className="cta-row">
          <div>
            <div className="cta-label">
              <span className="cta-icon">L</span>
              LINEで予約 / 完全無料
            </div>
            <div className="cta-main">{label}</div>
            <div className="cta-sub">所要時間60分 / オンライン開催</div>
          </div>
          <div className="cta-arrow">→</div>
        </div>
      </a>
      {caption ? (
        <div className="cta-meta">
          <span><span className="dot">●</span> 予約まで30秒</span>
          <span><span className="dot">●</span> 無理な勧誘なし</span>
        </div>
      ) : null}
    </div>
  );
}

/* ============================================================
   ラブマツ Profile section
   ============================================================ */
function ProfileSection() {
  return (
    <section className="profile" data-section="profile">
      <div
        className="profile-photo"
        style={{ backgroundImage: `url(${PHOTOS.profile})` }}
      >
        <div className="profile-tag">● ADOBE OFFICIAL INSTRUCTOR</div>
        <div className="profile-name-bar">
          <div>
            <div className="profile-name-main">RABUMATSU</div>
            <div className="profile-name-sub">ラブマツ / 動画クリエイター</div>
          </div>
          <div className="profile-rolemark">
            FOUNDER<br />
            BOOST LABO
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="section-label">About</div>
        <h2 className="h-section">
          動画編集で、<br />
          <span className="cy">人生の選択肢</span>を増やす。
        </h2>

        <p className="profile-bio">
          Adobe公式講師として、最先端の動画編集とAI活用ノウハウを発信。
          SNS総フォロワー440万人、最高再生回数2.7億回。
          Netflix、Adobe、原神、サンリオなど大手企業からの編集案件を多数手がける。
          自身が培ってきた「再現性のある編集メソッド」と"裏技"を、
          講座を通じてすべて伝授しています。
        </p>

        <div className="profile-stats">
          <div className="profile-stat">
            <div className="profile-stat-num">440<span className="u">万</span><span className="plus">+</span></div>
            <div className="profile-stat-label">TOTAL FOLLOWERS</div>
            <div className="profile-stat-jp">SNS総フォロワー数</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-num">2.7<span className="u">億</span></div>
            <div className="profile-stat-label">MAX VIEWS</div>
            <div className="profile-stat-jp">最高再生回数</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-num">100<span className="u">+</span></div>
            <div className="profile-stat-label">BRAND WORKS</div>
            <div className="profile-stat-jp">大手企業案件</div>
          </div>
          <div className="profile-stat">
            <div className="profile-stat-num">Adobe</div>
            <div className="profile-stat-label">OFFICIAL INSTRUCTOR</div>
            <div className="profile-stat-jp">Adobe公式講師</div>
          </div>
        </div>

        <div className="achievement-list">
          <div className="achievement-item">
            <div className="achievement-check">✓</div>
            <div className="achievement-text">
              SNS総フォロワー<span className="strong"> 440万人</span> 超え
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-check">✓</div>
            <div className="achievement-text">
              最高再生回数<span className="strong"> 2.7億回</span>
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-check">✓</div>
            <div className="achievement-text">
              <span className="strong">Adobe</span> 公式講師として登壇
            </div>
          </div>
          <div className="achievement-item">
            <div className="achievement-check">✓</div>
            <div className="achievement-text">
              大手企業案件 <span className="strong">100本</span> 以上の実績
            </div>
          </div>
        </div>

        <div className="companies">
          <div className="companies-label">— FEATURED BRAND WORKS —</div>
          <div className="companies-grid">
            <image-slot id="logo-1" shape="rect" placeholder="NETFLIX"></image-slot>
            <image-slot id="logo-2" shape="rect" placeholder="Adobe"></image-slot>
            <image-slot id="logo-3" shape="rect" placeholder="原 神"></image-slot>
            <image-slot id="logo-4" shape="rect" placeholder="SANRIO"></image-slot>
          </div>
          <div className="companies-foot">
            ※ 実際のロゴはあとから差し替え可能 / ドラッグ&ドロップで画像を挿入
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Pain section
   ============================================================ */
function PainSection() {
  const pains = [
    "編集スキルはあるのに、案件が全然取れない",
    "独学を続けて時間ばかりが過ぎていく",
    "スクールに通っても結局稼げる気がしない",
    "SNS時代の最新編集テクが体系的に学べる場所がない",
    "AIをどう動画編集に活かせばいいかわからない",
    "ラブマツの編集テクを直接学んでみたい",
  ];

  return (
    <section className="section pain" data-section="pain">
      <div className="pain-head">
        <div className="pain-q">QUESTION.</div>
        <div className="section-label" style={{ justifyContent: "center", marginTop: 12 }}>Pain Points</div>
        <h2 className="h-section">
          こんな悩み、<br />
          <span className="cy">ありませんか？</span>
        </h2>
      </div>
      <div className="pain-list">
        {pains.map((p, i) => (
          <div className="pain-item" key={i}>
            <div className="pain-mark">!</div>
            <div>{p}</div>
          </div>
        ))}
      </div>
      <div className="pain-arrow-block">
        <div className="pain-arrow-text">
          そのお悩み、<br />
          <span className="cy">裏技編集ブーストラボ</span> が解決します。
        </div>
        <span className="pain-arrow"></span>
      </div>
    </section>
  );
}

/* ============================================================
   Features (3-5)
   ============================================================ */
function FeaturesSection() {
  const features = [
    {
      n: "01",
      tag: "DIRECT MENTORSHIP",
      title: (<>ラブマツが、<span className="cy">直接</span>教える。</>),
      desc: "440万人の心を掴むラブマツ自身が、全カリキュラムを徹底解説。教科書では教わらない『現場の裏技』までを、本人から直接学べる唯一の場所です。",
    },
    {
      n: "02",
      tag: "ONLY THE ESSENTIALS",
      title: (<>必要な知識と『裏技』だけ、<span className="cy">ギュッと</span>。</>),
      desc: "汎用的な知識ではなく「案件で本当に使うスキル」だけを抽出。最短距離で結果につながる、実践特化のカリキュラム設計です。",
    },
    {
      n: "03",
      tag: "AI × EDITING",
      title: (<><span className="cy">AI × 動画編集</span>の最先端を実装。</>),
      desc: "Adobe Sensei・生成AIを活用した、次世代の編集ワークフロー。スキマ時間でも、本業以上の生産性を生み出す仕組みを習得できます。",
    },
    {
      n: "04",
      tag: "1-ON-1 ROADMAP",
      title: (<>あなただけの<span className="cy">個別ロードマップ</span>。</>),
      desc: "現在地・目標・ライフスタイルに合わせ、専属ディレクターが個別ロードマップを設計。挫折ポイントごとに、最適な伴走を行います。",
    },
    {
      n: "05",
      tag: "DIRECTOR SUPPORT",
      title: (<>編集チームのディレクターが<span className="cy">徹底サポート</span>。</>),
      desc: "ラブマツの編集チームに所属する現役ディレクターが、あなたの作品を1本ずつ添削。プロの判断基準で、市場で通用するスキルへと磨きます。",
    },
  ];

  return (
    <section className="section features" data-section="features">
      <div className="section-head">
        <div className="section-label">Features</div>
        <h2 className="h-section">
          <span className="cy">裏技編集ブーストラボ</span><br />
          5つの特徴。
        </h2>
        <p className="lead">
          動画編集スキルだけでなく、"稼ぐ仕組み"までを一気通貫で。
        </p>
      </div>

      <div className="feature-list">
        {features.map((f) => (
          <div className="feature-card" key={f.n}>
            <div className="feature-head">
              <div className="feature-num">FEATURE <span className="sep">/</span> {f.n}</div>
              <div className="feature-tag">{f.tag}</div>
            </div>
            <div className="feature-title">{f.title}</div>
            <div className="feature-desc">{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Student results — 3 cases
   ============================================================ */
function ResultsSection() {
  const results = [
    {
      photo: PHOTOS.s1,
      tag: "CASE 01",
      platform: "TikTok",
      platformIcon: "T",
      headline: (<>開設 <span className="num">3</span>日で<br /><span className="num">1万</span>フォロワー突破。</>),
      name: "K.S さん / 元会社員 / 25歳",
      detail: "受講開始 1ヶ月。AIショート編集メソッドを実装し、開設わずか3日で1万フォロワーを獲得。",
    },
    {
      photo: PHOTOS.s2,
      tag: "CASE 02",
      platform: "案件報酬",
      platformIcon: "¥",
      headline: (<>開設 <span className="num">1</span>ヶ月で<br />報酬 <span className="num">30万</span>円獲得。</>),
      name: "Y.T さん / 副業 / 32歳",
      detail: "提案文・商談動画の添削を活用し、初月で法人案件を3件受注。月の副収入が30万円を突破しました。",
    },
    {
      photo: PHOTOS.s3,
      tag: "CASE 03",
      platform: "Instagram",
      platformIcon: "I",
      headline: (<>開設 <span className="num">1</span>ヶ月で<br /><span className="num">8.3万</span>フォロワー。</>),
      name: "M.N さん / フリーランス / 28歳",
      detail: "ラブマツ流テロップ&構成術を実装。プロの編集設計に切り替えただけで、1ヶ月で8.3万フォロワーを達成。",
    },
  ];

  return (
    <section className="section results" data-section="results">
      <div className="section-head">
        <div className="section-label">Student Results</div>
        <h2 className="h-section">
          受講生の<br />
          <span className="cy">最短成果</span>事例。
        </h2>
        <p className="lead">受講開始わずか数週間で、結果が出ています。</p>
      </div>

      <div className="result-list">
        {results.map((r, i) => (
          <div className="result-card" key={i}>
            <div
              className="result-photo"
              style={{ backgroundImage: `url(${r.photo})` }}
            >
              <div className="result-photo-tag">{r.tag}</div>
              <div className="result-photo-platform">
                <span className="ico">{r.platformIcon}</span>
                <span>{r.platform}</span>
              </div>
            </div>
            <div className="result-body">
              <div className="result-headline">{r.headline}</div>
              <div className="result-name">
                <span>{r.name}</span>
              </div>
              <div className="result-detail">{r.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Voices — 受講生の声
   ============================================================ */
function VoicesSection() {
  const voices = [
    {
      title: <><span style={{color:"var(--cyan)"}}>『裏技』</span>が、<span className="cy">本当に存在した。</span></>,
      text: "独学3年でも超えられなかった壁を、ラブマツさんから直接教わったテロップ術と構成パターンで、たった2ヶ月で突破できました。なぜ売れる動画なのかが、構造で理解できる。これは独学では絶対に辿り着けなかった領域です。",
      name: "Y.T さん",
      role: "副業 / 32歳",
      avatar: PHOTOS.v1,
    },
    {
      title: <>AI編集の<span className="cy">最先端</span>が、ここに。</>,
      text: "ChatGPT/Runway/Adobe Fireflyを動画編集の現場でどう組み合わせるか、実案件ベースで体系化されているのが衝撃でした。作業時間が半分以下になり、案件単価は逆に上がりました。",
      name: "K.S さん",
      role: "元会社員 / 25歳",
      avatar: PHOTOS.v2,
    },
    {
      title: <>ディレクターの添削が<span className="cy">圧倒的</span>。</>,
      text: "毎回の添削が『なぜ良くないのか』まで言語化されて返ってきます。プロの判断基準が、自分の中にインストールされていく感覚。3ヶ月で実力が完全に別物になりました。",
      name: "M.N さん",
      role: "フリーランス / 28歳",
      avatar: PHOTOS.v3,
    },
    {
      title: <>初心者でも、<span className="cy">置いていかれない。</span></>,
      text: "編集ソフトを触ったことのない完全未経験スタートでしたが、個別ロードマップに沿って進めるので、迷うことが一度もありませんでした。LINEで質問するとすぐ返ってくるのも安心感が大きいです。",
      name: "A.K さん",
      role: "主婦 / 36歳",
      avatar: PHOTOS.v4,
    },
  ];

  return (
    <section className="section voices" data-section="voices">
      <div className="section-head">
        <div className="section-label">Voices</div>
        <h2 className="h-section">
          受講生の<br />
          <span className="cy">リアルな声</span>。
        </h2>
      </div>

      <div className="voices-list">
        {voices.map((v, i) => (
          <div className="voice-card" key={i}>
            <div className="voice-stars">★★★★★</div>
            <div className="voice-title">{v.title}</div>
            <div className="voice-text">{v.text}</div>
            <div className="voice-foot">
              <div
                className="voice-avatar"
                style={{ backgroundImage: `url(${v.avatar})` }}
              ></div>
              <div>
                <div className="voice-name">{v.name}</div>
                <div className="voice-role">{v.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Gift section — 5 specials + countdown + social proof
   ============================================================ */
function GiftSection() {
  const gifts = [
    {
      n: "01",
      tag: "TECHNIQUE",
      title: "編集テクニック解説動画",
      sub: "ラブマツが現場で使う『裏技』テクニックを動画で公開",
    },
    {
      n: "02",
      tag: "MASTERY",
      title: "動画編集の極め方 徹底解説",
      sub: "プロ案件で必要な思考と判断基準を網羅",
    },
    {
      n: "03",
      tag: "FEEDBACK",
      title: "あなたの作成動画への徹底フィードバック",
      sub: "ディレクターによる1on1のレビュー(初回特典)",
    },
    {
      n: "04",
      tag: "ROADMAP",
      title: "あなた専用の個別ロードマップ作成",
      sub: "現在地と目標から、最短距離の学習設計を",
    },
    {
      n: "05",
      tag: "SUPPORT",
      title: "編集チームのディレクターによる個別サポート",
      sub: "ラブマツのプロチームが、直接伴走します",
    },
  ];

  return (
    <section className="section gift" data-section="gift">
      <div className="gift-head">
        <div className="gift-eyebrow">LINE 限定 / 5大特典 / 完全無料</div>
        <h2 className="gift-title">
          いま無料相談会に参加で<br />
          <span className="big cy">5つの特典</span>を<br />
          全員にプレゼント。
        </h2>

        <div className="gift-timer">
          <div className="gift-timer-label">
            <span className="cy">期間限定</span>キャンペーン<br />
            <span style={{ fontSize: 10, color: "var(--ink-3)" }}>残り受付時間</span>
          </div>
          <div className="gift-timer-counter">
            <div className="gift-timer-unit">
              <div className="gift-timer-num">03</div>
              <div className="gift-timer-name">DAYS</div>
            </div>
            <div className="gift-timer-unit">
              <div className="gift-timer-num">14</div>
              <div className="gift-timer-name">HRS</div>
            </div>
            <div className="gift-timer-unit">
              <div className="gift-timer-num">27</div>
              <div className="gift-timer-name">MIN</div>
            </div>
          </div>
        </div>
      </div>

      <div className="gift-list">
        {gifts.map((g) => (
          <div className="gift-item" key={g.n}>
            <div className="gift-num-block">
              <div className="gift-num-label">SPECIAL</div>
              <div className="gift-num">{g.n}</div>
              <div className="gift-num-sub">/ 05</div>
            </div>
            <div className="gift-item-body">
              <div className="gift-item-tag">{g.tag}</div>
              <div className="gift-item-title">{g.title}</div>
              <div className="gift-item-sub">{g.sub}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="gift-foot">
        想定価値 <span className="strike">¥158,000</span> 相当を
        <strong> 全員無料 </strong>でプレゼント<br />
        <span style={{ fontSize: 10, color: "var(--ink-3)" }}>※ LINE追加 → 個別相談会のご予約完了で配布</span>
      </div>
    </section>
  );
}

/* ============================================================
   Social proof strip
   ============================================================ */
function ProofStrip() {
  return (
    <div style={{
      background: "var(--bg-2)",
      borderTop: "1px solid var(--line-mid)",
      borderBottom: "1px solid var(--line-mid)",
      padding: "20px 22px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      position: "relative",
      zIndex: 1,
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%",
          background: "var(--cyan)",
          boxShadow: "0 0 12px var(--cyan)",
          animation: "pulse 2s infinite",
        }}></span>
        <div>
          <div style={{
            fontFamily: "Outfit", fontSize: 9,
            letterSpacing: "0.24em", color: "var(--ink-3)",
            textTransform: "uppercase",
          }}>Now enrolling</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)", marginTop: 2 }}>
            <span style={{ color: "var(--cyan)", fontFamily: "Outfit", fontSize: 16, fontWeight: 800 }}>2,847</span>
            <span style={{ marginLeft: 4 }}>名が受講中</span>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{
          fontFamily: "Outfit", fontSize: 9,
          letterSpacing: "0.24em", color: "var(--ink-3)",
          textTransform: "uppercase",
        }}>Last 24h</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)", marginTop: 2 }}>
          <span style={{ color: "var(--cyan)", fontFamily: "Outfit", fontSize: 16, fontWeight: 800 }}>+38</span>
          <span style={{ marginLeft: 4 }}>名が予約済</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
function FAQSection() {
  const [open, setOpen] = useState(0);
  const faqs = [
    {
      q: "完全な未経験でも、本当に大丈夫ですか？",
      a: "もちろんです。受講者の約7割がPC操作・動画編集ともに未経験からスタートしています。個別ロードマップで、あなたに合わせた最適な学習設計をご用意します。",
    },
    {
      q: "ラブマツ本人から直接学べるのですか？",
      a: "全カリキュラムをラブマツ本人が解説しています。さらに、編集チームに所属する現役ディレクターによる個別添削・サポートが受けられます。",
    },
    {
      q: "本業や家事と両立できますか？",
      a: "受講者の約8割が会社員・副業・主婦の方です。1日30分〜から始められる学習設計と、LINEでの即時質問サポートで、ご自身のペースで進められます。",
    },
    {
      q: "AIが苦手でもついていけますか？",
      a: "AI活用は初心者向けのSTEPからスタートします。むしろAIが苦手な方ほど、本講座で身につく差別化スキルとして大きな武器になります。",
    },
    {
      q: "無料相談会では、何が話せますか？",
      a: "現在のお悩み・目指したい未来のヒアリングと、それを踏まえた個別ロードマップのご提案、講座内容のご説明をいたします。無理な勧誘は一切ありません。",
    },
    {
      q: "LINE登録すると勧誘されますか？",
      a: "一切ありません。まずは無料の5特典のお渡しと、無料個別相談会のご案内のみです。ご希望されない方への連絡は行いません。",
    },
  ];

  return (
    <section className="section faq" data-section="faq">
      <div className="section-head">
        <div className="section-label">FAQ</div>
        <h2 className="h-section">
          よくある<br />
          <span className="cy">ご質問</span>。
        </h2>
      </div>

      <div className="faq-list">
        {faqs.map((f, i) => (
          <div
            className={`faq-item ${open === i ? "open" : ""}`}
            key={i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className="faq-q">
              <div className="faq-q-mark">Q.</div>
              <div className="faq-q-text">{f.q}</div>
              <div className="faq-toggle"></div>
            </div>
            <div className="faq-a">
              <div className="faq-a-inner">
                <div className="faq-a-content">{f.a}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   Final CTA
   ============================================================ */
function FinalCTA() {
  return (
    <section className="final" id="cta" data-section="final">
      <div className="final-eyebrow">— LIMITED OFFER —</div>
      <h2 className="final-title">
        いま<span className="cy">LINE登録</span>で<br />
        <span className="mega">5</span>特典を全員プレゼント
      </h2>
      <div className="final-sub">
        受け取りは30秒。<br />
        無料個別相談会のご予約も、LINEからそのまま完了します。
      </div>

      <div className="final-checklist">
        <div className="final-check-item">
          <div className="final-check-mark">✓</div>
          <div>編集テクニック解説動画</div>
        </div>
        <div className="final-check-item">
          <div className="final-check-mark">✓</div>
          <div>動画編集の極め方 徹底解説動画</div>
        </div>
        <div className="final-check-item">
          <div className="final-check-mark">✓</div>
          <div>作成動画への徹底フィードバック</div>
        </div>
        <div className="final-check-item">
          <div className="final-check-mark">✓</div>
          <div>あなた専用の個別ロードマップ作成</div>
        </div>
        <div className="final-check-item">
          <div className="final-check-mark">✓</div>
          <div>編集チームのディレクター個別サポート</div>
        </div>
      </div>

      <a className="cta-card" href="#cta" style={{ marginBottom: 14 }}>
        <div className="cta-row">
          <div>
            <div className="cta-label">
              <span className="cta-icon">L</span>
              LINE限定 / 完全無料
            </div>
            <div className="cta-main">無料個別相談会に参加する</div>
            <div className="cta-sub">所要時間60分 / オンライン開催</div>
          </div>
          <div className="cta-arrow">→</div>
        </div>
      </a>

      <div className="final-proof">
        現在 <strong>2,847</strong> 名が受講中 / 24h で <strong>+38</strong> 名予約
      </div>
    </section>
  );
}

/* ============================================================
   Sticky CTA + Footer
   ============================================================ */
function StickyCTA() {
  return (
    <div className="sticky-cta">
      <a className="sticky-cta-btn" href="#cta">
        <span className="badge">LINE</span>
        <span>無料個別相談会に参加する</span>
        <span className="arrow">›</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-logo">
        BOOST<span className="cy">·</span>LABO
      </div>
      <div className="lp-footer-meta">
        裏技編集ブーストラボ<br />
        運営：株式会社ブーストラボ
      </div>
      <div className="lp-footer-links">
        <span>特商法表記</span>
        <span>プライバシーポリシー</span>
        <span>お問い合わせ</span>
      </div>
      <div className="lp-footer-copy">© RABUMATSU · BOOST LABO 2026</div>
    </footer>
  );
}

Object.assign(window, {
  PHOTOS,
  InlineCTA,
  ProfileSection,
  PainSection,
  FeaturesSection,
  ResultsSection,
  VoicesSection,
  GiftSection,
  ProofStrip,
  FAQSection,
  FinalCTA,
  StickyCTA,
  Footer,
});
