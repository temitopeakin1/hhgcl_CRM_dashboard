const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "contract begins":
        color = "rgb(186,255, 201)";
        break;
      case "contract still in progress":
        color = "rgb(255,223,186)";
        break;
      case "contract expires":
        color = "rgb(255,179,186)";
        break;
      default:
        color = "rgb(186, 225, 255)";
    }

    return color;
  };

  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    ></div>
  );
};

export default StatusDisplay;
