import Signup from './pages/signup';
import Dashboard from "./pages/dashboard";
// import Inputfield from './components/inputfield';
// import Button from './components/button';
import {Switch,Route  } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Signup} />
       <Route exact path="/Dashboard" component={Dashboard} />
     </Switch>
     
    </div>
  );
}

export default App;
