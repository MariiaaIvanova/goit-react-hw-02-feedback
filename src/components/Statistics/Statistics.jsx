import PropTypes from 'prop-types';
import { StatisticList, StatsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
     <StatisticList>
      <StatsItem>Good :{good}</StatsItem>
      <StatsItem>Neutral :{neutral}</StatsItem>
      <StatsItem>Bad :{bad}</StatsItem>
      <StatsItem>Total :{total}</StatsItem>
      <StatsItem>Positive feedback :{positivePercentage}%</StatsItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;