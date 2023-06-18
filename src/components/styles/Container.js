import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.variant === 'dark' ? '#141414' : '#E9E9E9'};
  width: 100vw;
`;
