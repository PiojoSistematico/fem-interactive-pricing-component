import check from "./assets/images/icon-check.svg";
import Toggle from "./components/Toggle";
import { useState } from "react";
import Slider from "./components/Slider";

function App() {
  const [isMonthly, setIsMonthly] = useState(true);

  function handleToggle(): void {
    console.log("Toggle");
    setIsMonthly(!isMonthly);
  }

  const options: number[] = [0, 25, 50, 75, 100];

  const startingOption: number = 2;

  return (
    <main>
      <section className="title-section">
        <h1> Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required. </p>
      </section>
      <section className="plan-section">
        <div className="slider-section">
          <span className="pageviews">XXX Pageviews</span>
          <Slider options={options} startingOption={startingOption}></Slider>
          <h2>
            <strong>$ XXX</strong> /month
          </h2>
          <div className="toggle-section">
            <span>Monthly Billing</span>
            <Toggle isMonthly={isMonthly} handleToggle={handleToggle}></Toggle>
            <span>Yearly Billing</span>
            <span className="discount">-25%</span>
          </div>
        </div>

        <section className="description-section">
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
        </section>
      </section>
    </main>
  );
}

export default App;
