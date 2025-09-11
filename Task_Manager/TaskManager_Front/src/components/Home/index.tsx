import Dashboard from '../Dashboard';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import { ContainerStyle } from './styles';

const Home: React.FC = () => {
  return (
    <ContainerStyle aria-label='home_component'>
      <Sidebar />
      <Dashboard />
    </ContainerStyle>
  );
};

export default Home;
