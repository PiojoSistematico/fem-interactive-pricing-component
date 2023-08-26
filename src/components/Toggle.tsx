type ToggleProps = {
  isMonthly: boolean;
  handleToggle: any;
};

const Toggle: React.FunctionComponent<ToggleProps> = ({
  isMonthly,
  handleToggle,
}) => {
  return (
    <button
      className={isMonthly ? "toggle left" : "toggle right"}
      onClick={handleToggle}
    >
      <span className="circle"></span>
    </button>
  );
};

export default Toggle;
