const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Feedback__buttons">
      {options.map(i => {
        return (
          <button key={i} type="button" onClick={onLeaveFeedback}>
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
