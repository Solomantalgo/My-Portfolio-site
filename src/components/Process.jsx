const Process = () => {
  return (
    <section className="process-bg">
      <div className="container">
        <div className="process-header reveal">
          <span className="sec-tag">How It Works</span>
          <h2 className="sec-title">From chat to live<br />site in 4 steps.</h2>
          <p className="sec-sub">Simple, fast and no technical knowledge needed from you.</p>
        </div>
        <div className="steps">
          <div className="step reveal">
            <div className="step-num">STEP</div>
            <h3>Message Me</h3>
            <p>Send me your business name, services and any photos on WhatsApp. I'll confirm within the hour.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">STEP</div>
            <h3>Pay 50% Deposit</h3>
            <p>Send 50% via Mobile Money to lock in your slot. Work begins immediately after confirmation.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">STEP</div>
            <h3>I Build It</h3>
            <p>Within 48 hours I send you a live link to review your new website. We make any adjustments you need.</p>
          </div>
          <div className="step reveal">
            <div className="step-num">STEP</div>
            <h3>Go Live & Pay Balance</h3>
            <p>You approve, pay the remaining 50%, and your website is live. Start sharing the link that same day.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
