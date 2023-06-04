import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar";
import All_routes from './Route_file/All_routes';

function App() {
  return (
    <>
      <Navbar />
      <All_routes/>
    </>
  );
}

export default App;
