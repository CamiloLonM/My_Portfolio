import Dashboard from '../Dashboard';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const Home: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <Dashboard />
    </div>
  );
};

export default Home;
