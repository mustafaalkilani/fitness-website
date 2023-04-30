import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SignInContext } from '../../context/signin.context';


import './selectPage.styles.scss';

const RunComponent = () => {
    const navgaite = useNavigate();
    const {setIsSignIn} = useContext(SignInContext);
    setIsSignIn(true);
    const handleFitnessClick = () => {
      // redirect to fitness page
      navgaite('/FitnessDashBoard');
    };
  
    const handleEatingClick = () => {
      // redirect to eating page
      navgaite('/dashboard');
    };
  
    return (
      <div>
        <header className="header">
          <h1>Fitness and Eating Schedule</h1>
        </header>
        <div className="container">
          <div className="category" onClick={handleFitnessClick}>
            <img
              src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?cs=srgb&dl=pexels-pikx-by-panther-1547248.jpg&fm=jpg"
              alt="Fitness exercises"
            />
            <h2>Fitness exercises</h2>
          </div>
          <div className="category" onClick={handleEatingClick}>
            <img
              src="https://www.foodiesfeed.com/wp-content/uploads/2018/08/eating-high-protein-brunch-with-poached-eggs-beans-and-bacon-1.jpg"
              alt="Eating schedule"
            />
            <h2>Eating schedule</h2>
          </div>
        </div>
      </div>
    );
  };
  
const Home = () => {
    const {isSignedIn} = useContext(SignInContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) {
            navigate('/');
        }
    }, [isSignedIn, navigate]);

    return (
        <div>
            {isSignedIn ? <RunComponent /> : null}
        </div>
    );

}

  export default Home;