type ToggleProps = {
  isMonthly: boolean;
  handleToggle: any;
};

const Toggle: React.FunctionComponent<ToggleProps> = ({
  isMonthly,
  handleToggle,
}) => {
  return (
    <button className="toggle" onClick={handleToggle}>
      <span
        className={isMonthly ? "toggle-circle left" : "toggle-circle right"}
      ></span>
    </button>
  );
};

export default Toggle;
