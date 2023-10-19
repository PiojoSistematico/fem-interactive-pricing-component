import check from "./assets/images/icon-check.svg";
import Toggle from "./components/Toggle";
import { useEffect, useState } from "react";
import Slider from "./components/Slider";
import circles from "./assets/images/pattern-circles.svg";
import bg from "./assets/images/bg-pattern.svg";

type dataProps = {
  pageViews: string;
  cost: number;
};

function App() {
  const [isMonthly, setIsMonthly] = useState(true);
  const [data, setData] = useState<dataProps[]>([
    { pageViews: "1K", cost: 1 },
    { pageViews: "1K", cost: 1 },
    { pageViews: "1K", cost: 1 },
  ]);

  const [option, setOption] = useState(2);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  function handleToggle(): void {
    setIsMonthly(!isMonthly);
  }

  return (
    <main>
      <img src={bg} alt="background" className="background" />
      <section className="title-section">
        <img src={circles} alt="circles image" className="circles" />
        <h1> Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required. </p>
      </section>
      <section className="plan-section">
        <div className="slider-section">
          <span className="pageviews">{data[option].pageViews} Pageviews</span>
          <Slider
            min={0}
            max={4}
            step={1}
            value={option}
            setOption={setOption}
          ></Slider>
          <h2>
            <strong>
              $ {isMonthly ? data[option].cost : data[option].cost * 12 * 0.75}
            </strong>{" "}
            {isMonthly ? "/month" : "/year"}
          </h2>
          <div className="toggle-section">
            <span>Monthly Billing</span>
            <Toggle isMonthly={isMonthly} handleToggle={handleToggle}></Toggle>
            <span>Yearly Billing</span>
            <span className="discount mobile">-25%</span>
            <span className="discount desktop">-25% discount</span>
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
