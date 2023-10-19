type sliderProps = {
  min: number;
  max: number;
  step: number;
  value: number;
  setOption: React.Dispatch<React.SetStateAction<number>>;
};

const Slider: React.FunctionComponent<sliderProps> = ({
  min,
  max,
  step,
  value,
  setOption,
}) => {
  const fillRatio = (value * 100) / (max - min);

  return (
    <div className="slider-box">
      <input
        type="range"
        className="slider"
        min={min}
        max={max}
        step={step}
        value={value}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOption(Number(e.target.value))
        }
        style={{
          backgroundImage: `linear-gradient(90deg, hsl(174, 77%, 80%) 0%,hsl(174, 77%, 80%) ${fillRatio}%, hsl(224, 65%, 95%) ${
            fillRatio + 1
          }%, hsl(224, 65%, 95%) 100%)`,
        }}
      ></input>
    </div>
  );
};

export default Slider;
