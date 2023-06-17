import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 344px;
  height: 50px;
  background-color: ${({ 'data-active-light': active, theme }) =>
    active ? theme.generalPebblePebble : theme.generalSilverSilver};
  backdrop-filter: blur(100px);
  border-radius: 10px;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  color: #f7f7f7;

  /* ------------------------------------------------ */
  cursor: pointer;
  margin: 15px;
`;

// ! night mode
// * background-color:#DADADA active generalGentleGray
// * color: #404040; active // text generalPebblePebble

// * background-color:#6A6A6A inactive darkThemeShadesOn
// * color: #c4c4c480; inactive // text generalSilverOp50

// Extending Styles

export const DarkButton = styled(StyledButton)`
  background-color: ${({ 'data-active-dark': active, theme }) =>
    active ? theme.generalGentleGray : theme.darkThemeShadesOn};
  color: ${({ 'data-active-dark': active, theme }) =>
    active ? theme.generalPebblePebble : theme.generalSilverOp50};
`;
