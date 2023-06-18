import { GlobalStyle } from './components/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import {
  PlainButton,
  LightButton,
  DarkButton,
} from './components/styles/Button.styles';
import { Container } from './components/styles/Container';
import { palette } from './components/styles/palette';
import InputField from './components/InputField';

function App() {
  return (
    <ThemeProvider theme={palette}>
      <GlobalStyle />
      <Container>
        <h3>Light theme buttons</h3>
        <PlainButton children={'Sign up'} />
        <LightButton children={'Login'} data-active-light={true} />
        <LightButton children={'Next'} data-active-light={true} />
        <LightButton children={'Done'} data-active-light={true} />
        <LightButton children={'Get SMS code'} data-active-light={false} />
      </Container>
      <Container variant="dark">
        <h3 style={{ color: 'white' }}>Dark theme buttons</h3>
        <PlainButton children={'Sign up'} data-active-dark={true} />
        <DarkButton children={'Login'} data-active-dark={true} />
        <DarkButton children={'Next'} data-active-dark={true} />
        <DarkButton children={'Done'} data-active-dark={true} />
        <DarkButton children={'Get SMS code'} data-active-dark={false} />
      </Container>
      <Container>
        <h3 style={{ marginBottom: '10px' }}>Light theme inputs</h3>
        <InputField label={'Phone number'} />
        <InputField label={'SMS Code'} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
