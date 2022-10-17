import styled from 'styled-components';

const StatWrapper = styled.div`
  font-weight: 600;
  font-size: 16px;
  font-style: oblique;
  line-height: 1.3;
`;

const GoodStat = styled.p`
  color: greenyellow;
`;
const NeutralStat = styled.p`
  color: darkorange;
`;
const BadStat = styled.p`
  color: red;
`;
const TotalStat = styled.p`
  color: yellow;
  text-transform: uppercase;
`;
const PercentageStat = styled.p`
  color: aquamarine;
  text-transform: uppercase;
`;

export {
  GoodStat,
  BadStat,
  NeutralStat,
  TotalStat,
  PercentageStat,
  StatWrapper,
};
