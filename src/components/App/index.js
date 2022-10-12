import GlobalStyles from '../../assets/styles/global';
import Header from '../../sections/Header';
import LeftSide from '../../sections/LeftSide';
import RightSide from '../../sections/RightSide';
import { Container } from './styles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Container>
        <LeftSide />
        <RightSide />
      </Container>
    </>
  );
}
