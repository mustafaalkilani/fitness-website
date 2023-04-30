import { Routes, Route} from 'react-router-dom';
import Admin from './routes/adminPage/admin.component';
import DashBoard from './routes/dashboard/dashboard.component';
import Home from './routes/selectPage/SelectPage.component';
import FitnessDashBoard from './routes/fitness/fitness.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Admin />} />
      <Route path='dashboard' element={<DashBoard />} />
      <Route path='Home' element={<Home />} />
      <Route path='FitnessDashBoard' element={<FitnessDashBoard />} />
    </Routes>
  )
}

export default App;
