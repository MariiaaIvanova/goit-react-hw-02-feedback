import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    <OptionsList>
        {options.map(option => {
        return (
          <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
            key={option}
          >
            {option}
          </Button>
        );
      })}
    </OptionsList>
}
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;