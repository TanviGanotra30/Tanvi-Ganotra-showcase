import "./Bubblecss.css";

const BubbleBackground = () => {
  return (
    <div className="container">
      {[...Array(5)].map((_, i) => (
        <div className="bubble" key={i}>
          {[...Array(5)].map((_, j) => (
            <span key={j}></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BubbleBackground;