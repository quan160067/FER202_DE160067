import 'bootstrap/dist/css/bootstrap.min.css';
import CounterComponent from './ex1/CounterComponent';
import LightSwitch from './ex2/LightSwitch';
import LoginForm from './ex3/LoginForm';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 mb-4">🎯 useState Hook Exercises</h1>
      <CounterComponent />
      <hr />
      <LightSwitch />
      <hr />
      <LoginForm />
    </div>
  );
}

export default App;
