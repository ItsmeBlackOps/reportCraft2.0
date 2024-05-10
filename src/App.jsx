import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { AuthProvider } from './utils/AuthContent'
import Header from './Pages/Header'
import Home from './Pages/Home'
import Profile from './Pages/Pages'
import Login from './Pages/Login'
import InterviewForm from './Pages/InterviewForm'
import AdminRoutes from './utils/AdminRoutes'
import QuickFilterOutsideOfGrid from './Pages/Tasks'
import QuickFilterInsideOfGrid from './Pages/demo'
import { StyledEngineProvider } from '@mui/material/styles';

function App() {

  return (
    <Router>
      
        <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            {/* <Route path="/register" element={<Register/>}/> */}
              <Route path="/" element={<Home/>}/>
            <Route element={<PrivateRoutes />}>

              <Route path="/profile" element={<Profile/>}/>
              <Route path="/form" element={<InterviewForm/>}/>
              <Route path="/tasks" element={<QuickFilterOutsideOfGrid/>}/>
              <Route element={<AdminRoutes />}> {/* Use AdminRoutes */}

              <Route path="/demo" element={<StyledQuickFilterInsideOfGrid />} />


              
            </Route>
            </Route>
          </Routes>
        </AuthProvider>
    </Router>
  )
}


const StyledQuickFilterInsideOfGrid = () => (
  <StyledEngineProvider injectFirst>
    <QuickFilterInsideOfGrid />
  </StyledEngineProvider>
);

export default App