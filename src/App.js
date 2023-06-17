import { GlobalStyle } from './components/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { StyledButton, DarkButton } from './components/styles/Button.styles';
import { Container } from './components/styles/Container';
import { palette } from './components/styles/palette';

function App() {
  return (
    <ThemeProvider theme={palette}>
      <Container>
        <GlobalStyle />
        <h3>Light theme buttons</h3>
        <StyledButton children={'Login'} data-active-light={true} />
        <StyledButton children={'Next'} data-active-light={true} />
        <StyledButton children={'Done'} data-active-light={true} />
        <StyledButton children={'Get SMS code'} data-active-light={false} />
        <h3>Dark theme buttons</h3>
        <DarkButton children={'Login'} data-active-dark={true} />
        <DarkButton children={'Next'} data-active-dark={true} />
        <DarkButton children={'Done'} data-active-dark={true} />
        <DarkButton children={'Get SMS code'} data-active-dark={false} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
