import PropTypes from 'prop-types';
import { Button, ButtonsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsWrapper>
      {options.map(i => {
        return (
          <Button key={i} type="button" onClick={onLeaveFeedback}>
            {i}
          </Button>
        );
      })}
    </ButtonsWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
