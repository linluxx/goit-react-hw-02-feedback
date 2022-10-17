import PropTypes from 'prop-types';
import {
  GoodStat,
  BadStat,
  NeutralStat,
  TotalStat,
  PercentageStat,
  StatWrapper,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatWrapper>
      <GoodStat>
        Good: <span>{good} </span>
      </GoodStat>
      <NeutralStat>
        Neutral: <span>{neutral} </span>
      </NeutralStat>
      <BadStat>
        Bad: <span>{bad} </span>
      </BadStat>
      <TotalStat>
        Total: <span>{total}</span>
      </TotalStat>
      <PercentageStat>
        Positive feedback: <span>{positivePercentage}%</span>
      </PercentageStat>
    </StatWrapper>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
