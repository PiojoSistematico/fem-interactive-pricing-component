import slider from "./assets/images/icon-slider.svg";
import check from "./assets/images/icon-check.svg";
function App() {
  return (
    <main>
      <section className="title">
        <h1> Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required. </p>
      </section>
      <section className="plan-section">
        <span>XXX Pageviews</span>
        <div className="bar">
          <img src={slider} alt="" />
        </div>
        <h2>$ XXX /month</h2>
        <div>
          <div>
            <span>Monthly Billing</span>
            <span>SLIDER</span>
            <span>Yearly Billing</span>
            <span>25% discount</span>
          </div>
          <div>
            <ul>
              <li>
                <img src={check} alt="" />
                <span>Unlimited websites</span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>100% data ownership</span>
              </li>
              <li>
                <img src={check} alt="" />
                <span>Email reports</span>
              </li>
            </ul>
            <button>Start my trial</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
