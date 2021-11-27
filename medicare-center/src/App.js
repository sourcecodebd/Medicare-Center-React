import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthProvider from './Components/context/AuthProvider';
import Home from './Components/Home/Home';
import Footer from './Components/shared/Footer/Footer';
import Header from './Components/shared/Header/Header';
import About from './Components/Home/About/About';
import MedicalServices from './Components/Home/MedicalServices/MedicalServices';
import SingleServiceDetails from './Components/SingleServiceDetails/SingleServiceDetails';
import Login from './Components/shared/Login/Login';
import Register from './Components/shared/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Banner from './Components/Home/Banner/Banner';
import AppointmentReview from './Components/AppointmentReview/AppointmentReview';
import SubmitInfo from './Components/SubmitInfo/SubmitInfo';
import DoctorsBanner from './Components/Home/DoctorsBanner/DoctorsBanner';
import AppointmentInfo from './Components/AppointmentInfo/AppointmentInfo';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/banner'>
              <Banner />
            </Route>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/medical-services'>
              <MedicalServices />
            </Route>
            <Route path='/doctors'>
              <DoctorsBanner />
            </Route>
            <PrivateRoute path='/single-service-details/:medicalId'>
              <SingleServiceDetails />
            </PrivateRoute>
            <PrivateRoute path='/appointment-review'>
              <AppointmentReview />
            </PrivateRoute>
            <PrivateRoute path='/submit-info'>
              <SubmitInfo />
            </PrivateRoute>
            <PrivateRoute path='/appointment-info'>
              <AppointmentInfo />
            </PrivateRoute>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
