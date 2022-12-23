import { Route, Routes } from 'react-router-dom';
import './App.css';
import Missions from './Components/Pages/MissionsPage';
import Rockets from './Components/Pages/RocketsPage';
import Profile from './Components/Pages/Profile';
import Layout from './Components/layout/layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/*" element={<Rockets />} />
      </Routes>
    </Layout>
  );
}

export default App;
